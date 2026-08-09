#!/usr/bin/env python3
"""Invent the political, cultural and religious layers for the world page.

Post-processes docs/world/map/meta.json (after tools/build_fixed_map.py):
grows counties -> duchies -> kingdoms -> empires over the land-province
adjacency graph, spreads cultures and faiths regionally, generates
culture-flavoured names for every settled province and title, and staffs
every title with an invented holder. Proportions follow the Godherja map
(~89% of land settled, ~3.3 provinces per county, ~3.1 counties per duchy,
~3.7 duchies per kingdom, ~4.1 kingdoms per empire, nearly all kingdoms
sworn to an empire).

Deterministic (fixed seed). Needs only pillow+numpy (CI-safe).
"""
import colorsys
import json
import os
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = Path(os.environ.get("GH_OUT_DIR", ROOT / "docs" / "world" / "map"))
RNG = np.random.default_rng(20260809)
YEAR = 1254

# ---------------------------------------------------------------- name packs
PACKS = [
    dict(on="b d f g h k l r s t v th sk gr br".split(),
         vo="a e i o u ei au".split(),
         co="r d n rn ld rd gr nd st mm".split()),                 # norse
    dict(on="b c d g l m n p r s t v qu fl pr".split(),
         vo="a e i o u ia io".split(),
         co="us um a is io or ia ax".split()),                     # latinate
    dict(on="ch k kh g t d zh sh b m n s".split(),
         vo="a o u ai ua".split(),
         co="n ng r kh sh t l gan dai".split()),                   # steppe
    dict(on="al am az f h j kh m n r s w y z".split(),
         vo="a i u aa ay".split(),
         co="d f l m n q r sh ir am".split()),                     # desert
    dict(on="b br c d g gw k l ll m p r t".split(),
         vo="a e i o y ae".split(),
         co="n dd th c wyn gan mor eth".split()),                  # celtic
    dict(on="b d dr g k m n p s v z zl st".split(),
         vo="a e i o u".split(),
         co="v n k slav mir gorod in a ov".split()),               # slavic
    dict(on="d th ph k x n m p s ch t".split(),
         vo="a e i o y ei".split(),
         co="os is on ys ea eia ikos".split()),                    # hellenic
    dict(on="e i a o k t m n r s h w".split(),
         vo="a e i o u".split(),
         co="li ko ta ri no mu ha".split()),                       # island
]
_used_names = set()

def make_name(pack, syl=None):
    for _ in range(60):
        n = int(RNG.integers(2, 4)) if syl is None else syl
        parts = []
        for s in range(n):
            parts.append(str(RNG.choice(pack["on"])))
            parts.append(str(RNG.choice(pack["vo"])))
        if RNG.random() < 0.8:
            parts.append(str(RNG.choice(pack["co"])))
        nm = "".join(parts).capitalize()
        if 4 <= len(nm) <= 12 and nm not in _used_names:
            _used_names.add(nm)
            return nm
    _used_names.add(nm + "a")
    return nm + "a"

def wheel(i, n, s, v, jit=0.06):
    h = (i * 0.61803398875) % 1.0
    r, g, b = colorsys.hsv_to_rgb(h, s + (RNG.random() - .5) * jit * 2,
                                  v + (RNG.random() - .5) * jit * 2)
    return [int(r * 255), int(g * 255), int(b * 255)]

# ------------------------------------------------------------------- inputs
print("loading world meta ...")
meta = json.loads((OUT / "meta.json").read_text())
prov = np.asarray(Image.open(OUT / "prov.png").convert("RGB"))
rid = prov[:, :, 0].astype(np.int32) | (prov[:, :, 1].astype(np.int32) << 8)
H, W = rid.shape
pm = meta["provinces"]

MTN = 10
land_ids = [int(k) for k, v in pm.items() if not v.get("s")]
land_set = set(land_ids)

# pixel counts + centroids + adjacency from the grid
cnt, cy, cx = {}, {}, {}
ids, counts = np.unique(rid, return_counts=True)
ys = np.repeat(np.arange(H), W).reshape(H, W)
xs = np.tile(np.arange(W), H).reshape(H, W)
for i, c in zip(ids, counts):
    if int(i) in land_set:
        cnt[int(i)] = int(c)
sy = np.zeros(65536); sx = np.zeros(65536)
np.add.at(sy, rid.ravel(), ys.ravel())
np.add.at(sx, rid.ravel(), xs.ravel())
for i in cnt:
    cy[i] = sy[i] / cnt[i]
    cx[i] = sx[i] / cnt[i]

adj = {i: set() for i in cnt}
a1, a2 = rid[:, :-1].ravel(), rid[:, 1:].ravel()
b1, b2 = rid[:-1, :].ravel(), rid[1:, :].ravel()
pairs = np.unique(np.concatenate([
    np.stack([np.minimum(a1, a2), np.maximum(a1, a2)], 1)[a1 != a2],
    np.stack([np.minimum(b1, b2), np.maximum(b1, b2)], 1)[b1 != b2]]), axis=0)
for u, v in pairs:
    u, v = int(u), int(v)
    if u in cnt and v in cnt:
        adj[u].add(v); adj[v].add(u)

# ---------------------------------------------------------------- wasteland
# mountain ranges stay impassable, tiny skerries stay uncolonised
settled = [i for i in cnt
           if pm[str(i)]["t"] != MTN and cnt[i] >= 20]
sset = set(settled)
print(f"  land {len(cnt)}, settled {len(settled)} ({len(settled)/len(cnt):.0%})")

# ---------------------------------------------------------------- cultures
NCULT = 60
print("spreading cultures ...")
order = sorted(settled, key=lambda i: -cnt[i])
seeds = [order[0]]
for i in order:
    if len(seeds) >= NCULT:
        break
    d = min((cy[i] - cy[s]) ** 2 + (cx[i] - cx[s]) ** 2 for s in seeds)
    if d > 120 ** 2:
        seeds.append(i)
cult_of = {}
frontier = []
for ci, s in enumerate(seeds):
    cult_of[s] = ci
    frontier.append((RNG.random(), s))
import heapq
heapq.heapify(frontier)
while frontier:
    _, u = heapq.heappop(frontier)
    for v in adj[u]:
        if v in sset and v not in cult_of:
            cult_of[v] = cult_of[u]
            heapq.heappush(frontier, (RNG.random() + 0.0, v))
for i in settled:                       # disconnected islands: nearest culture
    if i not in cult_of:
        s = min(seeds, key=lambda s_: (cy[i] - cy[s_]) ** 2 + (cx[i] - cx[s_]) ** 2)
        cult_of[i] = cult_of[s]

cpack = [PACKS[int((cy[s] * 3 // H) * 3 + (cx[s] * 3 // W)) % len(PACKS)] for s in seeds]
ETHOS = ["Bellicose", "Stoic", "Bureaucratic", "Spiritual", "Courtly", "Egalitarian"]
MART = ["Men-at-Arms", "Male Only", "Equal", "Female Only"]
TRAD = ["Hill Dwellers", "Seafarers", "Practiced Pirates", "Hardy Mountaineers",
        "Agrarian", "Warrior Culture", "Hussar", "Astute Diplomats", "Loyal Subjects",
        "Zealous People", "Stalwart Defenders", "Legalistic", "Mystical Ancestors",
        "Sacred Groves", "Storytellers", "Fervent Temple Builders"]
cultures = []
for ci, s in enumerate(seeds):
    nm = make_name(cpack[ci])
    cultures.append(dict(
        n=nm, c=wheel(ci, NCULT, 0.55, 0.72),
        e=str(RNG.choice(ETHOS)), he=make_name(cpack[ci]) + "ic",
        l=nm + ("ish" if nm[-1] not in "aeiou" else "n"),
        m=str(RNG.choice(MART)),
        t=[str(t) for t in RNG.choice(TRAD, size=3, replace=False)]))

# ------------------------------------------------------------------ faiths
NFAITH = 40
print("kindling faiths ...")
big_cults = sorted(range(NCULT), key=lambda ci: -sum(cnt[i] for i in settled if cult_of[i] == ci))
fseeds = []
for k in range(NFAITH):
    ci = big_cults[k % min(len(big_cults), 28)]
    pool = [i for i in settled if cult_of[i] == ci]
    fseeds.append(int(RNG.choice(pool)))
faith_of = {}
frontier = []
for fi, s in enumerate(fseeds):
    faith_of[s] = fi
    frontier.append((RNG.random(), s))
heapq.heapify(frontier)
while frontier:
    _, u = heapq.heappop(frontier)
    for v in adj[u]:
        if v in sset and v not in faith_of:
            faith_of[v] = faith_of[u]
            heapq.heappush(frontier, (RNG.random(), v))
for i in settled:
    if i not in faith_of:
        s = min(fseeds, key=lambda s_: (cy[i] - cy[s_]) ** 2 + (cx[i] - cx[s_]) ** 2)
        faith_of[i] = faith_of[s]

TEN = ["Communal Identity", "Ancestor Worship", "Sacred Childbirth", "Sun Worship",
       "Esotericism", "Ritual Hospitality", "Pilgrimage", "Warmonger", "Pacifism",
       "Mendicant Preachers", "Adaptive", "Divine Marriage", "Astrology", "Rite"]
faiths = []
for fi, s in enumerate(fseeds):
    pk = cpack[cult_of[s]]
    nm = make_name(pk)
    fam = make_name(pk)
    faiths.append(dict(
        n=nm + ("ism" if nm[-1] not in "aeiou" else "sm"),
        c=wheel(fi + 17, NFAITH, 0.6, 0.66),
        r=fam + "ism", ad=nm + "ite",
        d=f"The {nm}ite creed rose among the {cultures[cult_of[s]]['n']} and "
          f"venerates the powers of sky, stone and tide.",
        t=[str(t) for t in RNG.choice(TEN, size=3, replace=False)], hs=[]))

# ------------------------------------------------------- generic clustering
def agglomerate(nodes, nadj, keyf, target, pos, wt, reach):
    """merge smallest clusters into their best neighbour until `target`
    clusters remain; disconnected islands may leap to the nearest cluster
    within `reach` px (sea crossings), else stay their own cluster."""
    nodes = list(nodes)
    cl = {n: {n} for n in nodes}
    parent = {n: n for n in nodes}
    csum = {n: (pos[n][0] * wt[n], pos[n][1] * wt[n], wt[n]) for n in nodes}
    frozen = set()

    def cpos(c):
        sy_, sx_, w_ = csum[c]
        return (sy_ / w_, sx_ / w_)

    def neighbours(c):
        nb = set()
        for n in cl[c]:
            for v in nadj[n]:
                p = parent.get(v)
                if p is not None and p != c:
                    nb.add(p)
        return nb

    while len(cl) - len(frozen) > 0 and len(cl) > target:
        cands = [c for c in cl if c not in frozen]
        if not cands:
            break
        c = min(cands, key=lambda c_: (len(cl[c_]), RNG.random()))
        nb = neighbours(c)
        if not nb:
            others = [o for o in cl if o != c]
            if not others:
                break
            py, px_ = cpos(c)
            best = min(others, key=lambda o: (cpos(o)[0] - py) ** 2 + (cpos(o)[1] - px_) ** 2)
            by, bx = cpos(best)
            if ((by - py) ** 2 + (bx - px_) ** 2) ** 0.5 > reach:
                frozen.add(c)
                continue
        else:
            k0 = keyf(next(iter(cl[c])))
            best = min(nb, key=lambda o: (keyf(next(iter(cl[o]))) != k0,
                                          len(cl[o]), RNG.random()))
        cl[best] |= cl[c]
        s1, s2, s3 = csum[best]; t1, t2, t3 = csum[c]
        csum[best] = (s1 + t1, s2 + t2, s3 + t3)
        for n in cl[c]:
            parent[n] = best
        del cl[c], csum[c]
        frozen.discard(best)
    return [sorted(g) for g in cl.values()]

def lift_adj(groups, node_adj):
    gid = {}
    for k, g in enumerate(groups):
        for n in g:
            gid[n] = k
    ga = {k: set() for k in range(len(groups))}
    for n, k in gid.items():
        for v in node_adj[n]:
            kv = gid.get(v)
            if kv is not None and kv != k:
                ga[k].add(kv); ga[kv].add(k)
    return ga, gid

# --------------------------------------------------------------- hierarchy
# Godherja ratios: ~3.3 provs/county, ~3.1 counties/duchy, ~3.7 duchies/
# kingdom, ~4.1 kingdoms/empire
print("raising counties, duchies, kingdoms, empires ...")
ppos = {i: (cy[i], cx[i]) for i in settled}
pwt = {i: cnt[i] for i in settled}
county_groups = agglomerate(settled, adj, lambda i: cult_of[i],
                            round(len(settled) / 3.3), ppos, pwt, 40)
c_adj, county_of = lift_adj(county_groups, adj)
cpos_ = {k: (float(np.mean([cy[i] for i in g])), float(np.mean([cx[i] for i in g])))
         for k, g in enumerate(county_groups)}
cwt = {k: sum(cnt[i] for i in g) for k, g in enumerate(county_groups)}
duchy_groups = agglomerate(range(len(county_groups)), c_adj,
                           lambda c: cult_of[county_groups[c][0]],
                           round(len(county_groups) / 3.1), cpos_, cwt, 140)
d_adj, duchy_of = lift_adj(duchy_groups, c_adj)
dpos = {k: (float(np.mean([cpos_[c][0] for c in g])), float(np.mean([cpos_[c][1] for c in g])))
        for k, g in enumerate(duchy_groups)}
dwt = {k: sum(cwt[c] for c in g) for k, g in enumerate(duchy_groups)}
king_groups = agglomerate(range(len(duchy_groups)), d_adj,
                          lambda d: cult_of[county_groups[duchy_groups[d][0]][0]],
                          round(len(duchy_groups) / 3.65), dpos, dwt, 320)
k_adj, king_of = lift_adj(king_groups, d_adj)
kpos = {k: (float(np.mean([dpos[d][0] for d in g])), float(np.mean([dpos[d][1] for d in g])))
        for k, g in enumerate(king_groups)}
kwt = {k: sum(dwt[d] for d in g) for k, g in enumerate(king_groups)}
emp_groups = agglomerate(range(len(king_groups)), k_adj, lambda k: 0,
                         round(len(king_groups) / 4.1), kpos, kwt, 900)
print(f"  {len(county_groups)} counties, {len(duchy_groups)} duchies, "
      f"{len(king_groups)} kingdoms, {len(emp_groups)} empire groups")

# ------------------------------------------------------- names and holders
chars = {}
def holder(pack, faith_idx):
    key = f"w{len(chars)}"
    age = int(RNG.integers(18, 68))
    chars[key] = dict(n=make_name(pack, syl=2), dy=make_name(pack), mo=None,
                      f=int(faith_idx), sk=[int(RNG.integers(0, 18)) for _ in range(5)],
                      tr=[], ti=[], b=YEAR - age, dd=None)
    return chars[key]["n"], key

# name every settled province in its culture's flavour
for i in settled:
    pm[str(i)]["n"] = make_name(cpack[cult_of[i]])

counties = []
for cg in county_groups:
    seat = max(cg, key=lambda i: cnt[i])
    pk = cpack[cult_of[seat]]
    hn, hk = holder(pk, faith_of[seat])
    counties.append(dict(n=pm[str(seat)]["n"], d=-1, h=hn, hk=hk))
    for i in cg:
        pm[str(i)]["c"] = len(counties) - 1

duchies = []
for dg in duchy_groups:
    seat_ct = max(dg, key=lambda c: sum(cnt[i] for i in county_groups[c]))
    seat = max(county_groups[seat_ct], key=lambda i: cnt[i])
    pk = cpack[cult_of[seat]]
    hn, hk = holder(pk, faith_of[seat])
    duchies.append(dict(n=make_name(pk), k=-1, h=hn, hk=hk))
    for c in dg:
        counties[c]["d"] = len(duchies) - 1

kingdoms = []
for ki, kg in enumerate(king_groups):
    seat_d = kg[0]
    seat_ct = duchy_groups[seat_d][0]
    seat = max(county_groups[seat_ct], key=lambda i: cnt[i])
    pk = cpack[cult_of[seat]]
    hn, hk = holder(pk, faith_of[seat])
    kingdoms.append(dict(n=make_name(pk), c=wheel(ki, len(king_groups), 0.5, 0.78),
                         e=-1, h=hn, hk=hk, cap=int(seat_ct)))
    for d in kg:
        duchies[d]["k"] = len(kingdoms) - 1

empires = []
for ei, eg in enumerate(emp_groups):
    if len(eg) < 2 and RNG.random() < 0.5:
        continue                        # small groups may stay independent
    seat_k = eg[0]
    cap = kingdoms[seat_k]["cap"]
    seat = max(county_groups[cap], key=lambda i: cnt[i])
    pk = cpack[cult_of[seat]]
    hn, hk = holder(pk, faith_of[seat])
    empires.append(dict(n=make_name(pk), c=wheel(ei + 5, len(emp_groups), 0.62, 0.55),
                        h=hn, hk=hk, cap=int(cap)))
    for k in eg:
        kingdoms[k]["e"] = len(empires) - 1
print(f"  kingdoms sworn to empires: "
      f"{sum(1 for k in kingdoms if k['e'] >= 0)}/{len(kingdoms)}")

# ------------------------------------------------------ faith holy sites
for fi, f in enumerate(faiths):
    own = [i for i in settled if faith_of[i] == fi]
    RNG.shuffle(own)
    sites = []
    for i in own[:3]:
        sites.append(dict(n=pm[str(i)]["n"], c=int(pm[str(i)]["c"])))
    f["hs"] = sites

# --------------------------------------------------------------- development
# terrain base + a few civilisation cores + coastal bonus + capital boosts
print("settling development ...")
DEVBASE = {3: 40, 4: 44, 5: 60, 6: 34, 7: 30, 8: 22, 9: 26, 10: 12, 11: 8}
sea_touch = set()
for u, v in pairs:
    u, v = int(u), int(v)
    if u in cnt and v not in cnt:
        sea_touch.add(u)
    if v in cnt and u not in cnt:
        sea_touch.add(v)
cores = [seeds[ci] for ci in big_cults[:6]]
dev = {}
for i in settled:
    d = DEVBASE.get(pm[str(i)]["t"], 35) + (RNG.random() - 0.5) * 14
    core_d = min(((cy[i] - cy[c]) ** 2 + (cx[i] - cx[c]) ** 2) ** 0.5 for c in cores)
    d += 30.0 * np.exp(-core_d / 260.0)
    if i in sea_touch:
        d += 7
    dev[i] = d
for cg in county_groups:
    seat = max(cg, key=lambda i: cnt[i])
    dev[seat] += 4
for ki, k in enumerate(kingdoms):
    seat = max(county_groups[k["cap"]], key=lambda i: cnt[i])
    dev[seat] += 12
for e in empires:
    seat = max(county_groups[e["cap"]], key=lambda i: cnt[i])
    dev[seat] += 18

# ------------------------------------------------------------- provinces
for i in cnt:
    p = pm[str(i)]
    if i in sset:
        p["cu"] = int(cult_of[i])
        p["f"] = int(faith_of[i])
        hroll = RNG.random()
        p["h"] = 1 if hroll < 0.58 else 2 if hroll < 0.80 else 3 if hroll < 0.92 else 4
        p["dv"] = int(np.clip(round(dev[i]), 3, 96))
    else:
        p["c"] = -1; p["cu"] = -1; p["f"] = -1; p["h"] = 0

meta["counties"] = counties
meta["duchies"] = duchies
meta["kingdoms"] = kingdoms
meta["empires"] = empires
meta["cultures"] = cultures
meta["faiths"] = faiths
meta["chars"] = chars

(OUT / "meta.json").write_text(json.dumps(meta, separators=(",", ":")))
print("meta.json updated.")
