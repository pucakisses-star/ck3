var Zl=Object.defineProperty;var Jl=(i,e,t)=>e in i?Zl(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ct=(i,e,t)=>Jl(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Be={DEEP:0,OCEAN:1,SHALLOW:2,BEACH:3,PLAINS:4,FARM:5,FOREST:6,HILLS:7,DRY:8,WET:9,MTN:10,SNOW:11},dl={[Be.DEEP]:[54,70,68],[Be.OCEAN]:[70,88,84],[Be.SHALLOW]:[94,110,102],[Be.BEACH]:[186,174,138],[Be.PLAINS]:[138,148,98],[Be.FARM]:[172,162,96],[Be.FOREST]:[84,110,76],[Be.HILLS]:[138,128,92],[Be.DRY]:[188,164,116],[Be.WET]:[100,120,100],[Be.MTN]:[128,116,102],[Be.SNOW]:[222,222,220]},Qn={[Be.DEEP]:"Ocean",[Be.OCEAN]:"Ocean",[Be.SHALLOW]:"Coastal waters",[Be.BEACH]:"Coast",[Be.PLAINS]:"Plains",[Be.FARM]:"Farmland",[Be.FOREST]:"Forest",[Be.HILLS]:"Hills",[Be.DRY]:"Drylands",[Be.WET]:"Wetlands",[Be.MTN]:"Mountains",[Be.SNOW]:"Snow"},Ql=i=>i<=Be.SHALLOW,Ja=[[96,120,84],[118,102,146],[172,118,76],[140,142,90],[144,102,102],[94,136,142],[154,84,90],[94,114,154],[124,90,138],[164,142,84],[84,132,114],[158,100,80],[108,102,146],[80,118,88],[168,130,102],[128,90,100],[102,138,142],[154,130,74],[88,108,140],[148,108,140],[118,146,98],[150,92,108],[92,122,100],[166,118,88]];function Qa(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function jl(i){const e=i*2654435761>>>0;function t(a,o){let l=a*374761393+o*668265263+e*1442695041|0;return l=Math.imul(l^l>>>13,1274126177),((l^l>>>16)>>>0)/4294967295}const n=a=>a*a*(3-2*a);function r(a,o){const l=Math.floor(a),c=Math.floor(o),h=n(a-l),f=n(o-c),d=t(l,c),_=t(l+1,c),x=t(l,c+1),A=t(l+1,c+1);return d+(_-d)*h+(x-d)*f+(d-_-x+A)*h*f}function s(a,o,l,c=.5,h=2){let f=1,d=1,_=0,x=0;for(let A=0;A<l;A++)_+=d*r(a*f,o*f),x+=d,d*=c,f*=h;return _/x}return{vn:r,fbm:s}}function ec(i){const e=["b","br","d","dr","f","g","gr","h","k","kr","l","m","n","r","s","sk","st","t","th","v","vr","w","z","bh","kh","sh"],t=["a","a","e","e","i","o","o","u","au","ae","ei","ou","y","ia","eo"],n=["n","r","l","s","m","th","sk","rn","ld","st","k","d","g","ng","rk","ss","dt","vn"],r=o=>o.charAt(0).toUpperCase()+o.slice(1);function s(o,l){const c=o+Math.floor(i()*(l-o+1));let h="";for(let f=0;f<c;f++)(f>0||i()<.75)&&(h+=e[Math.floor(i()*e.length)]),h+=t[Math.floor(i()*t.length)],(f===c-1||i()<.35)&&(h+=n[Math.floor(i()*n.length)]);return r(h)}const a=["reach","mark","land","gard","heim","fell","moor","vale","wold","holt","stead","watch","crown","host","rike"];return{prov:()=>s(1,2),duchy:()=>s(2,2),kingdom:()=>i()<.4?s(2,3)+" "+r(a[Math.floor(i()*a.length)]):s(2,3),empire:()=>s(2,3)+(i()<.5?" "+r(a[Math.floor(i()*a.length)]):"")}}function Qr(i){return new Promise((e,t)=>{const n=new Image;n.onload=()=>{const r=document.createElement("canvas");r.width=n.naturalWidth,r.height=n.naturalHeight;const s=r.getContext("2d",{willReadFrequently:!0});s.imageSmoothingEnabled=!1,s.drawImage(n,0,0),e(s.getImageData(0,0,r.width,r.height))},n.onerror=()=>t(new Error("failed to load "+i)),n.src=i})}function ja(i,e,t){i/=360;const n=e*Math.min(t,1-t),r=s=>{const a=(s+i*12)%12;return t-n*Math.max(-1,Math.min(a-3,9-a,1))};return[r(0)*255,r(8)*255,r(4)*255]}async function tc(i,e){var ht,et;const[t,n,r]=await Promise.all([fetch(e+"map/meta.json").then(F=>{if(!F.ok)throw new Error("meta.json HTTP "+F.status);return F.json()}),Qr(e+"map/prov.png"),Qr(e+"map/height.png")]),s=await Qr(t.rivers),a=t.W,o=t.H,l=a*o,c=t.provinces,h=jl((i>>>0)+4523),f=ec(Qa(99991)).prov,d=F=>/^(province\s*)?\d+$/i.test(F),_=n.data,x=r.data,A=s.data,p=new Float32Array(l),u=new Float32Array(l),b=new Uint8Array(l),R=new Int32Array(l).fill(-1),v=new Uint8Array(l),T=new Uint8Array(l),E=new Uint16Array(l),w=new Map,m=new Map,S=[],D=[],L=[],N=[],B=[],G=[],U=[],k=[];for(let F=0;F<o;F++)for(let ae=0;ae<a;ae++){const we=F*a+ae;p[we]=x[we*4]/255,u[we]=h.fbm(ae/a*2.4+13,F/o*2.4+21,3),T[we]=A[we*4]>128?1:0;const Ce=_[we*4]|_[we*4+1]<<8;E[we]=Ce;const $e=Ce?c[Ce]:void 0;if(!$e||$e.s){if(v[we]=Be.OCEAN,$e){let On=w.get(Ce);On||(On={sx:0,sy:0,n:0},w.set(Ce,On)),On.sx+=ae,On.sy+=F,On.n++}continue}let Jn=m.get(Ce);Jn===void 0&&(Jn=S.length,m.set(Ce,Jn),S.push(d($e.n)?f():$e.n),D.push(Ce),L.push($e.t),N.push($e.c??-1),B.push($e.cu??-1),G.push($e.f??-1),U.push($e.h??0),k.push($e.dv??-1)),R[we]=Jn,b[we]=1,v[we]=$e.t}const I=S.length,W=new Int32Array(I),ne=new Float64Array(I),oe=new Float64Array(I),se=new Int32Array(I).fill(1e9),de=new Int32Array(I).fill(1e9),We=new Int32Array(I).fill(-1),Je=new Int32Array(I).fill(-1),He=new Uint8Array(I);for(let F=0;F<I;F++)He[F]=L[F];for(let F=0;F<o;F++)for(let ae=0;ae<a;ae++){const we=F*a+ae,Ce=R[we];Ce<0||(W[Ce]++,ne[Ce]+=ae,oe[Ce]+=F,ae<se[Ce]&&(se[Ce]=ae),F<de[Ce]&&(de[Ce]=F),ae>We[Ce]&&(We[Ce]=ae),F>Je[Ce]&&(Je[Ce]=F))}const j=[];for(let F=0;F<I;F++)j.push(new Set);for(let F=0;F<o;F++)for(let ae=0;ae<a;ae++){const we=F*a+ae,Ce=R[we];if(!(Ce<0)){if(ae+1<a){const $e=R[we+1];$e>=0&&$e!==Ce&&(j[Ce].add($e),j[$e].add(Ce))}if(F+1<o){const $e=R[we+a];$e>=0&&$e!==Ce&&(j[Ce].add($e),j[$e].add(Ce))}}}const te=new Float64Array(I),le=new Float64Array(I);for(let F=0;F<I;F++)te[F]=ne[F]/Math.max(1,W[F]),le[F]=oe[F]/Math.max(1,W[F]);const De=new Int32Array(I),ze=new Int32Array(I),Ae=new Int32Array(I),ut=new Int32Array(I),Xe=new Int32Array(I),je=new Int32Array(I);for(let F=0;F<I;F++){const ae=N[F];De[F]=ae;const we=ae>=0?t.counties[ae].d:-1;ze[F]=we;const Ce=we>=0?t.duchies[we].k:-1;Ae[F]=Ce,ut[F]=Ce>=0?t.kingdoms[Ce].e:-1,Xe[F]=B[F],je[F]=G[F]}const qe=t.counties.map(F=>F.n),Ye=t.duchies.map(F=>F.n),gt=t.kingdoms.map(F=>F.n),ft=t.empires.map(F=>F.n),At=t.kingdoms.map((F,ae)=>F.c??Ja[ae%Ja.length]),vt=t.counties.map(F=>F.h??null),st=t.duchies.map(F=>F.h??null),dt=t.kingdoms.map(F=>F.h??null),z=t.empires.map(F=>F.h??null),Lt=t.counties.map(F=>F.hk??null),Qe=t.duchies.map(F=>F.hk??null),P=t.kingdoms.map(F=>F.hk??null),g=t.empires.map(F=>F.hk??null),V=t.cultures.map(F=>F.e??null),Y=t.cultures.map(F=>F.he??null),Q=t.cultures.map(F=>F.l??null),ue=t.cultures.map(F=>F.m??null),he=t.cultures.map(F=>F.t??[]),ee=t.cultures.map(F=>F.n),ie=t.faiths.map(F=>F.n),ge=t.faiths.map(F=>!!F.i),Re=t.faiths.map(F=>F.r??null),xe=t.faiths.map(F=>F.ad??null),fe=t.faiths.map(F=>F.d??null),Le=t.faiths.map(F=>F.t??[]),Fe=t.faiths.map(F=>F.hs??[]),ke=t.cultures.map((F,ae)=>F.c??ja(ae*97%360,.32,.5)),O=t.faiths.map((F,ae)=>F.c??ja((ae*151+40)%360,.3,.52)),pe=Qa(i>>>0),re={[Be.FARM]:70,[Be.PLAINS]:55,[Be.FOREST]:42,[Be.HILLS]:35,[Be.WET]:30,[Be.DRY]:25,[Be.MTN]:14,[Be.SNOW]:8,[Be.BEACH]:48},me=new Uint8Array(I);for(let F=0;F<I;F++){let ae=k[F]>=0?k[F]:(re[He[F]]??40)+(pe()-.5)*26;me[F]=Math.max(1,Math.min(100,Math.round(ae)))}const M=[];for(let F=0;F<l;F+=7)b[F]&&M.push(p[F]);M.sort((F,ae)=>F-ae);const C=M.length?M[Math.floor(M.length*.02)]:.3;for(let F=0;F<l;F++)b[F]&&p[F]<C+.014&&(p[F]=C+.014);const X=new Uint8Array(l);{for(let ae=0;ae<l;ae++)X[ae]=b[ae]?255:0;for(let ae=0;ae<o;ae++)for(let we=0;we<a;we++){const Ce=ae*a+we;if(!b[Ce])continue;let $e=X[Ce];we>0&&($e=Math.min($e,X[Ce-1]+1)),ae>0&&($e=Math.min($e,X[Ce-a]+1)),X[Ce]=$e}for(let ae=o-1;ae>=0;ae--)for(let we=a-1;we>=0;we--){const Ce=ae*a+we;if(!b[Ce])continue;let $e=X[Ce];we<a-1&&($e=Math.min($e,X[Ce+1]+1)),ae<o-1&&($e=Math.min($e,X[Ce+a]+1)),X[Ce]=$e}}const Z=65536,ce=new Int32Array(Z).fill(-1),_e=new Int32Array(Z).fill(-1),Ge=new Int32Array(Z).fill(-1),Ie=new Uint8Array(Z);for(const F of Object.keys(c)){const ae=+F,we=c[F];!we||we.s||(Ie[ae]=1,ce[ae]=we.c??-1,_e[ae]=we.cu??-1,Ge[ae]=we.f??-1)}const it=Int32Array.from(t.counties.map(F=>F.d)),xt=Int32Array.from(t.duchies.map(F=>F.k)),Dt=Int32Array.from(t.kingdoms.map(F=>F.e)),ve=new Map;for(const[F,ae]of w){const we=(ht=c[F])==null?void 0:ht.n;if(!we||d(we)||ae.n<300)continue;let Ce=ve.get(we);Ce||(Ce={sx:0,sy:0,n:0},ve.set(we,Ce)),Ce.sx+=ae.sx,Ce.sy+=ae.sy,Ce.n+=ae.n}const Ue=[];for(const[F,ae]of ve)ae.n<1200||Ue.push({x:ae.sx/ae.n,y:ae.sy/ae.n,n:F,a:ae.n});{const F=new Map;for(let ae=0;ae<I;ae++){if(He[ae]!==Be.MTN)continue;const we=D[ae],Ce=(et=c[we])==null?void 0:et.n;if(!Ce||d(Ce))continue;let $e=F.get(Ce);$e||($e={sx:0,sy:0,n:0},F.set(Ce,$e)),$e.sx+=te[ae]*W[ae],$e.sy+=le[ae]*W[ae],$e.n+=W[ae]}for(const[ae,we]of F)we.n<600||Ue.push({x:we.sx/we.n,y:we.sy/we.n,n:ae,a:we.n})}Ue.sort((F,ae)=>ae.a-F.a);let bt=0,wt=0,mt=0;for(let F=0;F<I;F++)De[F]<0||(bt+=te[F]*W[F],wt+=le[F]*W[F],mt+=W[F]);if(mt===0)for(let F=0;F<I;F++)He[F]<=Be.SHALLOW||(bt+=te[F]*W[F],wt+=le[F]*W[F],mt+=W[F]);return bt/=Math.max(1,mt),wt/=Math.max(1,mt),{W:a,H:o,N:l,height:p,seaBase:C,terr:v,land:b,prov:R,cloud:u,river:T,coastD:X,cloudAt:(F,ae)=>h.fbm(F/a*2.4+13,ae/o*2.4+21,3),shade:new Float32Array(0),np:I,provName:S,pTerr:He,pArea:W,pCX:te,pCY:le,pMinX:se,pMinY:de,pMaxX:We,pMaxY:Je,padj:j,nCounty:t.counties.length,nDuchy:t.duchies.length,nKing:t.kingdoms.length,nEmp:t.empires.length,countyOf:De,duchyOf:ze,kingOf:Ae,empOf:ut,countyName:qe,duchyName:Ye,kingName:gt,empName:ft,kColor:At,countyHolder:vt,duchyHolder:st,kingHolder:dt,empHolder:z,cultureOf:Xe,faithOf:je,nCult:t.cultures.length,nFaith:t.faiths.length,cultName:ee,faithName:ie,cultCol:ke,faithCol:O,faithHasIcon:ge,faithRelig:Re,faithAdh:xe,faithDesc:fe,faithTenets:Le,faithSites:Fe,countyHolderKey:Lt,duchyHolderKey:Qe,kingHolderKey:P,empHolderKey:g,chars:t.chars??{},cultEthos:V,cultHeritage:Y,cultLang:Q,cultMartial:ue,cultTrad:he,holdingOf:Uint8Array.from(U),date:t.date??"1254",artPools:t.art??{},kCapital:Int32Array.from(t.kingdoms.map(F=>F.cap??-1)),eCapital:Int32Array.from(t.empires.map(F=>F.cap??-1)),seaLabels:Ue,straits:t.straits??[],rawOf:Int32Array.from(D),rawGrid:E,rawCounty:ce,rawCult:_e,rawFaith:Ge,rawLand:Ie,cDuchy:it,dKing:xt,kEmp:Dt,devOf:me,landCX:bt,landCY:wt,seed:i}}function jr(i){return i<0?0:i>255?255:i|0}function Ii(i,e,t){return(255<<24|jr(t)<<16|jr(e)<<8|jr(i))>>>0}function nc(i){const{W:e,H:t,height:n,land:r}=i,s=new Float32Array(e*t);let a=-.66,o=-.7;const l=Math.hypot(a,o);a/=l,o/=l;const c=.92,h=Math.hypot(a,o,c),f=4.6,d=42,_=10;for(let x=0;x<t;x++)for(let A=0;A<e;A++){const p=x*e+A;if(!r[p]){s[p]=1;continue}const u=A>0?p-1:p,b=A<e-1?p+1:p,R=x>0?p-e:p,v=x<t-1?p+e:p,T=(n[u]-n[b])*f,E=(n[R]-n[v])*f,w=Math.hypot(T,E,1),m=Math.max(-.45,(T*a+E*o+c)/(w*h));let S=0;for(let W=1;W<=_;W++){const ne=A+a*W|0,oe=x+o*W|0;if(ne<0||oe<0||ne>=e||oe>=t)break;const se=(n[oe*e+ne]-n[p])*d/W;se>S&&(S=se)}const D=Math.min(1,Math.max(0,(S-2)/3)),L=4,N=n[Math.max(0,x-L)*e+A],B=n[Math.min(t-1,x+L)*e+A],G=n[x*e+Math.max(0,A-L)],U=n[x*e+Math.min(e-1,A+L)],k=Math.min(.2,Math.max(0,((N+B+G+U)/4-n[p])*d*.022));let I=.54+.56*(m*.5+.5);I*=(1-D*.32)*(1-k),I=.54+(I-.54)*1.32,s[p]=Math.max(.42,Math.min(1.3,I))}i.shade=s}function ic(i){const{W:e,H:t,N:n,terr:r,shade:s,land:a,height:o,seaBase:l,river:c}=i,h=i.cloud,f=new Uint32Array(n),d=new Uint8Array(n),_=[];for(let v=0;v<n;v+=13)a[v]&&_.push(o[v]);_.sort((v,T)=>v-T);const x=v=>_.length?_[Math.min(_.length-1,v*_.length|0)]:1,A=x(.9),p=Math.max(x(.975),A+.01),u=10,b=v=>(v=v<0?0:v>1?1:v,v*v*(3-2*v));for(let v=0;v<t;v++)for(let T=0;T<e;T++){const E=v*e+T,w=r[E],m=s[E];let S,D,L;if(Ql(w)){const N=Math.max(0,(l-o[E])/Math.max(.001,l)),B=(h[E]-.5)*16;S=86-N*42+B*.6,D=103-N*44+B*.8,L=102-N*34+B*.7}else{const N=dl[w],B=(h[E]-.5)*9+((T*131+v*57^T*13+v*151)%13-6)*.9;S=N[0]*m+B,D=N[1]*m+B,L=N[2]*m+B;const G=o[E]+(h[E]-.5)*.02;if(G>A){const U=Math.max(0,T-u),k=Math.min(e-1,T+u),I=Math.max(0,v-u),W=Math.min(t-1,v+u),ne=(o[v*e+U]+o[v*e+k]+o[I*e+T]+o[W*e+T]+o[I*e+U]+o[I*e+k]+o[W*e+U]+o[W*e+k])/8,oe=o[E]-ne+(h[E]-.5)*.004,se=b((G-A)/(p-A))*b(oe/.012);if(se>.02){const de=Math.min(1.05,m);S=S*(1-se)+228*de*se,D=D*(1-se)+231*de*se,L=L*(1-se)+234*de*se,d[E]=se*255|0}}}c[E]&&a[E]&&(S=S*.15+50*.85,D=D*.15+84*.85,L=L*.15+118*.85),f[E]=Ii(S,D,L)}const R=new Float32Array(n);for(let v=0;v<n;v++)R[v]=a[v]?0:1e9;for(let v=0;v<t;v++)for(let T=0;T<e;T++){const E=v*e+T;if(a[E])continue;let w=R[E];T>0&&(w=Math.min(w,R[E-1]+1)),v>0&&(w=Math.min(w,R[E-e]+1)),T>0&&v>0&&(w=Math.min(w,R[E-e-1]+1.414)),T<e-1&&v>0&&(w=Math.min(w,R[E-e+1]+1.414)),R[E]=w}for(let v=t-1;v>=0;v--)for(let T=e-1;T>=0;T--){const E=v*e+T;if(a[E])continue;let w=R[E];T<e-1&&(w=Math.min(w,R[E+1]+1)),v<t-1&&(w=Math.min(w,R[E+e]+1)),T<e-1&&v<t-1&&(w=Math.min(w,R[E+e+1]+1.414)),T>0&&v<t-1&&(w=Math.min(w,R[E+e-1]+1.414)),R[E]=w}for(let v=0;v<t;v++)for(let T=0;T<e;T++){const E=v*e+T;if(a[E]){if(T>0&&!a[E-1]||T<e-1&&!a[E+1]||v>0&&!a[E-e]||v<t-1&&!a[E+e]){const m=f[E],S=.66;f[E]=Ii((m&255)*S,(m>>8&255)*S,(m>>16&255)*S)}}else{const w=R[E];if(w<11){const m=(1-w/11)*.38,S=f[E];f[E]=Ii((S&255)*(1-m)+122*m,(S>>8&255)*(1-m)+162*m,(S>>16&255)*(1-m)+152*m)}}}for(let v=0;v<t;v++)for(let T=0;T<e;T++){const E=v*e+T,w=T/e-.5,m=v/t-.5,S=Math.sqrt(w*w*1.02+m*m*1.12);let D=Math.max(0,(S-.4)/.5);D*=D;let L=0;if(!a[E]){const G=R[E];L=Math.max(0,Math.min(1,(G-36)/110))}const N=.35+h[E]*1.1,B=Math.min(.95,Math.max(D*N,L*L*N*.5));if(B>.02){const G=f[E],U=(G&255)*(1-B)+216*B,k=(G>>8&255)*(1-B)+216*B,I=(G>>16&255)*(1-B)+206*B;f[E]=Ii(U,k,I)}}return{baseBuf:f,snow:d}}function rc(i,e,t){const{W:n,H:r,terr:s,shade:a,land:o,river:l,prov:c}=i,{baseBuf:h,snow:f}=e,d=Math.max(0,i.pMinX[t]),_=Math.min(n-1,i.pMaxX[t]),x=Math.max(0,i.pMinY[t]),A=Math.min(r-1,i.pMaxY[t]);for(let p=x;p<=A;p++)for(let u=d;u<=_;u++){const b=p*n+u;if(c[b]!==t)continue;const R=s[b],v=a[b],T=dl[R],w=(i.cloudAt(u,p)-.5)*9+((u*131+p*57^u*13+p*151)%13-6)*.9;let m=T[0]*v+w,S=T[1]*v+w,D=T[2]*v+w;const L=f[b]/255;if(L>0){const B=Math.min(1.05,v);m=m*(1-L)+228*B*L,S=S*(1-L)+231*B*L,D=D*(1-L)+234*B*L}l[b]&&o[b]&&(m=m*.15+50*.85,S=S*.15+84*.85,D=D*.15+118*.85),(u>0&&!o[b-1]||u<n-1&&!o[b+1]||p>0&&!o[b-n]||p<r-1&&!o[b+n])&&(m*=.66,S*=.66,D*=.66),h[b]=Ii(m,S,D)}}function sc(i){const e=i/100,t=[120,120,96],n=[196,168,92],r=[168,84,64],s=(a,o,l)=>[a[0]+(o[0]-a[0])*l,a[1]+(o[1]-a[1])*l,a[2]+(o[2]-a[2])*l];return e<.5?s(t,n,e*2):s(n,r,(e-.5)*2)}function es(i,e,t,n){const{N:r,prov:s,height:a,seaBase:o,shade:l}=i,{baseBuf:c,snow:h}=e,f=new Uint32Array(n.data.buffer);if(f.set(c),t==="elevation")for(let d=0;d<r;d++){if(s[d]<0)continue;const x=40+(a[d]-o)/(1-o)*200,A=[x*.9+20,x,x*.7+20],p=l[d],u=A[0]*.3+A[1]*.59+A[2]*.11,b=.16,R=(A[0]+(u-A[0])*b)*p,v=(A[1]+(u-A[1])*b)*p,T=(A[2]+(u-A[2])*b)*p,E=c[d],w=E&255,m=E>>8&255,S=E>>16&255,D=.82*(1-h[d]/255*.85);f[d]=Ii(w*(1-D)+R*D,m*(1-D)+v*D,S*(1-D)+T*D)}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wa="185",ac=0,eo=1,oc=2,Nr=1,lc=2,Qi=3,Un=0,Zt=1,_n=2,Ln=0,Ui=1,to=2,no=3,io=4,cc=5,si=100,uc=101,fc=102,dc=103,hc=104,pc=200,mc=201,gc=202,_c=203,Bs=204,zs=205,vc=206,xc=207,Mc=208,Sc=209,yc=210,Ec=211,bc=212,Tc=213,Ac=214,Hs=0,ks=1,Gs=2,Oi=3,Vs=4,Ws=5,Xs=6,qs=7,Ca=0,wc=1,Cc=2,Mn=0,hl=1,pl=2,ml=3,gl=4,_l=5,vl=6,xl=7,Ml=300,ci=301,Bi=302,ts=303,ns=304,Kr=306,kr=1e3,Pn=1001,Gr=1002,Nt=1003,Rc=1004,fr=1005,kt=1006,is=1007,vn=1008,nn=1009,Sl=1010,yl=1011,ir=1012,Ra=1013,yn=1014,dn=1015,Nn=1016,Pa=1017,La=1018,rr=1020,El=35902,bl=35899,Tl=1021,Al=1022,qt=1023,Fn=1026,li=1027,Da=1028,Ia=1029,ui=1030,Ua=1031,Na=1033,Fr=33776,Or=33777,Br=33778,zr=33779,Ys=35840,$s=35841,Ks=35842,Zs=35843,Js=36196,Qs=37492,js=37496,ea=37488,ta=37489,Vr=37490,na=37491,ia=37808,ra=37809,sa=37810,aa=37811,oa=37812,la=37813,ca=37814,ua=37815,fa=37816,da=37817,ha=37818,pa=37819,ma=37820,ga=37821,_a=36492,va=36494,xa=36495,Ma=36283,Sa=36284,Wr=36285,ya=36286,Pc=3200,Ea=0,Lc=1,$n="",Kt="srgb",Xr="srgb-linear",qr="linear",_t="srgb",gi=7680,ro=519,Dc=512,Ic=513,Uc=514,Fa=515,Nc=516,Fc=517,Oa=518,Oc=519,so=35044,ao="300 es",xn=2e3,sr=2001;function Bc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zc(){const i=ar("canvas");return i.style.display="block",i}const oo={};function lo(...i){const e="THREE."+i.shift();console.log(e,...i)}function wl(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ve(...i){i=wl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ct(...i){i=wl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ni(...i){const e=i.join(" ");e in oo||(oo[e]=!0,Ve(...i))}function Hc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const kc={[Hs]:ks,[Gs]:Xs,[Vs]:qs,[Oi]:Ws,[ks]:Hs,[Xs]:Gs,[qs]:Vs,[Ws]:Oi};class fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let co=1234567;const tr=Math.PI/180,or=180/Math.PI;function Gi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function Ba(i,e){return(i%e+e)%e}function Gc(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Vc(i,e,t){return i!==e?(t-i)/(e-i):0}function nr(i,e,t){return(1-t)*i+t*e}function Wc(i,e,t,n){return nr(i,e,1-Math.exp(-t*n))}function Xc(i,e=1){return e-Math.abs(Ba(i,e*2)-e)}function qc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Yc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $c(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Kc(i,e){return i+Math.random()*(e-i)}function Zc(i){return i*(.5-Math.random())}function Jc(i){i!==void 0&&(co=i);let e=co+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qc(i){return i*tr}function jc(i){return i*or}function eu(i){return(i&i-1)===0&&i!==0}function tu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function iu(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),f=s((e-n)/2),d=a((e-n)/2),_=s((n-e)/2),x=a((n-e)/2);switch(r){case"XYX":i.set(o*h,l*f,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*x,l*_,o*c);break;case"YXY":i.set(l*_,o*h,l*x,o*c);break;case"ZYZ":i.set(l*x,l*_,o*h,o*c);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const rs={DEG2RAD:tr,RAD2DEG:or,generateUUID:Gi,clamp:ot,euclideanModulo:Ba,mapLinear:Gc,inverseLerp:Vc,lerp:nr,damp:Wc,pingpong:Xc,smoothstep:qc,smootherstep:Yc,randInt:$c,randFloat:Kc,randFloatSpread:Zc,seededRandom:Jc,degToRad:Qc,radToDeg:jc,isPowerOfTwo:eu,ceilPowerOfTwo:tu,floorPowerOfTwo:nu,setQuaternionFromProperEuler:iu,normalize:Yt,denormalize:Di},Xa=class Xa{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xa.prototype.isVector2=!0;let rt=Xa;class di{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],f=n[r+3],d=s[a+0],_=s[a+1],x=s[a+2],A=s[a+3];if(f!==A||l!==d||c!==_||h!==x){let p=l*d+c*_+h*x+f*A;p<0&&(d=-d,_=-_,x=-x,A=-A,p=-p);let u=1-o;if(p<.9995){const b=Math.acos(p),R=Math.sin(b);u=Math.sin(u*b)/R,o=Math.sin(o*b)/R,l=l*u+d*o,c=c*u+_*o,h=h*u+x*o,f=f*u+A*o}else{l=l*u+d*o,c=c*u+_*o,h=h*u+x*o,f=f*u+A*o;const b=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=b,c*=b,h*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],f=s[a],d=s[a+1],_=s[a+2],x=s[a+3];return e[t]=o*x+h*f+l*_-c*d,e[t+1]=l*x+h*d+c*f-o*_,e[t+2]=c*x+h*_+o*d-l*f,e[t+3]=h*x-o*f-l*d-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),f=o(s/2),d=l(n/2),_=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*h*f+c*_*x,this._y=c*_*f-d*h*x,this._z=c*h*x+d*_*f,this._w=c*h*f-d*_*x;break;case"YXZ":this._x=d*h*f+c*_*x,this._y=c*_*f-d*h*x,this._z=c*h*x-d*_*f,this._w=c*h*f+d*_*x;break;case"ZXY":this._x=d*h*f-c*_*x,this._y=c*_*f+d*h*x,this._z=c*h*x+d*_*f,this._w=c*h*f-d*_*x;break;case"ZYX":this._x=d*h*f-c*_*x,this._y=c*_*f+d*h*x,this._z=c*h*x-d*_*f,this._w=c*h*f+d*_*x;break;case"YZX":this._x=d*h*f+c*_*x,this._y=c*_*f+d*h*x,this._z=c*h*x-d*_*f,this._w=c*h*f-d*_*x;break;case"XZY":this._x=d*h*f-c*_*x,this._y=c*_*f-d*h*x,this._z=c*h*x+d*_*f,this._w=c*h*f+d*_*x;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){const _=.5/Math.sqrt(d+1);this._w=.25/_,this._x=(h-l)*_,this._y=(s-c)*_,this._z=(a-r)*_}else if(n>o&&n>f){const _=2*Math.sqrt(1+n-o-f);this._w=(h-l)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+c)/_}else if(o>f){const _=2*Math.sqrt(1+o-n-f);this._w=(s-c)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(l+h)/_}else{const _=2*Math.sqrt(1+f-n-o);this._w=(a-r)/_,this._x=(s+c)/_,this._y=(l+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const qa=class qa{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ss.copy(this).projectOnVector(e),this.sub(ss)}reflect(e){return this.sub(ss.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qa.prototype.isVector3=!0;let q=qa;const ss=new q,uo=new di,Ya=class Ya{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],_=n[5],x=n[8],A=r[0],p=r[3],u=r[6],b=r[1],R=r[4],v=r[7],T=r[2],E=r[5],w=r[8];return s[0]=a*A+o*b+l*T,s[3]=a*p+o*R+l*E,s[6]=a*u+o*v+l*w,s[1]=c*A+h*b+f*T,s[4]=c*p+h*R+f*E,s[7]=c*u+h*v+f*w,s[2]=d*A+_*b+x*T,s[5]=d*p+_*R+x*E,s[8]=d*u+_*v+x*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*s,_=c*s-a*l,x=t*f+n*d+r*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/x;return e[0]=f*A,e[1]=(r*c-h*n)*A,e[2]=(o*n-r*a)*A,e[3]=d*A,e[4]=(h*t-r*l)*A,e[5]=(r*s-o*t)*A,e[6]=_*A,e[7]=(n*l-c*t)*A,e[8]=(a*t-n*s)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ni("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(as.makeScale(e,t)),this}rotate(e){return Ni("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(as.makeRotation(-e)),this}translate(e,t){return Ni("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(as.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ya.prototype.isMatrix3=!0;let Ke=Ya;const as=new Ke,fo=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ho=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ru(){const i={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===_t&&(r.r=Dn(r.r),r.g=Dn(r.g),r.b=Dn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(r.r=Fi(r.r),r.g=Fi(r.g),r.b=Fi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$n?qr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ni("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ni("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xr]:{primaries:e,whitePoint:n,transfer:qr,toXYZ:fo,fromXYZ:ho,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:fo,fromXYZ:ho,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),i}const lt=ru();function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _i;class su{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_i===void 0&&(_i=ar("canvas")),_i.width=e.width,_i.height=e.height;const r=_i.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=_i}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ar("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Dn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dn(t[n]/255)*255):t[n]=Dn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let au=0;class za{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(os(r[a].image)):s.push(os(r[a]))}else s=os(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function os(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?su.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let ou=0;const ls=new q;class Ot extends fi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Pn,r=Pn,s=kt,a=vn,o=qt,l=nn,c=Ot.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Gi(),this.name="",this.source=new za(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ls).x}get height(){return this.source.getSize(ls).y}get depth(){return this.source.getSize(ls).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ml)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kr:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kr:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Ml;Ot.DEFAULT_ANISOTROPY=1;const $a=class $a{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],_=l[5],x=l[9],A=l[2],p=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-A)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+A)<.1&&Math.abs(x+p)<.1&&Math.abs(c+_+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,v=(_+1)/2,T=(u+1)/2,E=(h+d)/4,w=(f+A)/4,m=(x+p)/4;return R>v&&R>T?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=E/n,s=w/n):v>T?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=E/r,s=m/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=w/s,r=m/s),this.set(n,r,s,t),this}let b=Math.sqrt((p-x)*(p-x)+(f-A)*(f-A)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-x)/b,this.y=(f-A)/b,this.z=(d-h)/b,this.w=Math.acos((c+_+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$a.prototype.isVector4=!0;let Rt=$a;class lu extends fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Ot(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new za(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends lu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Cl extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cu extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $r=class $r{constructor(e,t,n,r,s,a,o,l,c,h,f,d,_,x,A,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,f,d,_,x,A,p)}set(e,t,n,r,s,a,o,l,c,h,f,d,_,x,A,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=_,u[7]=x,u[11]=A,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $r().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/vi.setFromMatrixColumn(e,0).length(),s=1/vi.setFromMatrixColumn(e,1).length(),a=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*h,_=a*f,x=o*h,A=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=_+x*c,t[5]=d-A*c,t[9]=-o*l,t[2]=A-d*c,t[6]=x+_*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,_=l*f,x=c*h,A=c*f;t[0]=d+A*o,t[4]=x*o-_,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=_*o-x,t[6]=A+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,_=l*f,x=c*h,A=c*f;t[0]=d-A*o,t[4]=-a*f,t[8]=x+_*o,t[1]=_+x*o,t[5]=a*h,t[9]=A-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,_=a*f,x=o*h,A=o*f;t[0]=l*h,t[4]=x*c-_,t[8]=d*c+A,t[1]=l*f,t[5]=A*c+d,t[9]=_*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,_=a*c,x=o*l,A=o*c;t[0]=l*h,t[4]=A-d*f,t[8]=x*f+_,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=_*f+x,t[10]=d-A*f}else if(e.order==="XZY"){const d=a*l,_=a*c,x=o*l,A=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+A,t[5]=a*h,t[9]=_*f-x,t[2]=x*f-_,t[6]=o*h,t[10]=A*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uu,e,fu)}lookAt(e,t,n){const r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),kn.crossVectors(n,jt),kn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),kn.crossVectors(n,jt)),kn.normalize(),dr.crossVectors(jt,kn),r[0]=kn.x,r[4]=dr.x,r[8]=jt.x,r[1]=kn.y,r[5]=dr.y,r[9]=jt.y,r[2]=kn.z,r[6]=dr.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],_=n[13],x=n[2],A=n[6],p=n[10],u=n[14],b=n[3],R=n[7],v=n[11],T=n[15],E=r[0],w=r[4],m=r[8],S=r[12],D=r[1],L=r[5],N=r[9],B=r[13],G=r[2],U=r[6],k=r[10],I=r[14],W=r[3],ne=r[7],oe=r[11],se=r[15];return s[0]=a*E+o*D+l*G+c*W,s[4]=a*w+o*L+l*U+c*ne,s[8]=a*m+o*N+l*k+c*oe,s[12]=a*S+o*B+l*I+c*se,s[1]=h*E+f*D+d*G+_*W,s[5]=h*w+f*L+d*U+_*ne,s[9]=h*m+f*N+d*k+_*oe,s[13]=h*S+f*B+d*I+_*se,s[2]=x*E+A*D+p*G+u*W,s[6]=x*w+A*L+p*U+u*ne,s[10]=x*m+A*N+p*k+u*oe,s[14]=x*S+A*B+p*I+u*se,s[3]=b*E+R*D+v*G+T*W,s[7]=b*w+R*L+v*U+T*ne,s[11]=b*m+R*N+v*k+T*oe,s[15]=b*S+R*B+v*I+T*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],_=e[14],x=e[3],A=e[7],p=e[11],u=e[15],b=l*_-c*d,R=o*_-c*f,v=o*d-l*f,T=a*_-c*h,E=a*d-l*h,w=a*f-o*h;return t*(A*b-p*R+u*v)-n*(x*b-p*T+u*E)+r*(x*R-A*T+u*w)-s*(x*v-A*E+p*w)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(s*h-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],_=e[11],x=e[12],A=e[13],p=e[14],u=e[15],b=t*o-n*a,R=t*l-r*a,v=t*c-s*a,T=n*l-r*o,E=n*c-s*o,w=r*c-s*l,m=h*A-f*x,S=h*p-d*x,D=h*u-_*x,L=f*p-d*A,N=f*u-_*A,B=d*u-_*p,G=b*B-R*N+v*L+T*D-E*S+w*m;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/G;return e[0]=(o*B-l*N+c*L)*U,e[1]=(r*N-n*B-s*L)*U,e[2]=(A*w-p*E+u*T)*U,e[3]=(d*E-f*w-_*T)*U,e[4]=(l*D-a*B-c*S)*U,e[5]=(t*B-r*D+s*S)*U,e[6]=(p*v-x*w-u*R)*U,e[7]=(h*w-d*v+_*R)*U,e[8]=(a*N-o*D+c*m)*U,e[9]=(n*D-t*N-s*m)*U,e[10]=(x*E-A*v+u*b)*U,e[11]=(f*v-h*E-_*b)*U,e[12]=(o*S-a*L-l*m)*U,e[13]=(t*L-n*S+r*m)*U,e[14]=(A*R-x*T-p*b)*U,e[15]=(h*T-f*R+d*b)*U,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,f=o+o,d=s*c,_=s*h,x=s*f,A=a*h,p=a*f,u=o*f,b=l*c,R=l*h,v=l*f,T=n.x,E=n.y,w=n.z;return r[0]=(1-(A+u))*T,r[1]=(_+v)*T,r[2]=(x-R)*T,r[3]=0,r[4]=(_-v)*E,r[5]=(1-(d+u))*E,r[6]=(p+b)*E,r[7]=0,r[8]=(x+R)*w,r[9]=(p-b)*w,r[10]=(1-(d+A))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=vi.set(r[0],r[1],r[2]).length();const o=vi.set(r[4],r[5],r[6]).length(),l=vi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ln.copy(this);const c=1/a,h=1/o,f=1/l;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=f,ln.elements[9]*=f,ln.elements[10]*=f,t.setFromRotationMatrix(ln),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=xn,l=!1){const c=this.elements,h=2*s/(t-e),f=2*s/(n-r),d=(t+e)/(t-e),_=(n+r)/(n-r);let x,A;if(l)x=s/(a-s),A=a*s/(a-s);else if(o===xn)x=-(a+s)/(a-s),A=-2*a*s/(a-s);else if(o===sr)x=-a/(a-s),A=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=_,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=A,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=xn,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-r),d=-(t+e)/(t-e),_=-(n+r)/(n-r);let x,A;if(l)x=1/(a-s),A=a/(a-s);else if(o===xn)x=-2/(a-s),A=-(a+s)/(a-s);else if(o===sr)x=-1/(a-s),A=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=_,c[2]=0,c[6]=0,c[10]=x,c[14]=A,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};$r.prototype.isMatrix4=!0;let Et=$r;const vi=new q,ln=new Et,uu=new q(0,0,0),fu=new q(1,1,1),kn=new q,dr=new q,jt=new q,po=new Et,mo=new di;class Zn{constructor(e=0,t=0,n=0,r=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,_),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return po.makeRotationFromQuaternion(e),this.setFromRotationMatrix(po,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mo.setFromEuler(this),this.setFromQuaternion(mo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class Ha{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let du=0;const go=new q,xi=new di,Tn=new Et,hr=new q,Wi=new q,hu=new q,pu=new di,_o=new q(1,0,0),vo=new q(0,1,0),xo=new q(0,0,1),Mo={type:"added"},mu={type:"removed"},Mi={type:"childadded",child:null},cs={type:"childremoved",child:null};class Gt extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new q,t=new Zn,n=new di,r=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ke}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(_o,e)}rotateY(e){return this.rotateOnAxis(vo,e)}rotateZ(e){return this.rotateOnAxis(xo,e)}translateOnAxis(e,t){return go.copy(e).applyQuaternion(this.quaternion),this.position.add(go.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_o,e)}translateY(e){return this.translateOnAxis(vo,e)}translateZ(e){return this.translateOnAxis(xo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hr.copy(e):hr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Wi,hr,this.up):Tn.lookAt(hr,Wi,this.up),this.quaternion.setFromRotationMatrix(Tn),r&&(Tn.extractRotation(r.matrixWorld),xi.setFromRotationMatrix(Tn),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mo),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mu),cs.child=e,this.dispatchEvent(cs),cs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mo),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,e,hu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,pu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),_=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),_.length>0&&(n.animations=_),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new q(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ji extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gu={type:"move"};class us{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const A of e.hand.values()){const p=t.getJointPose(A,n),u=this._getHandJoint(c,A);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),_=.02,x=.005;c.inputState.pinching&&d>_+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=_-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gu)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ji;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},pr={h:0,s:0,l:0};function fs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=lt.workingColorSpace){if(e=Ba(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=fs(a,s,e+1/3),this.g=fs(a,s,e),this.b=fs(a,s,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,t=Kt){function n(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=Rl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return lt.workingToColorSpace(Xt.copy(this),e),Math.round(ot(Xt.r*255,0,255))*65536+Math.round(ot(Xt.g*255,0,255))*256+Math.round(ot(Xt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,r=Xt.g,s=Xt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Kt){lt.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,r=Xt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(pr);const n=nr(Gn.h,pr.h,t),r=nr(Gn.s,pr.s,t),s=nr(Gn.l,pr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new at;at.NAMES=Rl;class ka{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new at(e),this.near=t,this.far=n}clone(){return new ka(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _u extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const cn=new q,An=new q,ds=new q,wn=new q,Si=new q,yi=new q,So=new q,hs=new q,ps=new q,ms=new q,gs=new Rt,_s=new Rt,vs=new Rt;class fn{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),cn.subVectors(e,t),r.cross(cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){cn.subVectors(r,t),An.subVectors(n,t),ds.subVectors(e,t);const a=cn.dot(cn),o=cn.dot(An),l=cn.dot(ds),c=An.dot(An),h=An.dot(ds),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,_=(c*l-o*h)*d,x=(a*h-o*l)*d;return s.set(1-_-x,x,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return gs.setScalar(0),_s.setScalar(0),vs.setScalar(0),gs.fromBufferAttribute(e,t),_s.fromBufferAttribute(e,n),vs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(gs,s.x),a.addScaledVector(_s,s.y),a.addScaledVector(vs,s.z),a}static isFrontFacing(e,t,n,r){return cn.subVectors(n,t),An.subVectors(e,t),cn.cross(An).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),cn.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return fn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Si.subVectors(r,n),yi.subVectors(s,n),hs.subVectors(e,n);const l=Si.dot(hs),c=yi.dot(hs);if(l<=0&&c<=0)return t.copy(n);ps.subVectors(e,r);const h=Si.dot(ps),f=yi.dot(ps);if(h>=0&&f<=h)return t.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Si,a);ms.subVectors(e,s);const _=Si.dot(ms),x=yi.dot(ms);if(x>=0&&_<=x)return t.copy(s);const A=_*c-l*x;if(A<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(yi,o);const p=h*x-_*f;if(p<=0&&f-h>=0&&_-x>=0)return So.subVectors(s,r),o=(f-h)/(f-h+(_-x)),t.copy(r).addScaledVector(So,o);const u=1/(p+A+d);return a=A*u,o=d*u,t.copy(n).addScaledVector(Si,a).addScaledVector(yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class hi{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,un):un.fromBufferAttribute(s,a),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)),mr.applyMatrix4(e.matrixWorld),this.union(mr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),gr.subVectors(this.max,Xi),Ei.subVectors(e.a,Xi),bi.subVectors(e.b,Xi),Ti.subVectors(e.c,Xi),Vn.subVectors(bi,Ei),Wn.subVectors(Ti,bi),jn.subVectors(Ei,Ti);let t=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-jn.z,jn.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,jn.z,0,-jn.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-jn.y,jn.x,0];return!xs(t,Ei,bi,Ti,gr)||(t=[1,0,0,0,1,0,0,0,1],!xs(t,Ei,bi,Ti,gr))?!1:(_r.crossVectors(Vn,Wn),t=[_r.x,_r.y,_r.z],xs(t,Ei,bi,Ti,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cn=[new q,new q,new q,new q,new q,new q,new q,new q],un=new q,mr=new hi,Ei=new q,bi=new q,Ti=new q,Vn=new q,Wn=new q,jn=new q,Xi=new q,gr=new q,_r=new q,ei=new q;function xs(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ei.fromArray(i,s);const o=r.x*Math.abs(ei.x)+r.y*Math.abs(ei.y)+r.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ft=new q,vr=new rt;let vu=0;class Jt extends fi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=so,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXY(t,vr.x,vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==so&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Pl extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ll extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class In extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const xu=new hi,qi=new q,Ms=new q;class lr{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(qi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ms.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(Ms)),this.expandByPoint(qi.copy(e.center).sub(Ms))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Mu=0;const an=new Et,Ss=new Gt,Ai=new q,en=new hi,Yi=new hi,Ht=new q;class bn extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bc(e)?Ll:Pl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return Ss.lookAt(e),Ss.updateMatrix(),this.applyMatrix4(Ss.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new In(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(en.min,Yi.min),en.expandByPoint(Ht),Ht.addVectors(en.max,Yi.max),en.expandByPoint(Ht)):(en.expandByPoint(Yi.min),en.expandByPoint(Yi.max))}en.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ht));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ht.fromBufferAttribute(o,c),l&&(Ai.fromBufferAttribute(e,c),Ht.add(Ai)),r=Math.max(r,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let m=0;m<n.count;m++)o[m]=new q,l[m]=new q;const c=new q,h=new q,f=new q,d=new rt,_=new rt,x=new rt,A=new q,p=new q;function u(m,S,D){c.fromBufferAttribute(n,m),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,D),d.fromBufferAttribute(s,m),_.fromBufferAttribute(s,S),x.fromBufferAttribute(s,D),h.sub(c),f.sub(c),_.sub(d),x.sub(d);const L=1/(_.x*x.y-x.x*_.y);isFinite(L)&&(A.copy(h).multiplyScalar(x.y).addScaledVector(f,-_.y).multiplyScalar(L),p.copy(f).multiplyScalar(_.x).addScaledVector(h,-x.x).multiplyScalar(L),o[m].add(A),o[S].add(A),o[D].add(A),l[m].add(p),l[S].add(p),l[D].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let m=0,S=b.length;m<S;++m){const D=b[m],L=D.start,N=D.count;for(let B=L,G=L+N;B<G;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const R=new q,v=new q,T=new q,E=new q;function w(m){T.fromBufferAttribute(r,m),E.copy(T);const S=o[m];R.copy(S),R.sub(T.multiplyScalar(T.dot(S))).normalize(),v.crossVectors(E,S);const L=v.dot(l[m])<0?-1:1;a.setXYZW(m,R.x,R.y,R.z,L)}for(let m=0,S=b.length;m<S;++m){const D=b[m],L=D.start,N=D.count;for(let B=L,G=L+N;B<G;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,_=n.count;d<_;d++)n.setXYZ(d,0,0,0);const r=new q,s=new q,a=new q,o=new q,l=new q,c=new q,h=new q,f=new q;if(e)for(let d=0,_=e.count;d<_;d+=3){const x=e.getX(d+0),A=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,A),a.fromBufferAttribute(t,p),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,_=t.count;d<_;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let _=0,x=0;for(let A=0,p=l.length;A<p;A++){o.isInterleavedBufferAttribute?_=l[A]*o.data.stride+o.offset:_=l[A]*h;for(let u=0;u<h;u++)d[x++]=c[_++]}return new Jt(d,h,f)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],_=e(d,n);l.push(_)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const _=c[f];h.push(_.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,_=f.length;d<_;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Su=0;class cr extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Ui,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bs,this.blendDst=zs,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ro,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bs&&(n.blendSrc=this.blendSrc),this.blendDst!==zs&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ro&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new at().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new rt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Rn=new q,ys=new q,xr=new q,Xn=new q,Es=new q,Mr=new q,bs=new q;class Dl{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ys.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(ys);const s=e.distanceTo(t)*.5,a=-this.direction.dot(xr),o=Xn.dot(this.direction),l=-Xn.dot(xr),c=Xn.lengthSq(),h=Math.abs(1-a*a);let f,d,_,x;if(h>0)if(f=a*l-o,d=a*o-l,x=s*h,f>=0)if(d>=-x)if(d<=x){const A=1/h;f*=A,d*=A,_=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),_=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),_=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),_=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),_=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),_=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),_=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ys).addScaledVector(xr,d),_}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),r=Rn.dot(Rn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,r,s){Es.subVectors(t,e),Mr.subVectors(n,e),bs.crossVectors(Es,Mr);let a=this.direction.dot(bs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,e);const l=o*this.direction.dot(Mr.crossVectors(Xn,Mr));if(l<0)return null;const c=o*this.direction.dot(Es.cross(Xn));if(c<0||l+c>a)return null;const h=-o*Xn.dot(bs);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yr extends cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yo=new Et,ti=new Dl,Sr=new lr,Eo=new q,yr=new q,Er=new q,br=new q,Ts=new q,Tr=new q,bo=new q,Ar=new q;class rn extends Gt{constructor(e=new bn,t=new Yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Tr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(Ts.fromBufferAttribute(f,e),a?Tr.addScaledVector(Ts,h):Tr.addScaledVector(Ts.sub(t),h))}t.add(Tr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),ti.copy(e.ray).recast(e.near),!(Sr.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Sr,Eo)===null||ti.origin.distanceToSquared(Eo)>(e.far-e.near)**2))&&(yo.copy(s).invert(),ti.copy(e.ray).applyMatrix4(yo),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,A=d.length;x<A;x++){const p=d[x],u=a[p.materialIndex],b=Math.max(p.start,_.start),R=Math.min(o.count,Math.min(p.start+p.count,_.start+_.count));for(let v=b,T=R;v<T;v+=3){const E=o.getX(v),w=o.getX(v+1),m=o.getX(v+2);r=wr(this,u,e,n,c,h,f,E,w,m),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,_.start),A=Math.min(o.count,_.start+_.count);for(let p=x,u=A;p<u;p+=3){const b=o.getX(p),R=o.getX(p+1),v=o.getX(p+2);r=wr(this,a,e,n,c,h,f,b,R,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,A=d.length;x<A;x++){const p=d[x],u=a[p.materialIndex],b=Math.max(p.start,_.start),R=Math.min(l.count,Math.min(p.start+p.count,_.start+_.count));for(let v=b,T=R;v<T;v+=3){const E=v,w=v+1,m=v+2;r=wr(this,u,e,n,c,h,f,E,w,m),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,_.start),A=Math.min(l.count,_.start+_.count);for(let p=x,u=A;p<u;p+=3){const b=p,R=p+1,v=p+2;r=wr(this,a,e,n,c,h,f,b,R,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function yu(i,e,t,n,r,s,a,o){let l;if(e.side===Zt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Un,o),l===null)return null;Ar.copy(o),Ar.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ar);return c<t.near||c>t.far?null:{distance:c,point:Ar.clone(),object:i}}function wr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,yr),i.getVertexPosition(l,Er),i.getVertexPosition(c,br);const h=yu(i,e,t,n,yr,Er,br,bo);if(h){const f=new q;fn.getBarycoord(bo,yr,Er,br,f),r&&(h.uv=fn.getInterpolatedAttribute(r,o,l,c,f,new rt)),s&&(h.uv1=fn.getInterpolatedAttribute(s,o,l,c,f,new rt)),a&&(h.normal=fn.getInterpolatedAttribute(a,o,l,c,f,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new q,materialIndex:0};fn.getNormal(yr,Er,br,d.normal),h.face=d,h.barycoord=f}return h}class ai extends Ot{constructor(e=null,t=1,n=1,r,s,a,o,l,c=Nt,h=Nt,f,d){super(null,a,o,l,c,h,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class To extends Jt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const wi=new Et,Ao=new Et,Cr=[],wo=new hi,Eu=new Et,$i=new rn,Ki=new lr;class Co extends rn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new To(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Eu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wi),wo.copy(e.boundingBox).applyMatrix4(wi),this.boundingBox.union(wo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new lr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wi),Ki.copy(e.boundingSphere).applyMatrix4(wi),this.boundingSphere.union(Ki)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if($i.geometry=this.geometry,$i.material=this.material,$i.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ki.copy(this.boundingSphere),Ki.applyMatrix4(n),e.ray.intersectsSphere(Ki)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,wi),Ao.multiplyMatrices(n,wi),$i.matrixWorld=Ao,$i.raycast(e,Cr);for(let a=0,o=Cr.length;a<o;a++){const l=Cr[a];l.instanceId=s,l.object=this,t.push(l)}Cr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new To(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ai(new Float32Array(r*this.count),r,this.count,Da,dn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const As=new q,bu=new q,Tu=new Ke;class ri{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=As.subVectors(n,t).cross(bu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(As),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tu.getNormalMatrix(e),r=this.coplanarPoint(As).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new lr,Au=new rt(.5,.5),Rr=new q;class Ga{constructor(e=new ri,t=new ri,n=new ri,r=new ri,s=new ri,a=new ri){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],d=s[6],_=s[7],x=s[8],A=s[9],p=s[10],u=s[11],b=s[12],R=s[13],v=s[14],T=s[15];if(r[0].setComponents(c-a,_-h,u-x,T-b).normalize(),r[1].setComponents(c+a,_+h,u+x,T+b).normalize(),r[2].setComponents(c+o,_+f,u+A,T+R).normalize(),r[3].setComponents(c-o,_-f,u-A,T-R).normalize(),n)r[4].setComponents(l,d,p,v).normalize(),r[5].setComponents(c-l,_-d,u-p,T-v).normalize();else if(r[4].setComponents(c-l,_-d,u-p,T-v).normalize(),t===xn)r[5].setComponents(c+l,_+d,u+p,T+v).normalize();else if(t===sr)r[5].setComponents(l,d,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){ni.center.set(0,0,0);const t=Au.distanceTo(e.center);return ni.radius=.7071067811865476+t,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Rr.x=r.normal.x>0?e.max.x:e.min.x,Rr.y=r.normal.y>0?e.max.y:e.min.y,Rr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Il extends Ot{constructor(e=[],t=ci,n,r,s,a,o,l,c,h){super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ro extends Ot{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zi extends Ot{constructor(e,t,n=yn,r,s,a,o=Nt,l=Nt,c,h=Fn,f=1){if(h!==Fn&&h!==li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new za(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wu extends zi{constructor(e,t=yn,n=ci,r,s,a=Nt,o=Nt,l,c=Fn){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ul extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ur extends bn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,_=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new In(c,3)),this.setAttribute("normal",new In(h,3)),this.setAttribute("uv",new In(f,2));function x(A,p,u,b,R,v,T,E,w,m,S){const D=v/w,L=T/m,N=v/2,B=T/2,G=E/2,U=w+1,k=m+1;let I=0,W=0;const ne=new q;for(let oe=0;oe<k;oe++){const se=oe*L-B;for(let de=0;de<U;de++){const We=de*D-N;ne[A]=We*b,ne[p]=se*R,ne[u]=G,c.push(ne.x,ne.y,ne.z),ne[A]=0,ne[p]=0,ne[u]=E>0?1:-1,h.push(ne.x,ne.y,ne.z),f.push(de/w),f.push(1-oe/m),I+=1}}for(let oe=0;oe<m;oe++)for(let se=0;se<w;se++){const de=d+se+U*oe,We=d+se+U*(oe+1),Je=d+(se+1)+U*(oe+1),He=d+(se+1)+U*oe;l.push(de,We,He),l.push(We,Je,He),W+=6}o.addGroup(_,W,S),_+=W,d+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Hi extends bn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,f=e/o,d=t/l,_=[],x=[],A=[],p=[];for(let u=0;u<h;u++){const b=u*d-a;for(let R=0;R<c;R++){const v=R*f-s;x.push(v,-b,0),A.push(0,0,1),p.push(R/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<o;b++){const R=b+c*u,v=b+c*(u+1),T=b+1+c*(u+1),E=b+1+c*u;_.push(R,v,E),_.push(v,T,E)}this.setIndex(_),this.setAttribute("position",new In(x,3)),this.setAttribute("normal",new In(A,3)),this.setAttribute("uv",new In(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.widthSegments,e.heightSegments)}}function ki(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Po(r))r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Po(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function $t(i){const e={};for(let t=0;t<i.length;t++){const n=ki(i[t]);for(const r in n)e[r]=n[r]}return e}function Po(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Cu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const Ru={clone:ki,merge:$t};var Pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pu,this.fragmentShader=Lu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=Cu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new at().setHex(r.value);break;case"v2":this.uniforms[n].value=new rt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new q().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Rt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Et().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Du extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Iu extends cr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ea,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Ca,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Uu extends cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nu extends cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ws={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Lo(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Lo(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Lo(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Fu{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){const _=c[f],x=c[f+1];if(_.global&&(_.lastIndex=0),_.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ou=new Fu;class Va{constructor(e){this.manager=e!==void 0?e:Ou,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Va.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ci=new WeakMap;class Bu extends Va{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ws.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=Ci.get(a);f===void 0&&(f=[],Ci.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=ar("img");function l(){h(),t&&t(this);const f=Ci.get(this)||[];for(let d=0;d<f.length;d++){const _=f[d];_.onLoad&&_.onLoad(this)}Ci.delete(this),s.manager.itemEnd(e)}function c(f){h(),r&&r(f),ws.remove(`image:${e}`);const d=Ci.get(this)||[];for(let _=0;_<d.length;_++){const x=d[_];x.onError&&x.onError(f)}Ci.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ws.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Fl extends Va{constructor(e){super(e)}load(e,t,n,r){const s=new Ot,a=new Bu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Ol extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class zu extends Ol{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Cs=new Et,Do=new q,Io=new q;class Hu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ga,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Do.setFromMatrixPosition(e.matrixWorld),t.position.copy(Do),Io.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Io),t.updateMatrixWorld(),Cs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cs,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===sr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Pr=new q,Lr=new di,pn=new q;class Bl extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pr,Lr,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pr,Lr,pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Pr,Lr,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pr,Lr,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qn=new q,Uo=new rt,No=new rt;class on extends Bl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return or*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,Uo,No),t.subVectors(No,Uo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Wa extends Bl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ku extends Hu{constructor(){super(new Wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gu extends Ol{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new ku}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ri=-90,Pi=1;class Vu extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(Ri,Pi,e,t);r.layers=this.layers,this.add(r);const s=new on(Ri,Pi,e,t);s.layers=this.layers,this.add(s);const a=new on(Ri,Pi,e,t);a.layers=this.layers,this.add(a);const o=new on(Ri,Pi,e,t);o.layers=this.layers,this.add(o);const l=new on(Ri,Pi,e,t);l.layers=this.layers,this.add(l);const c=new on(Ri,Pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,_),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Wu extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Fo=new Et;class Oo{constructor(e,t,n=0,r=1/0){this.ray=new Dl(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fo),this}intersectObject(e,t=!0,n=[]){return ba(e,this,n,t),n.sort(Bo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)ba(e[r],this,n,t);return n.sort(Bo),n}}function Bo(i,e){return i.distance-e.distance}function ba(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)ba(s[a],e,t,!0)}}const Ka=class Ka{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Ka.prototype.isMatrix2=!0;let zo=Ka;function Ho(i,e,t,n){const r=Xu(n);switch(t){case Tl:return i*e;case Da:return i*e/r.components*r.byteLength;case Ia:return i*e/r.components*r.byteLength;case ui:return i*e*2/r.components*r.byteLength;case Ua:return i*e*2/r.components*r.byteLength;case Al:return i*e*3/r.components*r.byteLength;case qt:return i*e*4/r.components*r.byteLength;case Na:return i*e*4/r.components*r.byteLength;case Fr:case Or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $s:case Zs:return Math.max(i,16)*Math.max(e,8)/4;case Ys:case Ks:return Math.max(i,8)*Math.max(e,8)/2;case Js:case Qs:case ea:case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case js:case Vr:case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ra:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case sa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case aa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case oa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case la:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case da:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ha:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ma:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ga:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _a:case va:case xa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ma:case Sa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Wr:case ya:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xu(i){switch(i){case nn:case Sl:return{byteLength:1,components:1};case ir:case yl:case Nn:return{byteLength:2,components:1};case Pa:case La:return{byteLength:2,components:4};case yn:case Ra:case dn:return{byteLength:4,components:1};case El:case bl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wa}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zl(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function qu(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let _;if(c instanceof Float32Array)_=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)_=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=i.SHORT;else if(c instanceof Uint32Array)_=i.UNSIGNED_INT;else if(c instanceof Int32Array)_=i.INT;else if(c instanceof Int8Array)_=i.BYTE;else if(c instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((_,x)=>_.start-x.start);let d=0;for(let _=1;_<f.length;_++){const x=f[d],A=f[_];A.start<=x.start+x.count+1?x.count=Math.max(x.count,A.start+A.count-x.start):(++d,f[d]=A)}f.length=d+1;for(let _=0,x=f.length;_<x;_++){const A=f[_];i.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Yu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$u=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ku=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ju=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ju=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,af=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,of=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_f=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Af=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,If=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Hf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,id=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,od=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ld=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ud=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_d=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Md=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ed=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Td=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ld=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Id=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ud=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Od=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $d=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,th=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ih=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ah=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ch=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ph=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_h=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Eh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Th=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ah=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:Yu,alphahash_pars_fragment:$u,alphamap_fragment:Ku,alphamap_pars_fragment:Zu,alphatest_fragment:Ju,alphatest_pars_fragment:Qu,aomap_fragment:ju,aomap_pars_fragment:ef,batching_pars_vertex:tf,batching_vertex:nf,begin_vertex:rf,beginnormal_vertex:sf,bsdfs:af,iridescence_fragment:of,bumpmap_pars_fragment:lf,clipping_planes_fragment:cf,clipping_planes_pars_fragment:uf,clipping_planes_pars_vertex:ff,clipping_planes_vertex:df,color_fragment:hf,color_pars_fragment:pf,color_pars_vertex:mf,color_vertex:gf,common:_f,cube_uv_reflection_fragment:vf,defaultnormal_vertex:xf,displacementmap_pars_vertex:Mf,displacementmap_vertex:Sf,emissivemap_fragment:yf,emissivemap_pars_fragment:Ef,colorspace_fragment:bf,colorspace_pars_fragment:Tf,envmap_fragment:Af,envmap_common_pars_fragment:wf,envmap_pars_fragment:Cf,envmap_pars_vertex:Rf,envmap_physical_pars_fragment:Hf,envmap_vertex:Pf,fog_vertex:Lf,fog_pars_vertex:Df,fog_fragment:If,fog_pars_fragment:Uf,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Ff,lights_lambert_fragment:Of,lights_lambert_pars_fragment:Bf,lights_pars_begin:zf,lights_toon_fragment:kf,lights_toon_pars_fragment:Gf,lights_phong_fragment:Vf,lights_phong_pars_fragment:Wf,lights_physical_fragment:Xf,lights_physical_pars_fragment:qf,lights_fragment_begin:Yf,lights_fragment_maps:$f,lights_fragment_end:Kf,lightprobes_pars_fragment:Zf,logdepthbuf_fragment:Jf,logdepthbuf_pars_fragment:Qf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:ed,map_fragment:td,map_pars_fragment:nd,map_particle_fragment:id,map_particle_pars_fragment:rd,metalnessmap_fragment:sd,metalnessmap_pars_fragment:ad,morphinstance_vertex:od,morphcolor_vertex:ld,morphnormal_vertex:cd,morphtarget_pars_vertex:ud,morphtarget_vertex:fd,normal_fragment_begin:dd,normal_fragment_maps:hd,normal_pars_fragment:pd,normal_pars_vertex:md,normal_vertex:gd,normalmap_pars_fragment:_d,clearcoat_normal_fragment_begin:vd,clearcoat_normal_fragment_maps:xd,clearcoat_pars_fragment:Md,iridescence_pars_fragment:Sd,opaque_fragment:yd,packing:Ed,premultiplied_alpha_fragment:bd,project_vertex:Td,dithering_fragment:Ad,dithering_pars_fragment:wd,roughnessmap_fragment:Cd,roughnessmap_pars_fragment:Rd,shadowmap_pars_fragment:Pd,shadowmap_pars_vertex:Ld,shadowmap_vertex:Dd,shadowmask_pars_fragment:Id,skinbase_vertex:Ud,skinning_pars_vertex:Nd,skinning_vertex:Fd,skinnormal_vertex:Od,specularmap_fragment:Bd,specularmap_pars_fragment:zd,tonemapping_fragment:Hd,tonemapping_pars_fragment:kd,transmission_fragment:Gd,transmission_pars_fragment:Vd,uv_pars_fragment:Wd,uv_pars_vertex:Xd,uv_vertex:qd,worldpos_vertex:Yd,background_vert:$d,background_frag:Kd,backgroundCube_vert:Zd,backgroundCube_frag:Jd,cube_vert:Qd,cube_frag:jd,depth_vert:eh,depth_frag:th,distance_vert:nh,distance_frag:ih,equirect_vert:rh,equirect_frag:sh,linedashed_vert:ah,linedashed_frag:oh,meshbasic_vert:lh,meshbasic_frag:ch,meshlambert_vert:uh,meshlambert_frag:fh,meshmatcap_vert:dh,meshmatcap_frag:hh,meshnormal_vert:ph,meshnormal_frag:mh,meshphong_vert:gh,meshphong_frag:_h,meshphysical_vert:vh,meshphysical_frag:xh,meshtoon_vert:Mh,meshtoon_frag:Sh,points_vert:yh,points_frag:Eh,shadow_vert:bh,shadow_frag:Th,sprite_vert:Ah,sprite_frag:wh},Me={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},gn={basic:{uniforms:$t([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:$t([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:$t([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:$t([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:$t([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new at(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:$t([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:$t([Me.points,Me.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:$t([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:$t([Me.common,Me.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:$t([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:$t([Me.sprite,Me.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:$t([Me.common,Me.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:$t([Me.lights,Me.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};gn.physical={uniforms:$t([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Dr={r:0,b:0,g:0},Ch=new Et,Hl=new Ke;Hl.set(-1,0,0,0,1,0,0,0,1);function Rh(i,e,t,n,r,s){const a=new at(0);let o=r===!0?0:1,l,c,h=null,f=0,d=null;function _(b){let R=b.isScene===!0?b.background:null;if(R&&R.isTexture){const v=b.backgroundBlurriness>0;R=e.get(R,v)}return R}function x(b){let R=!1;const v=_(b);v===null?p(a,o):v&&v.isColor&&(p(v,1),R=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(b,R){const v=_(R);v&&(v.isCubeTexture||v.mapping===Kr)?(c===void 0&&(c=new rn(new ur(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:ki(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ch.makeRotationFromEuler(R.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hl),c.material.toneMapped=lt.getTransfer(v.colorSpace)!==_t,(h!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new rn(new Hi(2,2),new En({name:"BackgroundMaterial",uniforms:ki(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=lt.getTransfer(v.colorSpace)!==_t,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,R){b.getRGB(Dr,Nl(i)),t.buffers.color.setClear(Dr.r,Dr.g,Dr.b,R,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,R=1){a.set(b),o=R,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:x,addToRenderList:A,dispose:u}}function Ph(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(L,N,B,G,U){let k=!1;const I=f(L,G,B,N);s!==I&&(s=I,c(s.object)),k=_(L,G,B,U),k&&x(L,G,B,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,v(L,N,B,G),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function f(L,N,B,G){const U=G.wireframe===!0;let k=n[N.id];k===void 0&&(k={},n[N.id]=k);const I=L.isInstancedMesh===!0?L.id:0;let W=k[I];W===void 0&&(W={},k[I]=W);let ne=W[B.id];ne===void 0&&(ne={},W[B.id]=ne);let oe=ne[U];return oe===void 0&&(oe=d(l()),ne[U]=oe),oe}function d(L){const N=[],B=[],G=[];for(let U=0;U<t;U++)N[U]=0,B[U]=0,G[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:G,object:L,attributes:{},index:null}}function _(L,N,B,G){const U=s.attributes,k=N.attributes;let I=0;const W=B.getAttributes();for(const ne in W)if(W[ne].location>=0){const se=U[ne];let de=k[ne];if(de===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(de=L.instanceColor)),se===void 0||se.attribute!==de||de&&se.data!==de.data)return!0;I++}return s.attributesNum!==I||s.index!==G}function x(L,N,B,G){const U={},k=N.attributes;let I=0;const W=B.getAttributes();for(const ne in W)if(W[ne].location>=0){let se=k[ne];se===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(se=L.instanceColor));const de={};de.attribute=se,se&&se.data&&(de.data=se.data),U[ne]=de,I++}s.attributes=U,s.attributesNum=I,s.index=G}function A(){const L=s.newAttributes;for(let N=0,B=L.length;N<B;N++)L[N]=0}function p(L){u(L,0)}function u(L,N){const B=s.newAttributes,G=s.enabledAttributes,U=s.attributeDivisors;B[L]=1,G[L]===0&&(i.enableVertexAttribArray(L),G[L]=1),U[L]!==N&&(i.vertexAttribDivisor(L,N),U[L]=N)}function b(){const L=s.newAttributes,N=s.enabledAttributes;for(let B=0,G=N.length;B<G;B++)N[B]!==L[B]&&(i.disableVertexAttribArray(B),N[B]=0)}function R(L,N,B,G,U,k,I){I===!0?i.vertexAttribIPointer(L,N,B,U,k):i.vertexAttribPointer(L,N,B,G,U,k)}function v(L,N,B,G){A();const U=G.attributes,k=B.getAttributes(),I=N.defaultAttributeValues;for(const W in k){const ne=k[W];if(ne.location>=0){let oe=U[W];if(oe===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),oe!==void 0){const se=oe.normalized,de=oe.itemSize,We=e.get(oe);if(We===void 0)continue;const Je=We.buffer,He=We.type,j=We.bytesPerElement,te=He===i.INT||He===i.UNSIGNED_INT||oe.gpuType===Ra;if(oe.isInterleavedBufferAttribute){const le=oe.data,De=le.stride,ze=oe.offset;if(le.isInstancedInterleavedBuffer){for(let Ae=0;Ae<ne.locationSize;Ae++)u(ne.location+Ae,le.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ae=0;Ae<ne.locationSize;Ae++)p(ne.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let Ae=0;Ae<ne.locationSize;Ae++)R(ne.location+Ae,de/ne.locationSize,He,se,De*j,(ze+de/ne.locationSize*Ae)*j,te)}else{if(oe.isInstancedBufferAttribute){for(let le=0;le<ne.locationSize;le++)u(ne.location+le,oe.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let le=0;le<ne.locationSize;le++)p(ne.location+le);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let le=0;le<ne.locationSize;le++)R(ne.location+le,de/ne.locationSize,He,se,de*j,de/ne.locationSize*le*j,te)}}else if(I!==void 0){const se=I[W];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(ne.location,se);break;case 3:i.vertexAttrib3fv(ne.location,se);break;case 4:i.vertexAttrib4fv(ne.location,se);break;default:i.vertexAttrib1fv(ne.location,se)}}}}b()}function T(){S();for(const L in n){const N=n[L];for(const B in N){const G=N[B];for(const U in G){const k=G[U];for(const I in k)h(k[I].object),delete k[I];delete G[U]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;const N=n[L.id];for(const B in N){const G=N[B];for(const U in G){const k=G[U];for(const I in k)h(k[I].object),delete k[I];delete G[U]}}delete n[L.id]}function w(L){for(const N in n){const B=n[N];for(const G in B){const U=B[G];if(U[L.id]===void 0)continue;const k=U[L.id];for(const I in k)h(k[I].object),delete k[I];delete U[L.id]}}}function m(L){for(const N in n){const B=n[N],G=L.isInstancedMesh===!0?L.id:0,U=B[G];if(U!==void 0){for(const k in U){const I=U[k];for(const W in I)h(I[W].object),delete I[W];delete U[k]}delete B[G],Object.keys(B).length===0&&delete n[N]}}}function S(){D(),a=!0,s!==r&&(s=r,c(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:S,resetDefaultState:D,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:m,releaseStatesOfProgram:w,initAttributes:A,enableAttribute:p,disableUnusedAttributes:b}}function Lh(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let _=0;_<h;_++)d+=c[_];t.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Dh(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==qt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const m=w===Nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==nn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==dn&&!m)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ve("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:_,maxVertexTextures:x,maxTextureSize:A,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:v,maxSamples:T,samples:E}}function Ih(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new ri,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const _=f.length!==0||d||n!==0||r;return r=d,n=f.length,_},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,_){const x=f.clippingPlanes,A=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!r||x===null||x.length===0||s&&!p)s?h(null):c();else{const b=s?0:n,R=b*4;let v=u.clippingState||null;l.value=v,v=h(x,d,R,_);for(let T=0;T!==R;++T)v[T]=t[T];u.clippingState=v,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,_,x){const A=f!==null?f.length:0;let p=null;if(A!==0){if(p=l.value,x!==!0||p===null){const u=_+A*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let R=0,v=_;R!==A;++R,v+=4)a.copy(f[R]).applyMatrix4(b,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,p}}const Kn=4,ko=[.125,.215,.35,.446,.526,.582],oi=20,Uh=256,Zi=new Wa,Go=new at;let Rs=null,Ps=0,Ls=0,Ds=!1;const Nh=new q;class Vo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Nh}=s;Rs=this._renderer.getRenderTarget(),Ps=this._renderer.getActiveCubeFace(),Ls=this._renderer.getActiveMipmapLevel(),Ds=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rs,Ps,Ls),this._renderer.xr.enabled=Ds,e.scissorTest=!1,Li(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rs=this._renderer.getRenderTarget(),Ps=this._renderer.getActiveCubeFace(),Ls=this._renderer.getActiveMipmapLevel(),Ds=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Nn,format:qt,colorSpace:Xr,depthBuffer:!1},r=Wo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wo(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Fh(s)),this._blurMaterial=Bh(s,e,t),this._ggxMaterial=Oh(s,e,t)}return r}_compileMaterial(e){const t=new rn(new bn,e);this._renderer.compile(t,Zi)}_sceneToCubeUV(e,t,n,r,s){const l=new on(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,_=f.toneMapping;f.getClearColor(Go),f.toneMapping=Mn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rn(new ur,new Yr({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,p=A.material;let u=!1;const b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,u=!0):(p.color.copy(Go),u=!0);for(let R=0;R<6;R++){const v=R%3;v===0?(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[R],s.y,s.z)):v===1?(l.up.set(0,0,c[R]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[R],s.z)):(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[R]));const T=this._cubeSize;Li(r,v*T,R>2?T:0,T,T),f.setRenderTarget(r),u&&f.render(A,l),f.render(e,l)}f.toneMapping=_,f.autoClear=d,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ci||e.mapping===Bi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Li(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Zi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),d=0+c*1.25,_=f*d,{_lodMax:x}=this,A=this._sizeLods[n],p=3*A*(n>x-Kn?n-x+Kn:0),u=4*(this._cubeSize-A);l.envMap.value=e.texture,l.roughness.value=_,l.mipInt.value=x-t,Li(s,p,u,3*A,2*A),r.setRenderTarget(s),r.render(o,Zi),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-n,Li(e,p,u,3*A,2*A),r.setRenderTarget(e),r.render(o,Zi)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ct("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,_=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*oi-1),A=s/x,p=isFinite(s)?1+Math.floor(h*A):oi;p>oi&&Ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${oi}`);const u=[];let b=0;for(let w=0;w<oi;++w){const m=w/A,S=Math.exp(-m*m/2);u.push(S),w===0?b+=S:w<p&&(b+=2*S)}for(let w=0;w<u.length;w++)u[w]=u[w]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:R}=this;d.dTheta.value=x,d.mipInt.value=R-n;const v=this._sizeLods[r],T=3*v*(r>R-Kn?r-R+Kn:0),E=4*(this._cubeSize-v);Li(t,T,E,3*v,2*v),l.setRenderTarget(t),l.render(f,Zi)}}function Fh(i){const e=[],t=[],n=[];let r=i;const s=i-Kn+1+ko.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Kn?l=ko[a-i+Kn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],_=6,x=6,A=3,p=2,u=1,b=new Float32Array(A*x*_),R=new Float32Array(p*x*_),v=new Float32Array(u*x*_);for(let E=0;E<_;E++){const w=E%3*2/3-1,m=E>2?0:-1,S=[w,m,0,w+2/3,m,0,w+2/3,m+1,0,w,m,0,w+2/3,m+1,0,w,m+1,0];b.set(S,A*x*E),R.set(d,p*x*E);const D=[E,E,E,E,E,E];v.set(D,u*x*E)}const T=new bn;T.setAttribute("position",new Jt(b,A)),T.setAttribute("uv",new Jt(R,p)),T.setAttribute("faceIndex",new Jt(v,u)),n.push(new rn(T,null)),r>Kn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Wo(i,e,t){const n=new Sn(i,e,t);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Li(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Oh(i,e,t){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Uh,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Bh(i,e,t){const n=new Float32Array(oi),r=new q(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Xo(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function qo(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Zr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class kl extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Il(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ur(5,5,5),s=new En({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Ln});s.uniforms.tEquirect.value=t;const a=new rn(r,s),o=t.minFilter;return t.minFilter===vn&&(t.minFilter=kt),new Vu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function zh(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,_=!1){return d==null?null:_?a(d):s(d)}function s(d){if(d&&d.isTexture){const _=d.mapping;if(_===ts||_===ns)if(e.has(d)){const x=e.get(d).texture;return o(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const A=new kl(x.height);return A.fromEquirectangularTexture(i,d),e.set(d,A),d.addEventListener("dispose",c),o(A.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const _=d.mapping,x=_===ts||_===ns,A=_===ci||_===Bi;if(x||A){let p=t.get(d);const u=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return n===null&&(n=new Vo(i)),p=x?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{const b=d.image;return x&&b&&b.height>0||A&&b&&l(b)?(n===null&&(n=new Vo(i)),p=x?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,_){return _===ts?d.mapping=ci:_===ns&&(d.mapping=Bi),d}function l(d){let _=0;const x=6;for(let A=0;A<x;A++)d[A]!==void 0&&_++;return _===x}function c(d){const _=d.target;_.removeEventListener("dispose",c);const x=e.get(_);x!==void 0&&(e.delete(_),x.dispose())}function h(d){const _=d.target;_.removeEventListener("dispose",h);const x=t.get(_);x!==void 0&&(t.delete(_),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function Hh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ni("WebGLRenderer: "+n+" extension not supported."),r}}}function kh(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];const _=s.get(d);_&&(e.remove(_),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER)}function c(f){const d=[],_=f.index,x=f.attributes.position;let A=0;if(x===void 0)return;if(_!==null){const b=_.array;A=_.version;for(let R=0,v=b.length;R<v;R+=3){const T=b[R+0],E=b[R+1],w=b[R+2];d.push(T,E,E,w,w,T)}}else{const b=x.array;A=x.version;for(let R=0,v=b.length/3-1;R<v;R+=3){const T=R+0,E=R+1,w=R+2;d.push(T,E,E,w,w,T)}}const p=new(x.count>=65535?Ll:Pl)(d,1);p.version=A;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function h(f){const d=s.get(f);if(d){const _=f.index;_!==null&&d.version<_.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Gh(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,s,f*a),t.update(d,n,1)}function c(f,d,_){_!==0&&(i.drawElementsInstanced(n,d,s,f*a,_),t.update(d,n,_))}function h(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,_);let A=0;for(let p=0;p<_;p++)A+=d[p];t.update(A,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Vh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:ct("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Wh(i,e,t){const n=new WeakMap,r=new Rt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let D=function(){m.dispose(),n.delete(o),o.removeEventListener("dispose",D)};var _=D;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,A=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let v=0;x===!0&&(v=1),A===!0&&(v=2),p===!0&&(v=3);let T=o.attributes.position.count*v,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const w=new Float32Array(T*E*4*f),m=new Cl(w,T,E,f);m.type=dn,m.needsUpdate=!0;const S=v*4;for(let L=0;L<f;L++){const N=u[L],B=b[L],G=R[L],U=T*E*4*L;for(let k=0;k<N.count;k++){const I=k*S;x===!0&&(r.fromBufferAttribute(N,k),w[U+I+0]=r.x,w[U+I+1]=r.y,w[U+I+2]=r.z,w[U+I+3]=0),A===!0&&(r.fromBufferAttribute(B,k),w[U+I+4]=r.x,w[U+I+5]=r.y,w[U+I+6]=r.z,w[U+I+7]=0),p===!0&&(r.fromBufferAttribute(G,k),w[U+I+8]=r.x,w[U+I+9]=r.y,w[U+I+10]=r.z,w[U+I+11]=G.itemSize===4?r.w:1)}}d={count:f,texture:m,size:new rt(T,E)},n.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let p=0;p<c.length;p++)x+=c[p];const A=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",A),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Xh(i,e,t,n,r){let s=new WeakMap;function a(c){const h=r.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const _=c.skeleton;s.get(_)!==h&&(_.update(),s.set(_,h))}return d}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const qh={[hl]:"LINEAR_TONE_MAPPING",[pl]:"REINHARD_TONE_MAPPING",[ml]:"CINEON_TONE_MAPPING",[gl]:"ACES_FILMIC_TONE_MAPPING",[vl]:"AGX_TONE_MAPPING",[xl]:"NEUTRAL_TONE_MAPPING",[_l]:"CUSTOM_TONE_MAPPING"};function Yh(i,e,t,n,r,s){const a=new Sn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new zi(e,t):void 0}),o=new Sn(e,t,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),l=new bn;l.setAttribute("position",new In([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new In([0,2,0,0,2,0],2));const c=new Du({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new rn(l,c),f=new Wa(-1,1,1,-1,0,1);let d=null,_=null,x=!1,A,p=null,u=[],b=!1;this.setSize=function(R,v){a.setSize(R,v),o.setSize(R,v);for(let T=0;T<u.length;T++){const E=u[T];E.setSize&&E.setSize(R,v)}},this.setEffects=function(R){u=R,b=u.length>0&&u[0].isRenderPass===!0;const v=a.width,T=a.height;for(let E=0;E<u.length;E++){const w=u[E];w.setSize&&w.setSize(v,T)}},this.begin=function(R,v){if(x||R.toneMapping===Mn&&u.length===0)return!1;if(p=v,v!==null){const T=v.width,E=v.height;(a.width!==T||a.height!==E)&&this.setSize(T,E)}return b===!1&&R.setRenderTarget(a),A=R.toneMapping,R.toneMapping=Mn,!0},this.hasRenderPass=function(){return b},this.end=function(R,v){R.toneMapping=A,x=!0;let T=a,E=o;for(let w=0;w<u.length;w++){const m=u[w];if(m.enabled!==!1&&(m.render(R,E,T,v),m.needsSwap!==!1)){const S=T;T=E,E=S}}if(d!==R.outputColorSpace||_!==R.toneMapping){d=R.outputColorSpace,_=R.toneMapping,c.defines={},lt.getTransfer(d)===_t&&(c.defines.SRGB_TRANSFER="");const w=qh[_];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,R.setRenderTarget(p),R.render(h,f),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Gl=new Ot,Ta=new zi(1,1),Vl=new Cl,Wl=new cu,Xl=new Il,Yo=[],$o=[],Ko=new Float32Array(16),Zo=new Float32Array(9),Jo=new Float32Array(4);function Vi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Yo[r];if(s===void 0&&(s=new Float32Array(r),Yo[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jr(i,e){let t=$o[e];t===void 0&&(t=new Int32Array(e),$o[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $h(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Kh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function Zh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function Jh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function Qh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;Jo.set(n),i.uniformMatrix2fv(this.addr,!1,Jo),zt(t,n)}}function jh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;Zo.set(n),i.uniformMatrix3fv(this.addr,!1,Zo),zt(t,n)}}function ep(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;Ko.set(n),i.uniformMatrix4fv(this.addr,!1,Ko),zt(t,n)}}function tp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function sp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function cp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ta.compareFunction=t.isReversedDepthBuffer()?Oa:Fa,s=Ta):s=Gl,t.setTexture2D(e||s,r)}function up(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Wl,r)}function fp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Xl,r)}function dp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Vl,r)}function hp(i){switch(i){case 5126:return $h;case 35664:return Kh;case 35665:return Zh;case 35666:return Jh;case 35674:return Qh;case 35675:return jh;case 35676:return ep;case 5124:case 35670:return tp;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return rp;case 5125:return sp;case 36294:return ap;case 36295:return op;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35679:case 36299:case 36307:return up;case 35680:case 36300:case 36308:case 36293:return fp;case 36289:case 36303:case 36311:case 36292:return dp}}function pp(i,e){i.uniform1fv(this.addr,e)}function mp(i,e){const t=Vi(e,this.size,2);i.uniform2fv(this.addr,t)}function gp(i,e){const t=Vi(e,this.size,3);i.uniform3fv(this.addr,t)}function _p(i,e){const t=Vi(e,this.size,4);i.uniform4fv(this.addr,t)}function vp(i,e){const t=Vi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xp(i,e){const t=Vi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mp(i,e){const t=Vi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sp(i,e){i.uniform1iv(this.addr,e)}function yp(i,e){i.uniform2iv(this.addr,e)}function Ep(i,e){i.uniform3iv(this.addr,e)}function bp(i,e){i.uniform4iv(this.addr,e)}function Tp(i,e){i.uniform1uiv(this.addr,e)}function Ap(i,e){i.uniform2uiv(this.addr,e)}function wp(i,e){i.uniform3uiv(this.addr,e)}function Cp(i,e){i.uniform4uiv(this.addr,e)}function Rp(i,e,t){const n=this.cache,r=e.length,s=Jr(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ta:a=Gl;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Pp(i,e,t){const n=this.cache,r=e.length,s=Jr(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Wl,s[a])}function Lp(i,e,t){const n=this.cache,r=e.length,s=Jr(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Xl,s[a])}function Dp(i,e,t){const n=this.cache,r=e.length,s=Jr(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Vl,s[a])}function Ip(i){switch(i){case 5126:return pp;case 35664:return mp;case 35665:return gp;case 35666:return _p;case 35674:return vp;case 35675:return xp;case 35676:return Mp;case 5124:case 35670:return Sp;case 35667:case 35671:return yp;case 35668:case 35672:return Ep;case 35669:case 35673:return bp;case 5125:return Tp;case 36294:return Ap;case 36295:return wp;case 36296:return Cp;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Dp}}class Up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hp(t.type)}}class Np{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ip(t.type)}}class Fp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Is=/(\w+)(\])?(\[|\.)?/g;function Qo(i,e){i.seq.push(e),i.map[e.id]=e}function Op(i,e,t){const n=i.name,r=n.length;for(Is.lastIndex=0;;){const s=Is.exec(n),a=Is.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Qo(t,c===void 0?new Up(o,i,e):new Np(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Fp(o),Qo(t,f)),t=f}}}class Hr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Op(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function jo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Bp=37297;let zp=0;function Hp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const el=new Ke;function kp(i){lt._getMatrix(el,lt.workingColorSpace,i);const e=`mat3( ${el.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case qr:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function tl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Hp(i.getShaderSource(e),o)}else return s}function Gp(i,e){const t=kp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Vp={[hl]:"Linear",[pl]:"Reinhard",[ml]:"Cineon",[gl]:"ACESFilmic",[vl]:"AgX",[xl]:"Neutral",[_l]:"Custom"};function Wp(i,e){const t=Vp[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ir=new q;function Xp(){lt.getLuminanceCoefficients(Ir);const i=Ir.x.toFixed(4),e=Ir.y.toFixed(4),t=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function Yp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $p(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function er(i){return i!==""}function nl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function il(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Aa(i){return i.replace(Kp,Jp)}const Zp=new Map;function Jp(i,e){let t=tt[e];if(t===void 0){const n=Zp.get(e);if(n!==void 0)t=tt[n],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Aa(t)}const Qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rl(i){return i.replace(Qp,jp)}function jp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const em={[Nr]:"SHADOWMAP_TYPE_PCF",[Qi]:"SHADOWMAP_TYPE_VSM"};function tm(i){return em[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nm={[ci]:"ENVMAP_TYPE_CUBE",[Bi]:"ENVMAP_TYPE_CUBE",[Kr]:"ENVMAP_TYPE_CUBE_UV"};function im(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":nm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const rm={[Bi]:"ENVMAP_MODE_REFRACTION"};function sm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":rm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const am={[Ca]:"ENVMAP_BLENDING_MULTIPLY",[wc]:"ENVMAP_BLENDING_MIX",[Cc]:"ENVMAP_BLENDING_ADD"};function om(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":am[i.combine]||"ENVMAP_BLENDING_NONE"}function lm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function cm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=tm(t),c=im(t),h=sm(t),f=om(t),d=lm(t),_=qp(t),x=Yp(s),A=r.createProgram();let p,u,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(er).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(er).join(`
`),u.length>0&&(u+=`
`)):(p=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),u=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Mn?Wp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Gp("linearToOutputTexel",t.outputColorSpace),Xp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),a=Aa(a),a=nl(a,t),a=il(a,t),o=Aa(o),o=nl(o,t),o=il(o,t),a=rl(a),o=rl(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===ao?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ao?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const R=b+p+a,v=b+u+o,T=jo(r,r.VERTEX_SHADER,R),E=jo(r,r.FRAGMENT_SHADER,v);r.attachShader(A,T),r.attachShader(A,E),t.index0AttributeName!==void 0?r.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function w(L){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(A)||"",B=r.getShaderInfoLog(T)||"",G=r.getShaderInfoLog(E)||"",U=N.trim(),k=B.trim(),I=G.trim();let W=!0,ne=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,A,T,E);else{const oe=tl(r,T,"vertex"),se=tl(r,E,"fragment");ct("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+oe+`
`+se)}else U!==""?Ve("WebGLProgram: Program Info Log:",U):(k===""||I==="")&&(ne=!1);ne&&(L.diagnostics={runnable:W,programLog:U,vertexShader:{log:k,prefix:p},fragmentShader:{log:I,prefix:u}})}r.deleteShader(T),r.deleteShader(E),m=new Hr(r,A),S=$p(r,A)}let m;this.getUniforms=function(){return m===void 0&&w(this),m};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(A,Bp)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zp++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=T,this.fragmentShader=E,this}let um=0;class fm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dm(e),t.set(e,n)),n}}class dm{constructor(e){this.id=um++,this.code=e,this.usedTimes=0}}function hm(i){return i===ui||i===Vr||i===Wr}function pm(i,e,t,n,r,s){const a=new Ha,o=new fm,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let d=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(m){return l.add(m),m===0?"uv":`uv${m}`}function A(m,S,D,L,N,B){const G=L.fog,U=N.geometry,k=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?L.environment:null,I=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,W=e.get(m.envMap||k,I),ne=W&&W.mapping===Kr?W.image.height:null,oe=_[m.type];m.precision!==null&&(d=n.getMaxPrecision(m.precision),d!==m.precision&&Ve("WebGLProgram.getParameters:",m.precision,"not supported, using",d,"instead."));const se=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,de=se!==void 0?se.length:0;let We=0;U.morphAttributes.position!==void 0&&(We=1),U.morphAttributes.normal!==void 0&&(We=2),U.morphAttributes.color!==void 0&&(We=3);let Je,He,j,te;if(oe){const Z=gn[oe];Je=Z.vertexShader,He=Z.fragmentShader}else{Je=m.vertexShader,He=m.fragmentShader;const Z=o.getVertexShaderStage(m),ce=o.getFragmentShaderStage(m);o.update(m,Z,ce),j=Z.id,te=ce.id}const le=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),ze=N.isInstancedMesh===!0,Ae=N.isBatchedMesh===!0,ut=!!m.map,Xe=!!m.matcap,je=!!W,qe=!!m.aoMap,Ye=!!m.lightMap,gt=!!m.bumpMap&&m.wireframe===!1,ft=!!m.normalMap,At=!!m.displacementMap,vt=!!m.emissiveMap,st=!!m.metalnessMap,dt=!!m.roughnessMap,z=m.anisotropy>0,Lt=m.clearcoat>0,Qe=m.dispersion>0,P=m.iridescence>0,g=m.sheen>0,V=m.transmission>0,Y=z&&!!m.anisotropyMap,Q=Lt&&!!m.clearcoatMap,ue=Lt&&!!m.clearcoatNormalMap,he=Lt&&!!m.clearcoatRoughnessMap,ee=P&&!!m.iridescenceMap,ie=P&&!!m.iridescenceThicknessMap,ge=g&&!!m.sheenColorMap,Re=g&&!!m.sheenRoughnessMap,xe=!!m.specularMap,fe=!!m.specularColorMap,Le=!!m.specularIntensityMap,Fe=V&&!!m.transmissionMap,ke=V&&!!m.thicknessMap,O=!!m.gradientMap,pe=!!m.alphaMap,re=m.alphaTest>0,me=!!m.alphaHash,M=!!m.extensions;let C=Mn;m.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(C=i.toneMapping);const X={shaderID:oe,shaderType:m.type,shaderName:m.name,vertexShader:Je,fragmentShader:He,defines:m.defines,customVertexShaderID:j,customFragmentShaderID:te,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&N._colorsTexture!==null,instancing:ze,instancingColor:ze&&N.instanceColor!==null,instancingMorph:ze&&N.morphTexture!==null,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:ut,matcap:Xe,envMap:je,envMapMode:je&&W.mapping,envMapCubeUVHeight:ne,aoMap:qe,lightMap:Ye,bumpMap:gt,normalMap:ft,displacementMap:At,emissiveMap:vt,normalMapObjectSpace:ft&&m.normalMapType===Lc,normalMapTangentSpace:ft&&m.normalMapType===Ea,packedNormalMap:ft&&m.normalMapType===Ea&&hm(m.normalMap.format),metalnessMap:st,roughnessMap:dt,anisotropy:z,anisotropyMap:Y,clearcoat:Lt,clearcoatMap:Q,clearcoatNormalMap:ue,clearcoatRoughnessMap:he,dispersion:Qe,iridescence:P,iridescenceMap:ee,iridescenceThicknessMap:ie,sheen:g,sheenColorMap:ge,sheenRoughnessMap:Re,specularMap:xe,specularColorMap:fe,specularIntensityMap:Le,transmission:V,transmissionMap:Fe,thicknessMap:ke,gradientMap:O,opaque:m.transparent===!1&&m.blending===Ui&&m.alphaToCoverage===!1,alphaMap:pe,alphaTest:re,alphaHash:me,combine:m.combine,mapUv:ut&&x(m.map.channel),aoMapUv:qe&&x(m.aoMap.channel),lightMapUv:Ye&&x(m.lightMap.channel),bumpMapUv:gt&&x(m.bumpMap.channel),normalMapUv:ft&&x(m.normalMap.channel),displacementMapUv:At&&x(m.displacementMap.channel),emissiveMapUv:vt&&x(m.emissiveMap.channel),metalnessMapUv:st&&x(m.metalnessMap.channel),roughnessMapUv:dt&&x(m.roughnessMap.channel),anisotropyMapUv:Y&&x(m.anisotropyMap.channel),clearcoatMapUv:Q&&x(m.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&x(m.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&x(m.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&x(m.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&x(m.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(m.sheenRoughnessMap.channel),specularMapUv:xe&&x(m.specularMap.channel),specularColorMapUv:fe&&x(m.specularColorMap.channel),specularIntensityMapUv:Le&&x(m.specularIntensityMap.channel),transmissionMapUv:Fe&&x(m.transmissionMap.channel),thicknessMapUv:ke&&x(m.thicknessMap.channel),alphaMapUv:pe&&x(m.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ft||z),vertexNormals:!!U.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(ut||pe),fog:!!G,useFog:m.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||U.attributes.normal===void 0&&ft===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:De,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:We,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:C,decodeVideoTexture:ut&&m.map.isVideoTexture===!0&&lt.getTransfer(m.map.colorSpace)===_t,decodeVideoTextureEmissive:vt&&m.emissiveMap.isVideoTexture===!0&&lt.getTransfer(m.emissiveMap.colorSpace)===_t,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===_n,flipSided:m.side===Zt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:M&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(M&&m.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return X.vertexUv1s=l.has(1),X.vertexUv2s=l.has(2),X.vertexUv3s=l.has(3),l.clear(),X}function p(m){const S=[];if(m.shaderID?S.push(m.shaderID):(S.push(m.customVertexShaderID),S.push(m.customFragmentShaderID)),m.defines!==void 0)for(const D in m.defines)S.push(D),S.push(m.defines[D]);return m.isRawShaderMaterial===!1&&(u(S,m),b(S,m),S.push(i.outputColorSpace)),S.push(m.customProgramCacheKey),S.join()}function u(m,S){m.push(S.precision),m.push(S.outputColorSpace),m.push(S.envMapMode),m.push(S.envMapCubeUVHeight),m.push(S.mapUv),m.push(S.alphaMapUv),m.push(S.lightMapUv),m.push(S.aoMapUv),m.push(S.bumpMapUv),m.push(S.normalMapUv),m.push(S.displacementMapUv),m.push(S.emissiveMapUv),m.push(S.metalnessMapUv),m.push(S.roughnessMapUv),m.push(S.anisotropyMapUv),m.push(S.clearcoatMapUv),m.push(S.clearcoatNormalMapUv),m.push(S.clearcoatRoughnessMapUv),m.push(S.iridescenceMapUv),m.push(S.iridescenceThicknessMapUv),m.push(S.sheenColorMapUv),m.push(S.sheenRoughnessMapUv),m.push(S.specularMapUv),m.push(S.specularColorMapUv),m.push(S.specularIntensityMapUv),m.push(S.transmissionMapUv),m.push(S.thicknessMapUv),m.push(S.combine),m.push(S.fogExp2),m.push(S.sizeAttenuation),m.push(S.morphTargetsCount),m.push(S.morphAttributeCount),m.push(S.numDirLights),m.push(S.numPointLights),m.push(S.numSpotLights),m.push(S.numSpotLightMaps),m.push(S.numHemiLights),m.push(S.numRectAreaLights),m.push(S.numDirLightShadows),m.push(S.numPointLightShadows),m.push(S.numSpotLightShadows),m.push(S.numSpotLightShadowsWithMaps),m.push(S.numLightProbes),m.push(S.shadowMapType),m.push(S.toneMapping),m.push(S.numClippingPlanes),m.push(S.numClipIntersection),m.push(S.depthPacking)}function b(m,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),m.push(a.mask)}function R(m){const S=_[m.type];let D;if(S){const L=gn[S];D=Ru.clone(L.uniforms)}else D=m.uniforms;return D}function v(m,S){let D=h.get(S);return D!==void 0?++D.usedTimes:(D=new cm(i,S,m,r),c.push(D),h.set(S,D)),D}function T(m){if(--m.usedTimes===0){const S=c.indexOf(m);c[S]=c[c.length-1],c.pop(),h.delete(m.cacheKey),m.destroy()}}function E(m){o.remove(m)}function w(){o.dispose()}return{getParameters:A,getProgramCacheKey:p,getUniforms:R,acquireProgram:v,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:w}}function mm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function gm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function al(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ol(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d){let _=0;return d.isInstancedMesh&&(_+=2),d.isSkinnedMesh&&(_+=1),_}function o(d,_,x,A,p,u){let b=i[e];return b===void 0?(b={id:d.id,object:d,geometry:_,material:x,materialVariant:a(d),groupOrder:A,renderOrder:d.renderOrder,z:p,group:u},i[e]=b):(b.id=d.id,b.object=d,b.geometry=_,b.material=x,b.materialVariant=a(d),b.groupOrder=A,b.renderOrder=d.renderOrder,b.z=p,b.group=u),e++,b}function l(d,_,x,A,p,u){const b=o(d,_,x,A,p,u);x.transmission>0?n.push(b):x.transparent===!0?r.push(b):t.push(b)}function c(d,_,x,A,p,u){const b=o(d,_,x,A,p,u);x.transmission>0?n.unshift(b):x.transparent===!0?r.unshift(b):t.unshift(b)}function h(d,_,x){t.length>1&&t.sort(d||gm),n.length>1&&n.sort(_||al),r.length>1&&r.sort(_||al),x&&(t.reverse(),n.reverse(),r.reverse())}function f(){for(let d=e,_=i.length;d<_;d++){const x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:h}}function _m(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new ol,i.set(n,[a])):r>=s.length?(a=new ol,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function vm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new at};break;case"SpotLight":t={position:new q,direction:new q,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new q,halfWidth:new q,halfHeight:new q};break}return i[e.id]=t,t}}}function xm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Mm=0;function Sm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ym(i){const e=new vm,t=xm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const r=new q,s=new Et,a=new Et;function o(c){let h=0,f=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let _=0,x=0,A=0,p=0,u=0,b=0,R=0,v=0,T=0,E=0,w=0;c.sort(Sm);for(let S=0,D=c.length;S<D;S++){const L=c[S],N=L.color,B=L.intensity,G=L.distance;let U=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ui?U=L.shadow.map.texture:U=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=N.r*B,f+=N.g*B,d+=N.b*B;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],B);w++}else if(L.isDirectionalLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const I=L.shadow,W=t.get(L);W.shadowIntensity=I.intensity,W.shadowBias=I.bias,W.shadowNormalBias=I.normalBias,W.shadowRadius=I.radius,W.shadowMapSize=I.mapSize,n.directionalShadow[_]=W,n.directionalShadowMap[_]=U,n.directionalShadowMatrix[_]=L.shadow.matrix,b++}n.directional[_]=k,_++}else if(L.isSpotLight){const k=e.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(N).multiplyScalar(B),k.distance=G,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[A]=k;const I=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,I.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[A]=I.matrix,L.castShadow){const W=t.get(L);W.shadowIntensity=I.intensity,W.shadowBias=I.bias,W.shadowNormalBias=I.normalBias,W.shadowRadius=I.radius,W.shadowMapSize=I.mapSize,n.spotShadow[A]=W,n.spotShadowMap[A]=U,v++}A++}else if(L.isRectAreaLight){const k=e.get(L);k.color.copy(N).multiplyScalar(B),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=k,p++}else if(L.isPointLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){const I=L.shadow,W=t.get(L);W.shadowIntensity=I.intensity,W.shadowBias=I.bias,W.shadowNormalBias=I.normalBias,W.shadowRadius=I.radius,W.shadowMapSize=I.mapSize,W.shadowCameraNear=I.camera.near,W.shadowCameraFar=I.camera.far,n.pointShadow[x]=W,n.pointShadowMap[x]=U,n.pointShadowMatrix[x]=L.shadow.matrix,R++}n.point[x]=k,x++}else if(L.isHemisphereLight){const k=e.get(L);k.skyColor.copy(L.color).multiplyScalar(B),k.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[u]=k,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const m=n.hash;(m.directionalLength!==_||m.pointLength!==x||m.spotLength!==A||m.rectAreaLength!==p||m.hemiLength!==u||m.numDirectionalShadows!==b||m.numPointShadows!==R||m.numSpotShadows!==v||m.numSpotMaps!==T||m.numLightProbes!==w)&&(n.directional.length=_,n.spot.length=A,n.rectArea.length=p,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=v+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,m.directionalLength=_,m.pointLength=x,m.spotLength=A,m.rectAreaLength=p,m.hemiLength=u,m.numDirectionalShadows=b,m.numPointShadows=R,m.numSpotShadows=v,m.numSpotMaps=T,m.numLightProbes=w,n.version=Mm++)}function l(c,h){let f=0,d=0,_=0,x=0,A=0;const p=h.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){const R=c[u];if(R.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),f++}else if(R.isSpotLight){const v=n.spot[_];v.position.setFromMatrixPosition(R.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),_++}else if(R.isRectAreaLight){const v=n.rectArea[x];v.position.setFromMatrixPosition(R.matrixWorld),v.position.applyMatrix4(p),a.identity(),s.copy(R.matrixWorld),s.premultiply(p),a.extractRotation(s),v.halfWidth.set(R.width*.5,0,0),v.halfHeight.set(0,R.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),x++}else if(R.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(R.matrixWorld),v.position.applyMatrix4(p),d++}else if(R.isHemisphereLight){const v=n.hemi[A];v.direction.setFromMatrixPosition(R.matrixWorld),v.direction.transformDirection(p),A++}}}return{setup:o,setupView:l,state:n}}function ll(i){const e=new ym(i),t=[],n=[],r=[];function s(d){f.camera=d,t.length=0,n.length=0,r.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){r.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Em(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ll(i),e.set(r,[o])):s>=a.length?(o=new ll(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const bm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Am=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],wm=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],cl=new Et,Ji=new q,Us=new q;function Cm(i,e,t){let n=new Ga;const r=new rt,s=new rt,a=new Rt,o=new Uu,l=new Nu,c={},h=t.maxTextureSize,f={[Un]:Zt,[Zt]:Un,[_n]:_n},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:bm,fragmentShader:Tm}),_=d.clone();_.defines.HORIZONTAL_PASS=1;const x=new bn;x.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new rn(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nr;let u=this.type;this.render=function(E,w,m){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===lc&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Nr);const S=i.getRenderTarget(),D=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Ln),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=u!==this.type;B&&w.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(U=>U.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,U=E.length;G<U;G++){const k=E[G],I=k.shadow;if(I===void 0){Ve("WebGLShadowMap:",k,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const W=I.getFrameExtents();r.multiply(W),s.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/W.x),r.x=s.x*W.x,I.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/W.y),r.y=s.y*W.y,I.mapSize.y=s.y));const ne=i.state.buffers.depth.getReversed();if(I.camera._reversedDepth=ne,I.map===null||B===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Qi){if(k.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Sn(r.x,r.y,{format:ui,type:Nn,minFilter:kt,magFilter:kt,generateMipmaps:!1}),I.map.texture.name=k.name+".shadowMap",I.map.depthTexture=new zi(r.x,r.y,dn),I.map.depthTexture.name=k.name+".shadowMapDepth",I.map.depthTexture.format=Fn,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Nt,I.map.depthTexture.magFilter=Nt}else k.isPointLight?(I.map=new kl(r.x),I.map.depthTexture=new wu(r.x,yn)):(I.map=new Sn(r.x,r.y),I.map.depthTexture=new zi(r.x,r.y,yn)),I.map.depthTexture.name=k.name+".shadowMap",I.map.depthTexture.format=Fn,this.type===Nr?(I.map.depthTexture.compareFunction=ne?Oa:Fa,I.map.depthTexture.minFilter=kt,I.map.depthTexture.magFilter=kt):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Nt,I.map.depthTexture.magFilter=Nt);I.camera.updateProjectionMatrix()}const oe=I.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<oe;se++){if(I.map.isWebGLCubeRenderTarget)i.setRenderTarget(I.map,se),i.clear();else{se===0&&(i.setRenderTarget(I.map),i.clear());const de=I.getViewport(se);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),N.viewport(a)}if(k.isPointLight){const de=I.camera,We=I.matrix,Je=k.distance||de.far;Je!==de.far&&(de.far=Je,de.updateProjectionMatrix()),Ji.setFromMatrixPosition(k.matrixWorld),de.position.copy(Ji),Us.copy(de.position),Us.add(Am[se]),de.up.copy(wm[se]),de.lookAt(Us),de.updateMatrixWorld(),We.makeTranslation(-Ji.x,-Ji.y,-Ji.z),cl.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),I._frustum.setFromProjectionMatrix(cl,de.coordinateSystem,de.reversedDepth)}else I.updateMatrices(k);n=I.getFrustum(),v(w,m,I.camera,k,this.type)}I.isPointLightShadow!==!0&&this.type===Qi&&b(I,m),I.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(S,D,L)};function b(E,w){const m=e.update(A);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,_.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Sn(r.x,r.y,{format:ui,type:Nn})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,m,d,A,null),_.uniforms.shadow_pass.value=E.mapPass.texture,_.uniforms.resolution.value=E.mapSize,_.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,m,_,A,null)}function R(E,w,m,S){let D=null;const L=m.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)D=L;else if(D=m.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const N=D.uuid,B=w.uuid;let G=c[N];G===void 0&&(G={},c[N]=G);let U=G[B];U===void 0&&(U=D.clone(),G[B]=U,w.addEventListener("dispose",T)),D=U}if(D.visible=w.visible,D.wireframe=w.wireframe,S===Qi?D.side=w.shadowSide!==null?w.shadowSide:w.side:D.side=w.shadowSide!==null?w.shadowSide:f[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,D.map=w.map,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,m.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const N=i.properties.get(D);N.light=m}return D}function v(E,w,m,S,D){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Qi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,E.matrixWorld);const B=e.update(E),G=E.material;if(Array.isArray(G)){const U=B.groups;for(let k=0,I=U.length;k<I;k++){const W=U[k],ne=G[W.materialIndex];if(ne&&ne.visible){const oe=R(E,ne,S,D);E.onBeforeShadow(i,E,w,m,B,oe,W),i.renderBufferDirect(m,null,B,oe,E,W),E.onAfterShadow(i,E,w,m,B,oe,W)}}}else if(G.visible){const U=R(E,G,S,D);E.onBeforeShadow(i,E,w,m,B,U,null),i.renderBufferDirect(m,null,B,U,E,null),E.onAfterShadow(i,E,w,m,B,U,null)}}const N=E.children;for(let B=0,G=N.length;B<G;B++)v(N[B],w,m,S,D)}function T(E){E.target.removeEventListener("dispose",T);for(const m in c){const S=c[m],D=E.target.uuid;D in S&&(S[D].dispose(),delete S[D])}}}function Rm(i,e){function t(){let O=!1;const pe=new Rt;let re=null;const me=new Rt(0,0,0,0);return{setMask:function(M){re!==M&&!O&&(i.colorMask(M,M,M,M),re=M)},setLocked:function(M){O=M},setClear:function(M,C,X,Z,ce){ce===!0&&(M*=Z,C*=Z,X*=Z),pe.set(M,C,X,Z),me.equals(pe)===!1&&(i.clearColor(M,C,X,Z),me.copy(pe))},reset:function(){O=!1,re=null,me.set(-1,0,0,0)}}}function n(){let O=!1,pe=!1,re=null,me=null,M=null;return{setReversed:function(C){if(pe!==C){const X=e.get("EXT_clip_control");C?X.clipControlEXT(X.LOWER_LEFT_EXT,X.ZERO_TO_ONE_EXT):X.clipControlEXT(X.LOWER_LEFT_EXT,X.NEGATIVE_ONE_TO_ONE_EXT),pe=C;const Z=M;M=null,this.setClear(Z)}},getReversed:function(){return pe},setTest:function(C){C?le(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(C){re!==C&&!O&&(i.depthMask(C),re=C)},setFunc:function(C){if(pe&&(C=kc[C]),me!==C){switch(C){case Hs:i.depthFunc(i.NEVER);break;case ks:i.depthFunc(i.ALWAYS);break;case Gs:i.depthFunc(i.LESS);break;case Oi:i.depthFunc(i.LEQUAL);break;case Vs:i.depthFunc(i.EQUAL);break;case Ws:i.depthFunc(i.GEQUAL);break;case Xs:i.depthFunc(i.GREATER);break;case qs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=C}},setLocked:function(C){O=C},setClear:function(C){M!==C&&(M=C,pe&&(C=1-C),i.clearDepth(C))},reset:function(){O=!1,re=null,me=null,M=null,pe=!1}}}function r(){let O=!1,pe=null,re=null,me=null,M=null,C=null,X=null,Z=null,ce=null;return{setTest:function(_e){O||(_e?le(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(_e){pe!==_e&&!O&&(i.stencilMask(_e),pe=_e)},setFunc:function(_e,Ge,Ie){(re!==_e||me!==Ge||M!==Ie)&&(i.stencilFunc(_e,Ge,Ie),re=_e,me=Ge,M=Ie)},setOp:function(_e,Ge,Ie){(C!==_e||X!==Ge||Z!==Ie)&&(i.stencilOp(_e,Ge,Ie),C=_e,X=Ge,Z=Ie)},setLocked:function(_e){O=_e},setClear:function(_e){ce!==_e&&(i.clearStencil(_e),ce=_e)},reset:function(){O=!1,pe=null,re=null,me=null,M=null,C=null,X=null,Z=null,ce=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},f={},d={},_=new WeakMap,x=[],A=null,p=!1,u=null,b=null,R=null,v=null,T=null,E=null,w=null,m=new at(0,0,0),S=0,D=!1,L=null,N=null,B=null,G=null,U=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,W=0;const ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(ne)[1]),I=W>=1):ne.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),I=W>=2);let oe=null,se={};const de=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),Je=new Rt().fromArray(de),He=new Rt().fromArray(We);function j(O,pe,re,me){const M=new Uint8Array(4),C=i.createTexture();i.bindTexture(O,C),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let X=0;X<re;X++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,M):i.texImage2D(pe+X,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,M);return C}const te={};te[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(i.DEPTH_TEST),a.setFunc(Oi),gt(!1),ft(eo),le(i.CULL_FACE),qe(Ln);function le(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function De(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function ze(O,pe){return d[O]!==pe?(i.bindFramebuffer(O,pe),d[O]=pe,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pe),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ae(O,pe){let re=x,me=!1;if(O){re=_.get(pe),re===void 0&&(re=[],_.set(pe,re));const M=O.textures;if(re.length!==M.length||re[0]!==i.COLOR_ATTACHMENT0){for(let C=0,X=M.length;C<X;C++)re[C]=i.COLOR_ATTACHMENT0+C;re.length=M.length,me=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,me=!0);me&&i.drawBuffers(re)}function ut(O){return A!==O?(i.useProgram(O),A=O,!0):!1}const Xe={[si]:i.FUNC_ADD,[uc]:i.FUNC_SUBTRACT,[fc]:i.FUNC_REVERSE_SUBTRACT};Xe[dc]=i.MIN,Xe[hc]=i.MAX;const je={[pc]:i.ZERO,[mc]:i.ONE,[gc]:i.SRC_COLOR,[Bs]:i.SRC_ALPHA,[yc]:i.SRC_ALPHA_SATURATE,[Mc]:i.DST_COLOR,[vc]:i.DST_ALPHA,[_c]:i.ONE_MINUS_SRC_COLOR,[zs]:i.ONE_MINUS_SRC_ALPHA,[Sc]:i.ONE_MINUS_DST_COLOR,[xc]:i.ONE_MINUS_DST_ALPHA,[Ec]:i.CONSTANT_COLOR,[bc]:i.ONE_MINUS_CONSTANT_COLOR,[Tc]:i.CONSTANT_ALPHA,[Ac]:i.ONE_MINUS_CONSTANT_ALPHA};function qe(O,pe,re,me,M,C,X,Z,ce,_e){if(O===Ln){p===!0&&(De(i.BLEND),p=!1);return}if(p===!1&&(le(i.BLEND),p=!0),O!==cc){if(O!==u||_e!==D){if((b!==si||T!==si)&&(i.blendEquation(i.FUNC_ADD),b=si,T=si),_e)switch(O){case Ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case to:i.blendFunc(i.ONE,i.ONE);break;case no:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case io:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ct("WebGLState: Invalid blending: ",O);break}else switch(O){case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case to:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case no:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case io:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",O);break}R=null,v=null,E=null,w=null,m.set(0,0,0),S=0,u=O,D=_e}return}M=M||pe,C=C||re,X=X||me,(pe!==b||M!==T)&&(i.blendEquationSeparate(Xe[pe],Xe[M]),b=pe,T=M),(re!==R||me!==v||C!==E||X!==w)&&(i.blendFuncSeparate(je[re],je[me],je[C],je[X]),R=re,v=me,E=C,w=X),(Z.equals(m)===!1||ce!==S)&&(i.blendColor(Z.r,Z.g,Z.b,ce),m.copy(Z),S=ce),u=O,D=!1}function Ye(O,pe){O.side===_n?De(i.CULL_FACE):le(i.CULL_FACE);let re=O.side===Zt;pe&&(re=!re),gt(re),O.blending===Ui&&O.transparent===!1?qe(Ln):qe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const me=O.stencilWrite;o.setTest(me),me&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),vt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(O){L!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),L=O)}function ft(O){O!==ac?(le(i.CULL_FACE),O!==N&&(O===eo?i.cullFace(i.BACK):O===oc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),N=O}function At(O){O!==B&&(I&&i.lineWidth(O),B=O)}function vt(O,pe,re){O?(le(i.POLYGON_OFFSET_FILL),(G!==pe||U!==re)&&(G=pe,U=re,a.getReversed()&&(pe=-pe),i.polygonOffset(pe,re))):De(i.POLYGON_OFFSET_FILL)}function st(O){O?le(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function dt(O){O===void 0&&(O=i.TEXTURE0+k-1),oe!==O&&(i.activeTexture(O),oe=O)}function z(O,pe,re){re===void 0&&(oe===null?re=i.TEXTURE0+k-1:re=oe);let me=se[re];me===void 0&&(me={type:void 0,texture:void 0},se[re]=me),(me.type!==O||me.texture!==pe)&&(oe!==re&&(i.activeTexture(re),oe=re),i.bindTexture(O,pe||te[O]),me.type=O,me.texture=pe)}function Lt(){const O=se[oe];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Qe(){try{i.compressedTexImage2D(...arguments)}catch(O){ct("WebGLState:",O)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(O){ct("WebGLState:",O)}}function g(){try{i.texSubImage2D(...arguments)}catch(O){ct("WebGLState:",O)}}function V(){try{i.texSubImage3D(...arguments)}catch(O){ct("WebGLState:",O)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(O){ct("WebGLState:",O)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(O){ct("WebGLState:",O)}}function ue(){try{i.texStorage2D(...arguments)}catch(O){ct("WebGLState:",O)}}function he(){try{i.texStorage3D(...arguments)}catch(O){ct("WebGLState:",O)}}function ee(){try{i.texImage2D(...arguments)}catch(O){ct("WebGLState:",O)}}function ie(){try{i.texImage3D(...arguments)}catch(O){ct("WebGLState:",O)}}function ge(O){return f[O]!==void 0?f[O]:i.getParameter(O)}function Re(O,pe){f[O]!==pe&&(i.pixelStorei(O,pe),f[O]=pe)}function xe(O){Je.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Je.copy(O))}function fe(O){He.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),He.copy(O))}function Le(O,pe){let re=c.get(pe);re===void 0&&(re=new WeakMap,c.set(pe,re));let me=re.get(O);me===void 0&&(me=i.getUniformBlockIndex(pe,O.name),re.set(O,me))}function Fe(O,pe){const me=c.get(pe).get(O);l.get(pe)!==me&&(i.uniformBlockBinding(pe,me,O.__bindingPointIndex),l.set(pe,me))}function ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},oe=null,se={},d={},_=new WeakMap,x=[],A=null,p=!1,u=null,b=null,R=null,v=null,T=null,E=null,w=null,m=new at(0,0,0),S=0,D=!1,L=null,N=null,B=null,G=null,U=null,Je.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:De,bindFramebuffer:ze,drawBuffers:Ae,useProgram:ut,setBlending:qe,setMaterial:Ye,setFlipSided:gt,setCullFace:ft,setLineWidth:At,setPolygonOffset:vt,setScissorTest:st,activeTexture:dt,bindTexture:z,unbindTexture:Lt,compressedTexImage2D:Qe,compressedTexImage3D:P,texImage2D:ee,texImage3D:ie,pixelStorei:Re,getParameter:ge,updateUBOMapping:Le,uniformBlockBinding:Fe,texStorage2D:ue,texStorage3D:he,texSubImage2D:g,texSubImage3D:V,compressedTexSubImage2D:Y,compressedTexSubImage3D:Q,scissor:xe,viewport:fe,reset:ke}}function Pm(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,f=new Set;let d;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(P,g){return x?new OffscreenCanvas(P,g):ar("canvas")}function p(P,g,V){let Y=1;const Q=Qe(P);if((Q.width>V||Q.height>V)&&(Y=V/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(Y*Q.width),he=Math.floor(Y*Q.height);d===void 0&&(d=A(ue,he));const ee=g?A(ue,he):d;return ee.width=ue,ee.height=he,ee.getContext("2d").drawImage(P,0,0,ue,he),Ve("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ue+"x"+he+")."),ee}else return"data"in P&&Ve("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function u(P){return P.generateMipmaps}function b(P){i.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,g,V,Y,Q,ue=!1){if(P!==null){if(i[P]!==void 0)return i[P];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let he;Y&&(he=e.get("EXT_texture_norm16"),he||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=g;if(g===i.RED&&(V===i.FLOAT&&(ee=i.R32F),V===i.HALF_FLOAT&&(ee=i.R16F),V===i.UNSIGNED_BYTE&&(ee=i.R8),V===i.UNSIGNED_SHORT&&he&&(ee=he.R16_EXT),V===i.SHORT&&he&&(ee=he.R16_SNORM_EXT)),g===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.R8UI),V===i.UNSIGNED_SHORT&&(ee=i.R16UI),V===i.UNSIGNED_INT&&(ee=i.R32UI),V===i.BYTE&&(ee=i.R8I),V===i.SHORT&&(ee=i.R16I),V===i.INT&&(ee=i.R32I)),g===i.RG&&(V===i.FLOAT&&(ee=i.RG32F),V===i.HALF_FLOAT&&(ee=i.RG16F),V===i.UNSIGNED_BYTE&&(ee=i.RG8),V===i.UNSIGNED_SHORT&&he&&(ee=he.RG16_EXT),V===i.SHORT&&he&&(ee=he.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.RG8UI),V===i.UNSIGNED_SHORT&&(ee=i.RG16UI),V===i.UNSIGNED_INT&&(ee=i.RG32UI),V===i.BYTE&&(ee=i.RG8I),V===i.SHORT&&(ee=i.RG16I),V===i.INT&&(ee=i.RG32I)),g===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),V===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),V===i.UNSIGNED_INT&&(ee=i.RGB32UI),V===i.BYTE&&(ee=i.RGB8I),V===i.SHORT&&(ee=i.RGB16I),V===i.INT&&(ee=i.RGB32I)),g===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),V===i.UNSIGNED_INT&&(ee=i.RGBA32UI),V===i.BYTE&&(ee=i.RGBA8I),V===i.SHORT&&(ee=i.RGBA16I),V===i.INT&&(ee=i.RGBA32I)),g===i.RGB&&(V===i.UNSIGNED_SHORT&&he&&(ee=he.RGB16_EXT),V===i.SHORT&&he&&(ee=he.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),g===i.RGBA){const ie=ue?qr:lt.getTransfer(Q);V===i.FLOAT&&(ee=i.RGBA32F),V===i.HALF_FLOAT&&(ee=i.RGBA16F),V===i.UNSIGNED_BYTE&&(ee=ie===_t?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&he&&(ee=he.RGBA16_EXT),V===i.SHORT&&he&&(ee=he.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function T(P,g){let V;return P?g===null||g===yn||g===rr?V=i.DEPTH24_STENCIL8:g===dn?V=i.DEPTH32F_STENCIL8:g===ir&&(V=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===yn||g===rr?V=i.DEPTH_COMPONENT24:g===dn?V=i.DEPTH_COMPONENT32F:g===ir&&(V=i.DEPTH_COMPONENT16),V}function E(P,g){return u(P)===!0||P.isFramebufferTexture&&P.minFilter!==Nt&&P.minFilter!==kt?Math.log2(Math.max(g.width,g.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?g.mipmaps.length:1}function w(P){const g=P.target;g.removeEventListener("dispose",w),S(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&f.delete(g)}function m(P){const g=P.target;g.removeEventListener("dispose",m),L(g)}function S(P){const g=n.get(P);if(g.__webglInit===void 0)return;const V=P.source,Y=_.get(V);if(Y){const Q=Y[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&D(P),Object.keys(Y).length===0&&_.delete(V)}n.remove(P)}function D(P){const g=n.get(P);i.deleteTexture(g.__webglTexture);const V=P.source,Y=_.get(V);delete Y[g.__cacheKey],a.memory.textures--}function L(P){const g=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let Q=0;Q<g.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(g.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[Y]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const V=P.textures;for(let Y=0,Q=V.length;Y<Q;Y++){const ue=n.get(V[Y]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(V[Y])}n.remove(P)}let N=0;function B(){N=0}function G(){return N}function U(P){N=P}function k(){const P=N;return P>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),N+=1,P}function I(P){const g=[];return g.push(P.wrapS),g.push(P.wrapT),g.push(P.wrapR||0),g.push(P.magFilter),g.push(P.minFilter),g.push(P.anisotropy),g.push(P.internalFormat),g.push(P.format),g.push(P.type),g.push(P.generateMipmaps),g.push(P.premultiplyAlpha),g.push(P.flipY),g.push(P.unpackAlignment),g.push(P.colorSpace),g.join()}function W(P,g){const V=n.get(P);if(P.isVideoTexture&&z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){const Y=P.image;if(Y===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{De(V,P,g);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+g)}function ne(P,g){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){De(V,P,g);return}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+g)}function oe(P,g){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){De(V,P,g);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+g)}function se(P,g){const V=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&V.__version!==P.version){ze(V,P,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+g)}const de={[kr]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Gr]:i.MIRRORED_REPEAT},We={[Nt]:i.NEAREST,[Rc]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[is]:i.LINEAR_MIPMAP_NEAREST,[vn]:i.LINEAR_MIPMAP_LINEAR},Je={[Dc]:i.NEVER,[Oc]:i.ALWAYS,[Ic]:i.LESS,[Fa]:i.LEQUAL,[Uc]:i.EQUAL,[Oa]:i.GEQUAL,[Nc]:i.GREATER,[Fc]:i.NOTEQUAL};function He(P,g){if(g.type===dn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===kt||g.magFilter===is||g.magFilter===fr||g.magFilter===vn||g.minFilter===kt||g.minFilter===is||g.minFilter===fr||g.minFilter===vn)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,de[g.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,de[g.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,de[g.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,We[g.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,We[g.minFilter]),g.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Je[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Nt||g.minFilter!==fr&&g.minFilter!==vn||g.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function j(P,g){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,g.addEventListener("dispose",w));const Y=g.source;let Q=_.get(Y);Q===void 0&&(Q={},_.set(Y,Q));const ue=I(g);if(ue!==P.__cacheKey){Q[ue]===void 0&&(Q[ue]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[ue].usedTimes++;const he=Q[P.__cacheKey];he!==void 0&&(Q[P.__cacheKey].usedTimes--,he.usedTimes===0&&D(g)),P.__cacheKey=ue,P.__webglTexture=Q[ue].texture}return V}function te(P,g,V){return Math.floor(Math.floor(P/V)/g)}function le(P,g,V,Y){const ue=P.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,V,Y,g.data);else{ue.sort((Re,xe)=>Re.start-xe.start);let he=0;for(let Re=1;Re<ue.length;Re++){const xe=ue[he],fe=ue[Re],Le=xe.start+xe.count,Fe=te(fe.start,g.width,4),ke=te(xe.start,g.width,4);fe.start<=Le+1&&Fe===ke&&te(fe.start+fe.count-1,g.width,4)===Fe?xe.count=Math.max(xe.count,fe.start+fe.count-xe.start):(++he,ue[he]=fe)}ue.length=he+1;const ee=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),ge=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Re=0,xe=ue.length;Re<xe;Re++){const fe=ue[Re],Le=Math.floor(fe.start/4),Fe=Math.ceil(fe.count/4),ke=Le%g.width,O=Math.floor(Le/g.width),pe=Fe,re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,ke,O,pe,re,V,Y,g.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function De(P,g,V){let Y=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=i.TEXTURE_3D);const Q=j(P,g),ue=g.source;t.bindTexture(Y,P.__webglTexture,i.TEXTURE0+V);const he=n.get(ue);if(ue.version!==he.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const re=lt.getPrimaries(lt.workingColorSpace),me=g.colorSpace===$n?null:lt.getPrimaries(g.colorSpace),M=g.colorSpace===$n||re===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,M)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let ie=p(g.image,!1,r.maxTextureSize);ie=Lt(g,ie);const ge=s.convert(g.format,g.colorSpace),Re=s.convert(g.type);let xe=v(g.internalFormat,ge,Re,g.normalized,g.colorSpace,g.isVideoTexture);He(Y,g);let fe;const Le=g.mipmaps,Fe=g.isVideoTexture!==!0,ke=he.__version===void 0||Q===!0,O=ue.dataReady,pe=E(g,ie);if(g.isDepthTexture)xe=T(g.format===li,g.type),ke&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,xe,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,xe,ie.width,ie.height,0,ge,Re,null));else if(g.isDataTexture)if(Le.length>0){Fe&&ke&&t.texStorage2D(i.TEXTURE_2D,pe,xe,Le[0].width,Le[0].height);for(let re=0,me=Le.length;re<me;re++)fe=Le[re],Fe?O&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,fe.width,fe.height,ge,Re,fe.data):t.texImage2D(i.TEXTURE_2D,re,xe,fe.width,fe.height,0,ge,Re,fe.data);g.generateMipmaps=!1}else Fe?(ke&&t.texStorage2D(i.TEXTURE_2D,pe,xe,ie.width,ie.height),O&&le(g,ie,ge,Re)):t.texImage2D(i.TEXTURE_2D,0,xe,ie.width,ie.height,0,ge,Re,ie.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Fe&&ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,xe,Le[0].width,Le[0].height,ie.depth);for(let re=0,me=Le.length;re<me;re++)if(fe=Le[re],g.format!==qt)if(ge!==null)if(Fe){if(O)if(g.layerUpdates.size>0){const M=Ho(fe.width,fe.height,g.format,g.type);for(const C of g.layerUpdates){const X=fe.data.subarray(C*M/fe.data.BYTES_PER_ELEMENT,(C+1)*M/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,C,fe.width,fe.height,1,ge,X)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,fe.width,fe.height,ie.depth,ge,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,xe,fe.width,fe.height,ie.depth,0,fe.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,fe.width,fe.height,ie.depth,ge,Re,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,xe,fe.width,fe.height,ie.depth,0,ge,Re,fe.data)}else{Fe&&ke&&t.texStorage2D(i.TEXTURE_2D,pe,xe,Le[0].width,Le[0].height);for(let re=0,me=Le.length;re<me;re++)fe=Le[re],g.format!==qt?ge!==null?Fe?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,fe.width,fe.height,ge,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,re,xe,fe.width,fe.height,0,fe.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?O&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,fe.width,fe.height,ge,Re,fe.data):t.texImage2D(i.TEXTURE_2D,re,xe,fe.width,fe.height,0,ge,Re,fe.data)}else if(g.isDataArrayTexture)if(Fe){if(ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,xe,ie.width,ie.height,ie.depth),O)if(g.layerUpdates.size>0){const re=Ho(ie.width,ie.height,g.format,g.type);for(const me of g.layerUpdates){const M=ie.data.subarray(me*re/ie.data.BYTES_PER_ELEMENT,(me+1)*re/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,ie.width,ie.height,1,ge,Re,M)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Re,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,ie.width,ie.height,ie.depth,0,ge,Re,ie.data);else if(g.isData3DTexture)Fe?(ke&&t.texStorage3D(i.TEXTURE_3D,pe,xe,ie.width,ie.height,ie.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Re,ie.data)):t.texImage3D(i.TEXTURE_3D,0,xe,ie.width,ie.height,ie.depth,0,ge,Re,ie.data);else if(g.isFramebufferTexture){if(ke)if(Fe)t.texStorage2D(i.TEXTURE_2D,pe,xe,ie.width,ie.height);else{let re=ie.width,me=ie.height;for(let M=0;M<pe;M++)t.texImage2D(i.TEXTURE_2D,M,xe,re,me,0,ge,Re,null),re>>=1,me>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const re=i.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),ie.parentNode!==re){re.appendChild(ie),f.add(g),re.onpaint=me=>{const M=me.changedElements;for(const C of f)M.includes(C.image)&&(C.needsUpdate=!0)},re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{const M=i.RGBA,C=i.RGBA,X=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,M,C,X,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Fe&&ke){const re=Qe(Le[0]);t.texStorage2D(i.TEXTURE_2D,pe,xe,re.width,re.height)}for(let re=0,me=Le.length;re<me;re++)fe=Le[re],Fe?O&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ge,Re,fe):t.texImage2D(i.TEXTURE_2D,re,xe,ge,Re,fe);g.generateMipmaps=!1}else if(Fe){if(ke){const re=Qe(ie);t.texStorage2D(i.TEXTURE_2D,pe,xe,re.width,re.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Re,ie)}else t.texImage2D(i.TEXTURE_2D,0,xe,ge,Re,ie);u(g)&&b(Y),he.__version=ue.version,g.onUpdate&&g.onUpdate(g)}P.__version=g.version}function ze(P,g,V){if(g.image.length!==6)return;const Y=j(P,g),Q=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+V);const ue=n.get(Q);if(Q.version!==ue.__version||Y===!0){t.activeTexture(i.TEXTURE0+V);const he=lt.getPrimaries(lt.workingColorSpace),ee=g.colorSpace===$n?null:lt.getPrimaries(g.colorSpace),ie=g.colorSpace===$n||he===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const ge=g.isCompressedTexture||g.image[0].isCompressedTexture,Re=g.image[0]&&g.image[0].isDataTexture,xe=[];for(let C=0;C<6;C++)!ge&&!Re?xe[C]=p(g.image[C],!0,r.maxCubemapSize):xe[C]=Re?g.image[C].image:g.image[C],xe[C]=Lt(g,xe[C]);const fe=xe[0],Le=s.convert(g.format,g.colorSpace),Fe=s.convert(g.type),ke=v(g.internalFormat,Le,Fe,g.normalized,g.colorSpace),O=g.isVideoTexture!==!0,pe=ue.__version===void 0||Y===!0,re=Q.dataReady;let me=E(g,fe);He(i.TEXTURE_CUBE_MAP,g);let M;if(ge){O&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,ke,fe.width,fe.height);for(let C=0;C<6;C++){M=xe[C].mipmaps;for(let X=0;X<M.length;X++){const Z=M[X];g.format!==qt?Le!==null?O?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,X,0,0,Z.width,Z.height,Le,Z.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,X,ke,Z.width,Z.height,0,Z.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,X,0,0,Z.width,Z.height,Le,Fe,Z.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,X,ke,Z.width,Z.height,0,Le,Fe,Z.data)}}}else{if(M=g.mipmaps,O&&pe){M.length>0&&me++;const C=Qe(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,ke,C.width,C.height)}for(let C=0;C<6;C++)if(Re){O?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,xe[C].width,xe[C].height,Le,Fe,xe[C].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,ke,xe[C].width,xe[C].height,0,Le,Fe,xe[C].data);for(let X=0;X<M.length;X++){const ce=M[X].image[C].image;O?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,X+1,0,0,ce.width,ce.height,Le,Fe,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,X+1,ke,ce.width,ce.height,0,Le,Fe,ce.data)}}else{O?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,Le,Fe,xe[C]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,ke,Le,Fe,xe[C]);for(let X=0;X<M.length;X++){const Z=M[X];O?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,X+1,0,0,Le,Fe,Z.image[C]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,X+1,ke,Le,Fe,Z.image[C])}}}u(g)&&b(i.TEXTURE_CUBE_MAP),ue.__version=Q.version,g.onUpdate&&g.onUpdate(g)}P.__version=g.version}function Ae(P,g,V,Y,Q,ue){const he=s.convert(V.format,V.colorSpace),ee=s.convert(V.type),ie=v(V.internalFormat,he,ee,V.normalized,V.colorSpace),ge=n.get(g),Re=n.get(V);if(Re.__renderTarget=g,!ge.__hasExternalTextures){const xe=Math.max(1,g.width>>ue),fe=Math.max(1,g.height>>ue);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,ue,ie,xe,fe,g.depth,0,he,ee,null):t.texImage2D(Q,ue,ie,xe,fe,0,he,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),dt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,Re.__webglTexture,0,st(g)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,Re.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(P,g,V){if(i.bindRenderbuffer(i.RENDERBUFFER,P),g.depthBuffer){const Y=g.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,ue=T(g.stencilBuffer,Q),he=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;dt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(g),ue,g.width,g.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(g),ue,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ue,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,P)}else{const Y=g.textures;for(let Q=0;Q<Y.length;Q++){const ue=Y[Q],he=s.convert(ue.format,ue.colorSpace),ee=s.convert(ue.type),ie=v(ue.internalFormat,he,ee,ue.normalized,ue.colorSpace);dt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(g),ie,g.width,g.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(g),ie,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ie,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Xe(P,g,V){const Y=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(g.depthTexture);if(Q.__renderTarget=g,(!Q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),He(i.TEXTURE_CUBE_MAP,g.depthTexture);const ge=s.convert(g.depthTexture.format),Re=s.convert(g.depthTexture.type);let xe;g.depthTexture.format===Fn?xe=i.DEPTH_COMPONENT24:g.depthTexture.format===li&&(xe=i.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,xe,g.width,g.height,0,ge,Re,null)}}else W(g.depthTexture,0);const ue=Q.__webglTexture,he=st(g),ee=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,ie=g.depthTexture.format===li?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Fn)dt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ee,ue,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,ie,ee,ue,0);else if(g.depthTexture.format===li)dt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ee,ue,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,ie,ee,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(P){const g=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==P.depthTexture){const Y=P.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){const Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=Y}if(P.depthTexture&&!g.__autoAllocateDepthBuffer)if(V)for(let Y=0;Y<6;Y++)Xe(g.__webglFramebuffer[Y],P,Y);else{const Y=P.texture.mipmaps;Y&&Y.length>0?Xe(g.__webglFramebuffer[0],P,0):Xe(g.__webglFramebuffer,P,0)}else if(V){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=i.createRenderbuffer(),ut(g.__webglDepthbuffer[Y],P,!1);else{const Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=g.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ue)}}else{const Y=P.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),ut(g.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ue)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(P,g,V){const Y=n.get(P);g!==void 0&&Ae(Y.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&je(P)}function Ye(P){const g=P.texture,V=n.get(P),Y=n.get(g);P.addEventListener("dispose",m);const Q=P.textures,ue=P.isWebGLCubeRenderTarget===!0,he=Q.length>1;if(he||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=g.version,a.memory.textures++),ue){V.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer[ee]=[];for(let ie=0;ie<g.mipmaps.length;ie++)V.__webglFramebuffer[ee][ie]=i.createFramebuffer()}else V.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer=[];for(let ee=0;ee<g.mipmaps.length;ee++)V.__webglFramebuffer[ee]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(he)for(let ee=0,ie=Q.length;ee<ie;ee++){const ge=n.get(Q[ee]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&dt(P)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){const ie=Q[ee];V.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ee]);const ge=s.convert(ie.format,ie.colorSpace),Re=s.convert(ie.type),xe=v(ie.internalFormat,ge,Re,ie.normalized,ie.colorSpace,P.isXRRenderTarget===!0),fe=st(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,xe,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,V.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),He(i.TEXTURE_CUBE_MAP,g);for(let ee=0;ee<6;ee++)if(g.mipmaps&&g.mipmaps.length>0)for(let ie=0;ie<g.mipmaps.length;ie++)Ae(V.__webglFramebuffer[ee][ie],P,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ie);else Ae(V.__webglFramebuffer[ee],P,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);u(g)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let ee=0,ie=Q.length;ee<ie;ee++){const ge=Q[ee],Re=n.get(ge);let xe=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,Re.__webglTexture),He(xe,ge),Ae(V.__webglFramebuffer,P,ge,i.COLOR_ATTACHMENT0+ee,xe,0),u(ge)&&b(xe)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ee=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,Y.__webglTexture),He(ee,g),g.mipmaps&&g.mipmaps.length>0)for(let ie=0;ie<g.mipmaps.length;ie++)Ae(V.__webglFramebuffer[ie],P,g,i.COLOR_ATTACHMENT0,ee,ie);else Ae(V.__webglFramebuffer,P,g,i.COLOR_ATTACHMENT0,ee,0);u(g)&&b(ee),t.unbindTexture()}P.depthBuffer&&je(P)}function gt(P){const g=P.textures;for(let V=0,Y=g.length;V<Y;V++){const Q=g[V];if(u(Q)){const ue=R(P),he=n.get(Q).__webglTexture;t.bindTexture(ue,he),b(ue),t.unbindTexture()}}}const ft=[],At=[];function vt(P){if(P.samples>0){if(dt(P)===!1){const g=P.textures,V=P.width,Y=P.height;let Q=i.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(P),ee=g.length>1;if(ee)for(let ge=0;ge<g.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const ie=P.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ge=0;ge<g.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[ge]);const Re=n.get(g[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Re,0)}i.blitFramebuffer(0,0,V,Y,0,0,V,Y,Q,i.NEAREST),l===!0&&(ft.length=0,At.length=0,ft.push(i.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ft.push(ue),At.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,At)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let ge=0;ge<g.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,he.__webglColorRenderbuffer[ge]);const Re=n.get(g[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const g=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function st(P){return Math.min(r.maxSamples,P.samples)}function dt(P){const g=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function z(P){const g=a.render.frame;h.get(P)!==g&&(h.set(P,g),P.update())}function Lt(P,g){const V=P.colorSpace,Y=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Xr&&V!==$n&&(lt.getTransfer(V)===_t?(Y!==qt||Q!==nn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",V)),g}function Qe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.getTextureUnits=G,this.setTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=ne,this.setTexture3D=oe,this.setTextureCube=se,this.rebindTextures=qe,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Lm(i,e){function t(n,r=$n){let s;const a=lt.getTransfer(r);if(n===nn)return i.UNSIGNED_BYTE;if(n===Pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===La)return i.UNSIGNED_SHORT_5_5_5_1;if(n===El)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sl)return i.BYTE;if(n===yl)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===Ra)return i.INT;if(n===yn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===Nn)return i.HALF_FLOAT;if(n===Tl)return i.ALPHA;if(n===Al)return i.RGB;if(n===qt)return i.RGBA;if(n===Fn)return i.DEPTH_COMPONENT;if(n===li)return i.DEPTH_STENCIL;if(n===Da)return i.RED;if(n===Ia)return i.RED_INTEGER;if(n===ui)return i.RG;if(n===Ua)return i.RG_INTEGER;if(n===Na)return i.RGBA_INTEGER;if(n===Fr||n===Or||n===Br||n===zr)if(a===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Fr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Fr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ys||n===$s||n===Ks||n===Zs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ys)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$s)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ks)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Js||n===Qs||n===js||n===ea||n===ta||n===Vr||n===na)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Js||n===Qs)return a===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===js)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ea)return s.COMPRESSED_R11_EAC;if(n===ta)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Vr)return s.COMPRESSED_RG11_EAC;if(n===na)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ia||n===ra||n===sa||n===aa||n===oa||n===la||n===ca||n===ua||n===fa||n===da||n===ha||n===pa||n===ma||n===ga)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ia)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ra)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sa)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===aa)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oa)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===la)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ca)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ua)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fa)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ha)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pa)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ma)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ga)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_a||n===va||n===xa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===_a)return a===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===va)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ma||n===Sa||n===Wr||n===ya)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ma)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Sa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ya)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Dm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Im=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Um{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ul(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new En({vertexShader:Dm,fragmentShader:Im,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rn(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nm extends fi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,_=null,x=null;const A=typeof XRWebGLBinding<"u",p=new Um,u={},b=t.getContextAttributes();let R=null,v=null;const T=[],E=[],w=new rt;let m=null;const S=new on;S.viewport=new Rt;const D=new on;D.viewport=new Rt;const L=[S,D],N=new Wu;let B=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=T[j];return te===void 0&&(te=new us,T[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=T[j];return te===void 0&&(te=new us,T[j]=te),te.getGripSpace()},this.getHand=function(j){let te=T[j];return te===void 0&&(te=new us,T[j]=te),te.getHandSpace()};function U(j){const te=E.indexOf(j.inputSource);if(te===-1)return;const le=T[te];le!==void 0&&(le.update(j.inputSource,j.frame,c||a),le.dispatchEvent({type:j.type,data:j.inputSource}))}function k(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",I);for(let j=0;j<T.length;j++){const te=E[j];te!==null&&(E[j]=null,T[j].disconnect(te))}B=null,G=null,p.reset();for(const j in u)delete u[j];e.setRenderTarget(R),_=null,d=null,f=null,r=null,v=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(m),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:_},this.getBinding=function(){return f===null&&A&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",k),r.addEventListener("inputsourceschange",I),b.xrCompatible!==!0&&await t.makeXRCompatible(),m=e.getPixelRatio(),e.getSize(w),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,De=null,ze=null;b.depth&&(ze=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=b.stencil?li:Fn,De=b.stencil?rr:yn);const Ae={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Sn(d.textureWidth,d.textureHeight,{format:qt,type:nn,depthTexture:new zi(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),v=new Sn(_.framebufferWidth,_.framebufferHeight,{format:qt,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),He.setContext(r),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function I(j){for(let te=0;te<j.removed.length;te++){const le=j.removed[te],De=E.indexOf(le);De>=0&&(E[De]=null,T[De].disconnect(le))}for(let te=0;te<j.added.length;te++){const le=j.added[te];let De=E.indexOf(le);if(De===-1){for(let Ae=0;Ae<T.length;Ae++)if(Ae>=E.length){E.push(le),De=Ae;break}else if(E[Ae]===null){E[Ae]=le,De=Ae;break}if(De===-1)break}const ze=T[De];ze&&ze.connect(le)}}const W=new q,ne=new q;function oe(j,te,le){W.setFromMatrixPosition(te.matrixWorld),ne.setFromMatrixPosition(le.matrixWorld);const De=W.distanceTo(ne),ze=te.projectionMatrix.elements,Ae=le.projectionMatrix.elements,ut=ze[14]/(ze[10]-1),Xe=ze[14]/(ze[10]+1),je=(ze[9]+1)/ze[5],qe=(ze[9]-1)/ze[5],Ye=(ze[8]-1)/ze[0],gt=(Ae[8]+1)/Ae[0],ft=ut*Ye,At=ut*gt,vt=De/(-Ye+gt),st=vt*-Ye;if(te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(st),j.translateZ(vt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ze[10]===-1)j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const dt=ut+vt,z=Xe+vt,Lt=ft-st,Qe=At+(De-st),P=je*Xe/z*dt,g=qe*Xe/z*dt;j.projectionMatrix.makePerspective(Lt,Qe,P,g,dt,z),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function se(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let te=j.near,le=j.far;p.texture!==null&&(p.depthNear>0&&(te=p.depthNear),p.depthFar>0&&(le=p.depthFar)),N.near=D.near=S.near=te,N.far=D.far=S.far=le,(B!==N.near||G!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),B=N.near,G=N.far),N.layers.mask=j.layers.mask|6,S.layers.mask=N.layers.mask&-5,D.layers.mask=N.layers.mask&-3;const De=j.parent,ze=N.cameras;se(N,De);for(let Ae=0;Ae<ze.length;Ae++)se(ze[Ae],De);ze.length===2?oe(N,S,D):N.projectionMatrix.copy(S.projectionMatrix),de(j,N,De)};function de(j,te,le){le===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(le.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=or*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&_===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(j){return u[j]};let We=null;function Je(j,te){if(h=te.getViewerPose(c||a),x=te,h!==null){const le=h.views;_!==null&&(e.setRenderTargetFramebuffer(v,_.framebuffer),e.setRenderTarget(v));let De=!1;le.length!==N.cameras.length&&(N.cameras.length=0,De=!0);for(let Xe=0;Xe<le.length;Xe++){const je=le[Xe];let qe=null;if(_!==null)qe=_.getViewport(je);else{const gt=f.getViewSubImage(d,je);qe=gt.viewport,Xe===0&&(e.setRenderTargetTextures(v,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(v))}let Ye=L[Xe];Ye===void 0&&(Ye=new on,Ye.layers.enable(Xe),Ye.viewport=new Rt,L[Xe]=Ye),Ye.matrix.fromArray(je.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(je.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(qe.x,qe.y,qe.width,qe.height),Xe===0&&(N.matrix.copy(Ye.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),De===!0&&N.cameras.push(Ye)}const ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&A){f=n.getBinding();const Xe=f.getDepthInformation(le[0]);Xe&&Xe.isValid&&Xe.texture&&p.init(Xe,r.renderState)}if(ze&&ze.includes("camera-access")&&A){e.state.unbindTexture(),f=n.getBinding();for(let Xe=0;Xe<le.length;Xe++){const je=le[Xe].camera;if(je){let qe=u[je];qe||(qe=new Ul,u[je]=qe);const Ye=f.getCameraImage(je);qe.sourceTexture=Ye}}}}for(let le=0;le<T.length;le++){const De=E[le],ze=T[le];De!==null&&ze!==void 0&&ze.update(De,te,c||a)}We&&We(j,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),x=null}const He=new zl;He.setAnimationLoop(Je),this.setAnimationLoop=function(j){We=j},this.dispose=function(){}}}const Fm=new Et,ql=new Ke;ql.set(-1,0,0,0,1,0,0,0,1);function Om(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Nl(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,b,R,v){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(p,u):u.isMeshLambertMaterial?(s(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&_(p,u,v)):u.isMeshMatcapMaterial?(s(p,u),x(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),A(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,b,R):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Zt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Zt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=e.get(u),R=b.envMap,v=b.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(Fm.makeRotationFromEuler(v)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ql),p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,b,R){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=R*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function _(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Zt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function A(p,u){const b=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Bm(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){const E=T.program;n.uniformBlockBinding(v,E)}function c(v,T){let E=r[v.id];E===void 0&&(p(v),E=h(v),r[v.id]=E,v.addEventListener("dispose",b));const w=T.program;n.updateUBOMapping(v,w);const m=e.render.frame;s[v.id]!==m&&(d(v),s[v.id]=m)}function h(v){const T=f();v.__bindingPointIndex=T;const E=i.createBuffer(),w=v.__size,m=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,w,m),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const T=r[v.id],E=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let m=0,S=E.length;m<S;m++){const D=E[m];if(Array.isArray(D))for(let L=0,N=D.length;L<N;L++)_(D[L],m,L,w);else _(D,m,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(v,T,E,w){if(A(v,T,E,w)===!0){const m=v.__offset,S=v.value;if(Array.isArray(S)){let D=0;for(let L=0;L<S.length;L++){const N=S[L],B=u(N);x(N,v.__data,D),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(D+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(S,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,m,v.__data)}}function x(v,T,E){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,E)}function A(v,T,E,w){const m=v.value,S=T+"_"+E;if(w[S]===void 0)return typeof m=="number"||typeof m=="boolean"?w[S]=m:ArrayBuffer.isView(m)?w[S]=m.slice():w[S]=m.clone(),!0;{const D=w[S];if(typeof m=="number"||typeof m=="boolean"){if(D!==m)return w[S]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(D.equals(m)===!1)return D.copy(m),!0}}return!1}function p(v){const T=v.uniforms;let E=0;const w=16;for(let S=0,D=T.length;S<D;S++){const L=Array.isArray(T[S])?T[S]:[T[S]];for(let N=0,B=L.length;N<B;N++){const G=L[N],U=Array.isArray(G.value)?G.value:[G.value];for(let k=0,I=U.length;k<I;k++){const W=U[k],ne=u(W),oe=E%w,se=oe%ne.boundary,de=oe+se;E+=se,de!==0&&w-de<ne.storage&&(E+=w-de),G.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=ne.storage}}}const m=E%w;return m>0&&(E+=w-m),v.__size=E,v.__cache={},this}function u(v){const T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",v),T}function b(v){const T=v.target;T.removeEventListener("dispose",b);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function R(){for(const v in r)i.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:R}}const zm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mn=null;function Hm(){return mn===null&&(mn=new ai(zm,16,16,ui,Nn),mn.name="DFG_LUT",mn.minFilter=kt,mn.magFilter=kt,mn.wrapS=Pn,mn.wrapT=Pn,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class km{constructor(e={}){const{canvas:t=zc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:_=nn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const A=_,p=new Set([Na,Ua,Ia]),u=new Set([nn,yn,ir,rr,Pa,La]),b=new Uint32Array(4),R=new Int32Array(4),v=new q;let T=null,E=null;const w=[],m=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let L=!1,N=null,B=null,G=null,U=null;this._outputColorSpace=Kt;let k=0,I=0,W=null,ne=-1,oe=null;const se=new Rt,de=new Rt;let We=null;const Je=new at(0);let He=0,j=t.width,te=t.height,le=1,De=null,ze=null;const Ae=new Rt(0,0,j,te),ut=new Rt(0,0,j,te);let Xe=!1;const je=new Ga;let qe=!1,Ye=!1;const gt=new Et,ft=new q,At=new Rt,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function dt(){return W===null?le:1}let z=n;function Lt(y,H){return t.getContext(y,H)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wa}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",Ge,!1),z===null){const H="webgl2";if(z=Lt(H,y),z===null)throw Lt(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw ct("WebGLRenderer: "+y.message),y}let Qe,P,g,V,Y,Q,ue,he,ee,ie,ge,Re,xe,fe,Le,Fe,ke,O,pe,re,me,M,C;function X(){Qe=new Hh(z),Qe.init(),me=new Lm(z,Qe),P=new Dh(z,Qe,e,me),g=new Rm(z,Qe),P.reversedDepthBuffer&&d&&g.buffers.depth.setReversed(!0),B=z.createFramebuffer(),G=z.createFramebuffer(),U=z.createFramebuffer(),V=new Vh(z),Y=new mm,Q=new Pm(z,Qe,g,Y,P,me,V),ue=new zh(D),he=new qu(z),M=new Ph(z,he),ee=new kh(z,he,V,M),ie=new Xh(z,ee,he,M,V),O=new Wh(z,P,Q),Le=new Ih(Y),ge=new pm(D,ue,Qe,P,M,Le),Re=new Om(D,Y),xe=new _m,fe=new Em(Qe),ke=new Rh(D,ue,g,ie,x,l),Fe=new Cm(D,ie,P),C=new Bm(z,V,P,g),pe=new Lh(z,Qe,V),re=new Gh(z,Qe,V),V.programs=ge.programs,D.capabilities=P,D.extensions=Qe,D.properties=Y,D.renderLists=xe,D.shadowMap=Fe,D.state=g,D.info=V}X(),A!==nn&&(S=new Yh(A,t.width,t.height,o,r,s));const Z=new Nm(D,z);this.xr=Z,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const y=Qe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Qe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(y){y!==void 0&&(le=y,this.setSize(j,te,!1))},this.getSize=function(y){return y.set(j,te)},this.setSize=function(y,H,J=!0){if(Z.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}j=y,te=H,t.width=Math.floor(y*le),t.height=Math.floor(H*le),J===!0&&(t.style.width=y+"px",t.style.height=H+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,y,H)},this.getDrawingBufferSize=function(y){return y.set(j*le,te*le).floor()},this.setDrawingBufferSize=function(y,H,J){j=y,te=H,le=J,t.width=Math.floor(y*J),t.height=Math.floor(H*J),this.setViewport(0,0,y,H)},this.setEffects=function(y){if(A===nn){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let H=0;H<y.length;H++)if(y[H].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(se)},this.getViewport=function(y){return y.copy(Ae)},this.setViewport=function(y,H,J,$){y.isVector4?Ae.set(y.x,y.y,y.z,y.w):Ae.set(y,H,J,$),g.viewport(se.copy(Ae).multiplyScalar(le).round())},this.getScissor=function(y){return y.copy(ut)},this.setScissor=function(y,H,J,$){y.isVector4?ut.set(y.x,y.y,y.z,y.w):ut.set(y,H,J,$),g.scissor(de.copy(ut).multiplyScalar(le).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(y){g.setScissorTest(Xe=y)},this.setOpaqueSort=function(y){De=y},this.setTransparentSort=function(y){ze=y},this.getClearColor=function(y){return y.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(y=!0,H=!0,J=!0){let $=0;if(y){let K=!1;if(W!==null){const Ee=W.texture.format;K=p.has(Ee)}if(K){const Ee=W.texture.type,Te=u.has(Ee),Se=ke.getClearColor(),Pe=ke.getClearAlpha(),Ne=Se.r,Ze=Se.g,nt=Se.b;Te?(b[0]=Ne,b[1]=Ze,b[2]=nt,b[3]=Pe,z.clearBufferuiv(z.COLOR,0,b)):(R[0]=Ne,R[1]=Ze,R[2]=nt,R[3]=Pe,z.clearBufferiv(z.COLOR,0,R))}else $|=z.COLOR_BUFFER_BIT}H&&($|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&($|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&z.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),N=y},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",Ge,!1),ke.dispose(),xe.dispose(),fe.dispose(),Y.dispose(),ue.dispose(),ie.dispose(),M.dispose(),C.dispose(),ge.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",bt),Z.removeEventListener("sessionend",wt),mt.stop()};function ce(y){y.preventDefault(),lo("WebGLRenderer: Context Lost."),L=!0}function _e(){lo("WebGLRenderer: Context Restored."),L=!1;const y=V.autoReset,H=Fe.enabled,J=Fe.autoUpdate,$=Fe.needsUpdate,K=Fe.type;X(),V.autoReset=y,Fe.enabled=H,Fe.autoUpdate=J,Fe.needsUpdate=$,Fe.type=K}function Ge(y){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ie(y){const H=y.target;H.removeEventListener("dispose",Ie),it(H)}function it(y){xt(y),Y.remove(y)}function xt(y){const H=Y.get(y).programs;H!==void 0&&(H.forEach(function(J){ge.releaseProgram(J)}),y.isShaderMaterial&&ge.releaseShaderCache(y))}this.renderBufferDirect=function(y,H,J,$,K,Ee){H===null&&(H=vt);const Te=K.isMesh&&K.matrixWorld.determinantAffine()<0,Se=Yl(y,H,J,$,K);g.setMaterial($,Te);let Pe=J.index,Ne=1;if($.wireframe===!0){if(Pe=ee.getWireframeAttribute(J),Pe===void 0)return;Ne=2}const Ze=J.drawRange,nt=J.attributes.position;let Oe=Ze.start*Ne,Mt=(Ze.start+Ze.count)*Ne;Ee!==null&&(Oe=Math.max(Oe,Ee.start*Ne),Mt=Math.min(Mt,(Ee.start+Ee.count)*Ne)),Pe!==null?(Oe=Math.max(Oe,0),Mt=Math.min(Mt,Pe.count)):nt!=null&&(Oe=Math.max(Oe,0),Mt=Math.min(Mt,nt.count));const It=Mt-Oe;if(It<0||It===1/0)return;M.setup(K,$,Se,J,Pe);let Pt,St=pe;if(Pe!==null&&(Pt=he.get(Pe),St=re,St.setIndex(Pt)),K.isMesh)$.wireframe===!0?(g.setLineWidth($.wireframeLinewidth*dt()),St.setMode(z.LINES)):St.setMode(z.TRIANGLES);else if(K.isLine){let Vt=$.linewidth;Vt===void 0&&(Vt=1),g.setLineWidth(Vt*dt()),K.isLineSegments?St.setMode(z.LINES):K.isLineLoop?St.setMode(z.LINE_LOOP):St.setMode(z.LINE_STRIP)}else K.isPoints?St.setMode(z.POINTS):K.isSprite&&St.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))St.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Vt=K._multiDrawStarts,be=K._multiDrawCounts,Qt=K._multiDrawCount,pt=Pe?he.get(Pe).bytesPerElement:1,sn=Y.get($).currentProgram.getUniforms();for(let hn=0;hn<Qt;hn++)sn.setValue(z,"_gl_DrawID",hn),St.render(Vt[hn]/pt,be[hn])}else if(K.isInstancedMesh)St.renderInstances(Oe,It,K.count);else if(J.isInstancedBufferGeometry){const Vt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,be=Math.min(J.instanceCount,Vt);St.renderInstances(Oe,It,be)}else St.render(Oe,It)};function Dt(y,H,J){y.transparent===!0&&y.side===_n&&y.forceSinglePass===!1?(y.side=Zt,y.needsUpdate=!0,Ce(y,H,J),y.side=Un,y.needsUpdate=!0,Ce(y,H,J),y.side=_n):Ce(y,H,J)}this.compile=function(y,H,J=null){J===null&&(J=y),E=fe.get(J),E.init(H),m.push(E),J.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),y!==J&&y.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),E.setupLights();const $=new Set;return y.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ee=K.material;if(Ee)if(Array.isArray(Ee))for(let Te=0;Te<Ee.length;Te++){const Se=Ee[Te];Dt(Se,J,K),$.add(Se)}else Dt(Ee,J,K),$.add(Ee)}),E=m.pop(),$},this.compileAsync=function(y,H,J=null){const $=this.compile(y,H,J);return new Promise(K=>{function Ee(){if($.forEach(function(Te){Y.get(Te).currentProgram.isReady()&&$.delete(Te)}),$.size===0){K(y);return}setTimeout(Ee,10)}Qe.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let ve=null;function Ue(y){ve&&ve(y)}function bt(){mt.stop()}function wt(){mt.start()}const mt=new zl;mt.setAnimationLoop(Ue),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(y){ve=y,Z.setAnimationLoop(y),y===null?mt.stop():mt.start()},Z.addEventListener("sessionstart",bt),Z.addEventListener("sessionend",wt),this.render=function(y,H){if(H!==void 0&&H.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(y,H);const J=Z.enabled===!0&&Z.isPresenting===!0,$=S!==null&&(W===null||J)&&S.begin(D,W);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(H),H=Z.getCamera()),y.isScene===!0&&y.onBeforeRender(D,y,H,W),E=fe.get(y,m.length),E.init(H),E.state.textureUnits=Q.getTextureUnits(),m.push(E),gt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),je.setFromProjectionMatrix(gt,xn,H.reversedDepth),Ye=this.localClippingEnabled,qe=Le.init(this.clippingPlanes,Ye),T=xe.get(y,w.length),T.init(),w.push(T),Z.enabled===!0&&Z.isPresenting===!0){const Te=D.xr.getDepthSensingMesh();Te!==null&&ht(Te,H,-1/0,D.sortObjects)}ht(y,H,0,D.sortObjects),T.finish(),D.sortObjects===!0&&T.sort(De,ze,H.reversedDepth),st=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,st&&ke.addToRenderList(T,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qe===!0&&Le.beginShadows();const K=E.state.shadowsArray;if(Fe.render(K,y,H),qe===!0&&Le.endShadows(),($&&S.hasRenderPass())===!1){const Te=T.opaque,Se=T.transmissive;if(E.setupLights(),H.isArrayCamera){const Pe=H.cameras;if(Se.length>0)for(let Ne=0,Ze=Pe.length;Ne<Ze;Ne++){const nt=Pe[Ne];F(Te,Se,y,nt)}st&&ke.render(y);for(let Ne=0,Ze=Pe.length;Ne<Ze;Ne++){const nt=Pe[Ne];et(T,y,nt,nt.viewport)}}else Se.length>0&&F(Te,Se,y,H),st&&ke.render(y),et(T,y,H)}W!==null&&I===0&&(Q.updateMultisampleRenderTarget(W),Q.updateRenderTargetMipmap(W)),$&&S.end(D),y.isScene===!0&&y.onAfterRender(D,y,H),M.resetDefaultState(),ne=-1,oe=null,m.pop(),m.length>0?(E=m[m.length-1],Q.setTextureUnits(E.state.textureUnits),qe===!0&&Le.setGlobalState(D.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?T=w[w.length-1]:T=null,N!==null&&N.renderEnd()};function ht(y,H,J,$){if(y.visible===!1)return;if(y.layers.test(H.layers)){if(y.isGroup)J=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(H);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||je.intersectsSprite(y)){$&&At.setFromMatrixPosition(y.matrixWorld).applyMatrix4(gt);const Te=ie.update(y),Se=y.material;Se.visible&&T.push(y,Te,Se,J,At.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||je.intersectsObject(y))){const Te=ie.update(y),Se=y.material;if($&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),At.copy(y.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),At.copy(Te.boundingSphere.center)),At.applyMatrix4(y.matrixWorld).applyMatrix4(gt)),Array.isArray(Se)){const Pe=Te.groups;for(let Ne=0,Ze=Pe.length;Ne<Ze;Ne++){const nt=Pe[Ne],Oe=Se[nt.materialIndex];Oe&&Oe.visible&&T.push(y,Te,Oe,J,At.z,nt)}}else Se.visible&&T.push(y,Te,Se,J,At.z,null)}}const Ee=y.children;for(let Te=0,Se=Ee.length;Te<Se;Te++)ht(Ee[Te],H,J,$)}function et(y,H,J,$){const{opaque:K,transmissive:Ee,transparent:Te}=y;E.setupLightsView(J),qe===!0&&Le.setGlobalState(D.clippingPlanes,J),$&&g.viewport(se.copy($)),K.length>0&&ae(K,H,J),Ee.length>0&&ae(Ee,H,J),Te.length>0&&ae(Te,H,J),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function F(y,H,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[$.id]===void 0){const Oe=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[$.id]=new Sn(1,1,{generateMipmaps:!0,type:Oe?Nn:nn,minFilter:vn,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const Ee=E.state.transmissionRenderTarget[$.id],Te=$.viewport||se;Ee.setSize(Te.z*D.transmissionResolutionScale,Te.w*D.transmissionResolutionScale);const Se=D.getRenderTarget(),Pe=D.getActiveCubeFace(),Ne=D.getActiveMipmapLevel();D.setRenderTarget(Ee),D.getClearColor(Je),He=D.getClearAlpha(),He<1&&D.setClearColor(16777215,.5),D.clear(),st&&ke.render(J);const Ze=D.toneMapping;D.toneMapping=Mn;const nt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),E.setupLightsView($),qe===!0&&Le.setGlobalState(D.clippingPlanes,$),ae(y,J,$),Q.updateMultisampleRenderTarget(Ee),Q.updateRenderTargetMipmap(Ee),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Mt=0,It=H.length;Mt<It;Mt++){const Pt=H[Mt],{object:St,geometry:Vt,material:be,group:Qt}=Pt;if(be.side===_n&&St.layers.test($.layers)){const pt=be.side;be.side=Zt,be.needsUpdate=!0,we(St,J,$,Vt,be,Qt),be.side=pt,be.needsUpdate=!0,Oe=!0}}Oe===!0&&(Q.updateMultisampleRenderTarget(Ee),Q.updateRenderTargetMipmap(Ee))}D.setRenderTarget(Se,Pe,Ne),D.setClearColor(Je,He),nt!==void 0&&($.viewport=nt),D.toneMapping=Ze}function ae(y,H,J){const $=H.isScene===!0?H.overrideMaterial:null;for(let K=0,Ee=y.length;K<Ee;K++){const Te=y[K],{object:Se,geometry:Pe,group:Ne}=Te;let Ze=Te.material;Ze.allowOverride===!0&&$!==null&&(Ze=$),Se.layers.test(J.layers)&&we(Se,H,J,Pe,Ze,Ne)}}function we(y,H,J,$,K,Ee){y.onBeforeRender(D,H,J,$,K,Ee),y.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),K.onBeforeRender(D,H,J,$,y,Ee),K.transparent===!0&&K.side===_n&&K.forceSinglePass===!1?(K.side=Zt,K.needsUpdate=!0,D.renderBufferDirect(J,H,$,K,y,Ee),K.side=Un,K.needsUpdate=!0,D.renderBufferDirect(J,H,$,K,y,Ee),K.side=_n):D.renderBufferDirect(J,H,$,K,y,Ee),y.onAfterRender(D,H,J,$,K,Ee)}function Ce(y,H,J){H.isScene!==!0&&(H=vt);const $=Y.get(y),K=E.state.lights,Ee=E.state.shadowsArray,Te=K.state.version,Se=ge.getParameters(y,K.state,Ee,H,J,E.state.lightProbeGridArray),Pe=ge.getProgramCacheKey(Se);let Ne=$.programs;$.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?H.environment:null,$.fog=H.fog;const Ze=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;$.envMap=ue.get(y.envMap||$.environment,Ze),$.envMapRotation=$.environment!==null&&y.envMap===null?H.environmentRotation:y.envMapRotation,Ne===void 0&&(y.addEventListener("dispose",Ie),Ne=new Map,$.programs=Ne);let nt=Ne.get(Pe);if(nt!==void 0){if($.currentProgram===nt&&$.lightsStateVersion===Te)return Jn(y,Se),nt}else Se.uniforms=ge.getUniforms(y),N!==null&&y.isNodeMaterial&&N.build(y,J,Se),y.onBeforeCompile(Se,D),nt=ge.acquireProgram(Se,Pe),Ne.set(Pe,nt),$.uniforms=Se.uniforms;const Oe=$.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Oe.clippingPlanes=Le.uniform),Jn(y,Se),$.needsLights=Kl(y),$.lightsStateVersion=Te,$.needsLights&&(Oe.ambientLightColor.value=K.state.ambient,Oe.lightProbe.value=K.state.probe,Oe.directionalLights.value=K.state.directional,Oe.directionalLightShadows.value=K.state.directionalShadow,Oe.spotLights.value=K.state.spot,Oe.spotLightShadows.value=K.state.spotShadow,Oe.rectAreaLights.value=K.state.rectArea,Oe.ltc_1.value=K.state.rectAreaLTC1,Oe.ltc_2.value=K.state.rectAreaLTC2,Oe.pointLights.value=K.state.point,Oe.pointLightShadows.value=K.state.pointShadow,Oe.hemisphereLights.value=K.state.hemi,Oe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Oe.spotLightMatrix.value=K.state.spotLightMatrix,Oe.spotLightMap.value=K.state.spotLightMap,Oe.pointShadowMatrix.value=K.state.pointShadowMatrix),$.lightProbeGrid=E.state.lightProbeGridArray.length>0,$.currentProgram=nt,$.uniformsList=null,nt}function $e(y){if(y.uniformsList===null){const H=y.currentProgram.getUniforms();y.uniformsList=Hr.seqWithValue(H.seq,y.uniforms)}return y.uniformsList}function Jn(y,H){const J=Y.get(y);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function On(y,H){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;v.setFromMatrixPosition(H.matrixWorld);for(let J=0,$=y.length;J<$;J++){const K=y[J];if(K.texture!==null&&K.boundingBox.containsPoint(v))return K}return null}function Yl(y,H,J,$,K){H.isScene!==!0&&(H=vt),Q.resetTextureUnits();const Ee=H.fog,Te=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?H.environment:null,Se=W===null?D.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:lt.workingColorSpace,Pe=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ne=ue.get($.envMap||Te,Pe),Ze=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,nt=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Oe=!!J.morphAttributes.position,Mt=!!J.morphAttributes.normal,It=!!J.morphAttributes.color;let Pt=Mn;$.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Pt=D.toneMapping);const St=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Vt=St!==void 0?St.length:0,be=Y.get($),Qt=E.state.lights;if(qe===!0&&(Ye===!0||y!==oe)){const Tt=y===oe&&$.id===ne;Le.setState($,y,Tt)}let pt=!1;$.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Qt.state.version||be.outputColorSpace!==Se||K.isBatchedMesh&&be.batching===!1||!K.isBatchedMesh&&be.batching===!0||K.isBatchedMesh&&be.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&be.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&be.instancing===!1||!K.isInstancedMesh&&be.instancing===!0||K.isSkinnedMesh&&be.skinning===!1||!K.isSkinnedMesh&&be.skinning===!0||K.isInstancedMesh&&be.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&be.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&be.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&be.instancingMorph===!1&&K.morphTexture!==null||be.envMap!==Ne||$.fog===!0&&be.fog!==Ee||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Le.numPlanes||be.numIntersection!==Le.numIntersection)||be.vertexAlphas!==Ze||be.vertexTangents!==nt||be.morphTargets!==Oe||be.morphNormals!==Mt||be.morphColors!==It||be.toneMapping!==Pt||be.morphTargetsCount!==Vt||!!be.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,be.__version=$.version);let sn=be.currentProgram;pt===!0&&(sn=Ce($,H,K),N&&$.isNodeMaterial&&N.onUpdateProgram($,sn,be));let hn=!1,Bn=!1,pi=!1;const yt=sn.getUniforms(),Ut=be.uniforms;if(g.useProgram(sn.program)&&(hn=!0,Bn=!0,pi=!0),$.id!==ne&&(ne=$.id,Bn=!0),be.needsLights){const Tt=On(E.state.lightProbeGridArray,K);be.lightProbeGrid!==Tt&&(be.lightProbeGrid=Tt,Bn=!0)}if(hn||oe!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),yt.setValue(z,"projectionMatrix",y.projectionMatrix),yt.setValue(z,"viewMatrix",y.matrixWorldInverse);const Hn=yt.map.cameraPosition;Hn!==void 0&&Hn.setValue(z,ft.setFromMatrixPosition(y.matrixWorld)),P.logarithmicDepthBuffer&&yt.setValue(z,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&yt.setValue(z,"isOrthographic",y.isOrthographicCamera===!0),oe!==y&&(oe=y,Bn=!0,pi=!0)}if(be.needsLights&&(Qt.state.directionalShadowMap.length>0&&yt.setValue(z,"directionalShadowMap",Qt.state.directionalShadowMap,Q),Qt.state.spotShadowMap.length>0&&yt.setValue(z,"spotShadowMap",Qt.state.spotShadowMap,Q),Qt.state.pointShadowMap.length>0&&yt.setValue(z,"pointShadowMap",Qt.state.pointShadowMap,Q)),K.isSkinnedMesh){yt.setOptional(z,K,"bindMatrix"),yt.setOptional(z,K,"bindMatrixInverse");const Tt=K.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),yt.setValue(z,"boneTexture",Tt.boneTexture,Q))}K.isBatchedMesh&&(yt.setOptional(z,K,"batchingTexture"),yt.setValue(z,"batchingTexture",K._matricesTexture,Q),yt.setOptional(z,K,"batchingIdTexture"),yt.setValue(z,"batchingIdTexture",K._indirectTexture,Q),yt.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&yt.setValue(z,"batchingColorTexture",K._colorsTexture,Q));const zn=J.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&O.update(K,J,sn),(Bn||be.receiveShadow!==K.receiveShadow)&&(be.receiveShadow=K.receiveShadow,yt.setValue(z,"receiveShadow",K.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&H.environment!==null&&(Ut.envMapIntensity.value=H.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=Hm()),Bn){if(yt.setValue(z,"toneMappingExposure",D.toneMappingExposure),be.needsLights&&$l(Ut,pi),Ee&&$.fog===!0&&Re.refreshFogUniforms(Ut,Ee),Re.refreshMaterialUniforms(Ut,$,le,te,E.state.transmissionRenderTarget[y.id]),be.needsLights&&be.lightProbeGrid){const Tt=be.lightProbeGrid;Ut.probesSH.value=Tt.texture,Ut.probesMin.value.copy(Tt.boundingBox.min),Ut.probesMax.value.copy(Tt.boundingBox.max),Ut.probesResolution.value.copy(Tt.resolution)}Hr.upload(z,$e(be),Ut,Q)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Hr.upload(z,$e(be),Ut,Q),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&yt.setValue(z,"center",K.center),yt.setValue(z,"modelViewMatrix",K.modelViewMatrix),yt.setValue(z,"normalMatrix",K.normalMatrix),yt.setValue(z,"modelMatrix",K.matrixWorld),$.uniformsGroups!==void 0){const Tt=$.uniformsGroups;for(let Hn=0,mi=Tt.length;Hn<mi;Hn++){const Za=Tt[Hn];C.update(Za,sn),C.bind(Za,sn)}}return sn}function $l(y,H){y.ambientLightColor.needsUpdate=H,y.lightProbe.needsUpdate=H,y.directionalLights.needsUpdate=H,y.directionalLightShadows.needsUpdate=H,y.pointLights.needsUpdate=H,y.pointLightShadows.needsUpdate=H,y.spotLights.needsUpdate=H,y.spotLightShadows.needsUpdate=H,y.rectAreaLights.needsUpdate=H,y.hemisphereLights.needsUpdate=H}function Kl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(y,H,J){const $=Y.get(y);$.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Y.get(y.texture).__webglTexture=H,Y.get(y.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:J,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,H){const J=Y.get(y);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(y,H=0,J=0){W=y,k=H,I=J;let $=null,K=!1,Ee=!1;if(y){const Se=Y.get(y);if(Se.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(z.FRAMEBUFFER,Se.__webglFramebuffer),se.copy(y.viewport),de.copy(y.scissor),We=y.scissorTest,g.viewport(se),g.scissor(de),g.setScissorTest(We),ne=-1;return}else if(Se.__webglFramebuffer===void 0)Q.setupRenderTarget(y);else if(Se.__hasExternalTextures)Q.rebindTextures(y,Y.get(y.texture).__webglTexture,Y.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ze=y.depthTexture;if(Se.__boundDepthTexture!==Ze){if(Ze!==null&&Y.has(Ze)&&(y.width!==Ze.image.width||y.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(y)}}const Pe=y.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Ee=!0);const Ne=Y.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ne[H])?$=Ne[H][J]:$=Ne[H],K=!0):y.samples>0&&Q.useMultisampledRTT(y)===!1?$=Y.get(y).__webglMultisampledFramebuffer:Array.isArray(Ne)?$=Ne[J]:$=Ne,se.copy(y.viewport),de.copy(y.scissor),We=y.scissorTest}else se.copy(Ae).multiplyScalar(le).floor(),de.copy(ut).multiplyScalar(le).floor(),We=Xe;if(J!==0&&($=B),g.bindFramebuffer(z.FRAMEBUFFER,$)&&g.drawBuffers(y,$),g.viewport(se),g.scissor(de),g.setScissorTest(We),K){const Se=Y.get(y.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,Se.__webglTexture,J)}else if(Ee){const Se=H;for(let Pe=0;Pe<y.textures.length;Pe++){const Ne=Y.get(y.textures[Pe]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Pe,Ne.__webglTexture,J,Se)}}else if(y!==null&&J!==0){const Se=Y.get(y.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Se.__webglTexture,J)}ne=-1},this.readRenderTargetPixels=function(y,H,J,$,K,Ee,Te,Se=0){if(!(y&&y.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Y.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe){g.bindFramebuffer(z.FRAMEBUFFER,Pe);try{const Ne=y.textures[Se],Ze=Ne.format,nt=Ne.type;if(y.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Se),!P.textureFormatReadable(Ze)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(nt)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=y.width-$&&J>=0&&J<=y.height-K&&z.readPixels(H,J,$,K,me.convert(Ze),me.convert(nt),Ee)}finally{const Ne=W!==null?Y.get(W).__webglFramebuffer:null;g.bindFramebuffer(z.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(y,H,J,$,K,Ee,Te,Se=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Y.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe)if(H>=0&&H<=y.width-$&&J>=0&&J<=y.height-K){g.bindFramebuffer(z.FRAMEBUFFER,Pe);const Ne=y.textures[Se],Ze=Ne.format,nt=Ne.type;if(y.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Se),!P.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Oe),z.bufferData(z.PIXEL_PACK_BUFFER,Ee.byteLength,z.STREAM_READ),z.readPixels(H,J,$,K,me.convert(Ze),me.convert(nt),0);const Mt=W!==null?Y.get(W).__webglFramebuffer:null;g.bindFramebuffer(z.FRAMEBUFFER,Mt);const It=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Hc(z,It,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Oe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ee),z.deleteBuffer(Oe),z.deleteSync(It),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,H=null,J=0){const $=Math.pow(2,-J),K=Math.floor(y.image.width*$),Ee=Math.floor(y.image.height*$),Te=H!==null?H.x:0,Se=H!==null?H.y:0;Q.setTexture2D(y,0),z.copyTexSubImage2D(z.TEXTURE_2D,J,0,0,Te,Se,K,Ee),g.unbindTexture()},this.copyTextureToTexture=function(y,H,J=null,$=null,K=0,Ee=0){let Te,Se,Pe,Ne,Ze,nt,Oe,Mt,It;const Pt=y.isCompressedTexture?y.mipmaps[Ee]:y.image;if(J!==null)Te=J.max.x-J.min.x,Se=J.max.y-J.min.y,Pe=J.isBox3?J.max.z-J.min.z:1,Ne=J.min.x,Ze=J.min.y,nt=J.isBox3?J.min.z:0;else{const Ut=Math.pow(2,-K);Te=Math.floor(Pt.width*Ut),Se=Math.floor(Pt.height*Ut),y.isDataArrayTexture?Pe=Pt.depth:y.isData3DTexture?Pe=Math.floor(Pt.depth*Ut):Pe=1,Ne=0,Ze=0,nt=0}$!==null?(Oe=$.x,Mt=$.y,It=$.z):(Oe=0,Mt=0,It=0);const St=me.convert(H.format),Vt=me.convert(H.type);let be;H.isData3DTexture?(Q.setTexture3D(H,0),be=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Q.setTexture2DArray(H,0),be=z.TEXTURE_2D_ARRAY):(Q.setTexture2D(H,0),be=z.TEXTURE_2D),g.activeTexture(z.TEXTURE0),g.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),g.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),g.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);const Qt=g.getParameter(z.UNPACK_ROW_LENGTH),pt=g.getParameter(z.UNPACK_IMAGE_HEIGHT),sn=g.getParameter(z.UNPACK_SKIP_PIXELS),hn=g.getParameter(z.UNPACK_SKIP_ROWS),Bn=g.getParameter(z.UNPACK_SKIP_IMAGES);g.pixelStorei(z.UNPACK_ROW_LENGTH,Pt.width),g.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pt.height),g.pixelStorei(z.UNPACK_SKIP_PIXELS,Ne),g.pixelStorei(z.UNPACK_SKIP_ROWS,Ze),g.pixelStorei(z.UNPACK_SKIP_IMAGES,nt);const pi=y.isDataArrayTexture||y.isData3DTexture,yt=H.isDataArrayTexture||H.isData3DTexture;if(y.isDepthTexture){const Ut=Y.get(y),zn=Y.get(H),Tt=Y.get(Ut.__renderTarget),Hn=Y.get(zn.__renderTarget);g.bindFramebuffer(z.READ_FRAMEBUFFER,Tt.__webglFramebuffer),g.bindFramebuffer(z.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let mi=0;mi<Pe;mi++)pi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Y.get(y).__webglTexture,K,nt+mi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Y.get(H).__webglTexture,Ee,It+mi)),z.blitFramebuffer(Ne,Ze,Te,Se,Oe,Mt,Te,Se,z.DEPTH_BUFFER_BIT,z.NEAREST);g.bindFramebuffer(z.READ_FRAMEBUFFER,null),g.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||y.isRenderTargetTexture||Y.has(y)){const Ut=Y.get(y),zn=Y.get(H);g.bindFramebuffer(z.READ_FRAMEBUFFER,G),g.bindFramebuffer(z.DRAW_FRAMEBUFFER,U);for(let Tt=0;Tt<Pe;Tt++)pi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ut.__webglTexture,K,nt+Tt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ut.__webglTexture,K),yt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,zn.__webglTexture,Ee,It+Tt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,zn.__webglTexture,Ee),K!==0?z.blitFramebuffer(Ne,Ze,Te,Se,Oe,Mt,Te,Se,z.COLOR_BUFFER_BIT,z.NEAREST):yt?z.copyTexSubImage3D(be,Ee,Oe,Mt,It+Tt,Ne,Ze,Te,Se):z.copyTexSubImage2D(be,Ee,Oe,Mt,Ne,Ze,Te,Se);g.bindFramebuffer(z.READ_FRAMEBUFFER,null),g.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else yt?y.isDataTexture||y.isData3DTexture?z.texSubImage3D(be,Ee,Oe,Mt,It,Te,Se,Pe,St,Vt,Pt.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(be,Ee,Oe,Mt,It,Te,Se,Pe,St,Pt.data):z.texSubImage3D(be,Ee,Oe,Mt,It,Te,Se,Pe,St,Vt,Pt):y.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ee,Oe,Mt,Te,Se,St,Vt,Pt.data):y.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ee,Oe,Mt,Pt.width,Pt.height,St,Pt.data):z.texSubImage2D(z.TEXTURE_2D,Ee,Oe,Mt,Te,Se,St,Vt,Pt);g.pixelStorei(z.UNPACK_ROW_LENGTH,Qt),g.pixelStorei(z.UNPACK_IMAGE_HEIGHT,pt),g.pixelStorei(z.UNPACK_SKIP_PIXELS,sn),g.pixelStorei(z.UNPACK_SKIP_ROWS,hn),g.pixelStorei(z.UNPACK_SKIP_IMAGES,Bn),Ee===0&&H.generateMipmaps&&z.generateMipmap(be),g.unbindTexture()},this.initRenderTarget=function(y){Y.get(y).__webglFramebuffer===void 0&&Q.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Q.setTextureCube(y,0):y.isData3DTexture?Q.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Q.setTexture2DArray(y,0):Q.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){k=0,I=0,W=null,g.reset(),M.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const Yn=1024,ii=512,Gm=90;class Vm{constructor(e,t,n,r,s){Ct(this,"renderer");Ct(this,"camera");Ct(this,"scene");Ct(this,"terrain");Ct(this,"texture");Ct(this,"W");Ct(this,"H");Ct(this,"maxElev",0);Ct(this,"minElev",0);Ct(this,"cam");Ct(this,"fitDist");Ct(this,"needsRender",!0);Ct(this,"onCameraChange",null);Ct(this,"world");Ct(this,"hlUniforms",{hoverId:{value:new rt(-10,-10)},selId:{value:new rt(-10,-10)}});Ct(this,"modeUniforms",{provDark:{value:.1},hierK:{value:1},washFlat:{value:0}});Ct(this,"paperUniforms",{paperLand:{value:new Ot},paperSea:{value:new Ot},paperKL:{value:0},paperKS:{value:0}});Ct(this,"washData");Ct(this,"washTex");Ct(this,"idW",0);Ct(this,"idH",0);Ct(this,"vertElev");this.world=e;const{W:a,H:o}=e;this.W=a,this.H=o;const l=Yn+1,c=ii+1;this.vertElev=new Float32Array(l*c);{const{height:S,seaBase:D,land:L}=e,N=Math.max(1,Math.round(a/Yn/2)),B=Math.max(1,Math.round(o/ii/2));for(let G=0;G<c;G++){const U=Math.round(G/ii*(o-1));for(let k=0;k<l;k++){const I=Math.round(k/Yn*(a-1));let W=0,ne=0,oe=0,se=0;for(let We=-B;We<=B;We++){const Je=Math.min(o-1,Math.max(0,U+We));for(let He=-N;He<=N;He++){const j=Math.min(a-1,Math.max(0,I+He)),te=Je*a+j;W+=S[te],ne++,L[te]&&(oe+=S[te],se++)}}let de=Math.max(0,W/ne-D);if(se>0){const We=Math.max(0,oe/se-D);de=Math.max(de,We*Math.min(1,se/ne*2.4))}this.vertElev[G*l+k]=Math.pow(de,.92)*Gm}}}this.renderer=new km({antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.domElement.id="gl",n.prepend(this.renderer.domElement),this.scene=new _u;const h=new at("#878f83");this.scene.background=h,this.camera=new on(50,window.innerWidth/window.innerHeight,2,16e3),this.texture=new Ro(t),this.texture.colorSpace=Kt,this.texture.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.texture.generateMipmaps=!0,this.texture.minFilter=vn,this.texture.magFilter=kt;const f=new Hi(a,o,Yn,ii),d=f.attributes.position;let _=0;for(let S=0;S<d.count;S++){const D=this.vertElev[S];D>_&&(_=D),d.setZ(S,D)}this.maxElev=_,f.rotateX(-Math.PI/2),f.computeVertexNormals();const x=(()=>{const L=document.createElement("canvas");L.width=256,L.height=256;const N=L.getContext("2d"),B=N.createImageData(256,256),G=[];for(let I=0;I<1024;I++){let W=I*374761393+668265263|0;W=Math.imul(W^W>>>13,1274126177),G.push(((W^W>>>16)>>>0)/4294967295)}const U=I=>I*I*(3-2*I);for(let I=0;I<256;I++)for(let W=0;W<256;W++){const ne=W/256*32,oe=I/256*32,se=ne|0,de=oe|0,We=U(ne-se),Je=U(oe-de),He=(se+1)%32,j=(de+1)%32,te=G[de*32+se],le=G[de*32+He],De=G[j*32+se],ze=G[j*32+He];let Ae=te+(le-te)*We+(De-te)*Je+(te-le-De+ze)*We*Je;const ut=W/256*32*4,Xe=I/256*32*4,je=ut|0,qe=Xe|0,Ye=U(ut-je),gt=U(Xe-qe),ft=(je+1)%128,At=(qe+1)%128,vt=(g,V)=>G[g%32*32+V%32],st=vt(qe,je),dt=vt(qe,ft),z=vt(At,je),Lt=vt(At,ft);Ae=Ae*.65+(st+(dt-st)*Ye+(z-st)*gt+(st-dt-z+Lt)*Ye*gt)*.35;const Qe=(I*256+W)*4,P=Ae*255|0;B.data[Qe]=P,B.data[Qe+1]=P,B.data[Qe+2]=P,B.data[Qe+3]=255}N.putImageData(B,0,0);const k=new Ro(L);return k.wrapS=k.wrapT=kr,k.minFilter=vn,k.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),k})();let A;if(r&&this.renderer.capabilities.maxTextureSize>=r.width)A=new Ot(r),this.idW=r.width,this.idH=r.height;else{const S=new Uint8Array(a*o*4);for(let D=0;D<o;D++)for(let L=0;L<a;L++){const N=e.rawGrid[D*a+L],B=((o-1-D)*a+L)*4;S[B]=N&255,S[B+1]=N>>8&255,S[B+3]=255}A=new ai(S,a,o,qt),this.idW=a,this.idH=o}A.minFilter=Nt,A.magFilter=Nt,A.generateMipmaps=!1,A.needsUpdate=!0,this.washData=new Uint8Array(256*256*4),this.washTex=new ai(this.washData,256,256,qt),this.washTex.minFilter=this.washTex.magFilter=Nt;const p=new Uint8Array(256*256*4),u=new Uint8Array(256*256*4);{const{rawCounty:S,rawLand:D,cDuchy:L,dKing:N,kEmp:B}=e;for(let G=0;G<65536;G++){const U=S[G],k=U>=0?L[U]:-1,I=k>=0?N[k]:-1,W=I>=0?B[I]:-1,ne=U>=0?U:65535,oe=k>=0?k:65535,se=G*4;p[se]=ne&255,p[se+1]=ne>>8,p[se+2]=oe&255,p[se+3]=oe>>8,u[se]=I>=0?I:255,u[se+1]=W>=0?W:255,u[se+2]=D[G]?255:0,u[se+3]=255}}const b=new ai(p,256,256,qt),R=new ai(u,256,256,qt);for(const S of[b,R])S.minFilter=S.magFilter=Nt,S.needsUpdate=!0;const v=new Uint8Array(a*o*4);{const{shade:S,land:D,coastD:L}=e;for(let N=0;N<o;N++)for(let B=0;B<a;B++){const G=N*a+B,U=((o-1-N)*a+B)*4;v[U]=Math.max(0,Math.min(255,(S[G]-.42)/.88*255))|0,v[U+1]=s?s[G]:0,v[U+2]=D[G]?24+Math.min(12,L[G])*18:0,v[U+3]=255}}const T=new ai(v,a,o,qt);T.minFilter=T.magFilter=kt,T.generateMipmaps=!1,T.needsUpdate=!0;const E=new Yr({map:this.texture});E.onBeforeCompile=S=>{S.uniforms.detailMap={value:x},S.uniforms.provMap={value:A},S.uniforms.washMap={value:this.washTex},S.uniforms.tierMapA={value:b},S.uniforms.tierMapB={value:R},S.uniforms.shadeMap={value:T},S.uniforms.provTexel={value:new rt(1/this.idW,1/this.idH)},S.uniforms.provDark=this.modeUniforms.provDark,S.uniforms.hierK=this.modeUniforms.hierK,S.uniforms.washFlat=this.modeUniforms.washFlat,S.uniforms.hoverId=this.hlUniforms.hoverId,S.uniforms.selId=this.hlUniforms.selId,S.uniforms.paperLand=this.paperUniforms.paperLand,S.uniforms.paperSea=this.paperUniforms.paperSea,S.uniforms.paperKL=this.paperUniforms.paperKL,S.uniforms.paperKS=this.paperUniforms.paperKS,S.fragmentShader=S.fragmentShader.replace("void main() {",`
      uniform sampler2D detailMap;
      uniform sampler2D provMap;
      uniform sampler2D washMap;
      uniform sampler2D tierMapA;
      uniform sampler2D tierMapB;
      uniform sampler2D shadeMap;
      uniform vec2 provTexel;
      uniform float provDark;
      uniform float hierK;
      uniform float washFlat;
      uniform vec2 hoverId;
      uniform vec2 selId;
      uniform sampler2D paperLand;
      uniform sampler2D paperSea;
      uniform float paperKL;
      uniform float paperKS;
      float idAt( vec2 uv ) {
        vec2 t = texture2D( provMap, uv ).rg;
        return floor( t.x * 255.0 + 0.5 ) + floor( t.y * 255.0 + 0.5 ) * 256.0;
      }
      vec2 lutUV( float id ) {
        return vec2( ( mod( id, 256.0 ) + 0.5 ) / 256.0, ( floor( id / 256.0 ) + 0.5 ) / 256.0 );
      }
      float u16( vec2 c ) { return floor( c.x * 255.0 + 0.5 ) + floor( c.y * 255.0 + 0.5 ) * 256.0; }
      vec4 landWashAt( vec2 uv ) {
        // wash colour of the province at uv, alpha 0 when it's water
        float nid = idAt( uv );
        vec2 nl = lutUV( nid );
        if ( texture2D( tierMapB, nl ).b < 0.5 ) return vec4( 0.0 );
        return texture2D( washMap, nl );
      }
      float borderTier( float pid, vec4 tA, vec4 tB, float nid, float pd, float hk ) {
        vec2 nluv = lutUV( nid );
        vec4 nA = texture2D( tierMapA, nluv );
        vec4 nB = texture2D( tierMapB, nluv );
        if ( tB.b != nB.b ) return 0.30;                         // coast ink line
        if ( tB.b < 0.5 ) return 0.0;                            // open water
        float c0 = u16( tA.rg ), c1 = u16( nA.rg );
        // no realm borders into or through the impassable wastelands — the
        // colour wash fading out already marks the realm edge there
        if ( c0 == 65535.0 || c1 == 65535.0 ) return pd;
        float d = pd;
        if ( hk > 0.5 ) {
          if ( c1 != c0 ) d = max( d, 0.20 );
          if ( u16( nA.ba ) != u16( tA.ba ) ) d = max( d, 0.30 );
          if ( nB.r != tB.r ) d = max( d, 0.46 );
          if ( nB.g != tB.g ) d = max( d, 0.66 );
        }
        return d;
      }
      void main() {`).replace("#include <map_fragment>",`#include <map_fragment>
      float dtl = texture2D( detailMap, vMapUv * 96.0 ).r;
      float dtl2 = texture2D( detailMap, vMapUv * 340.0 ).r;
      diffuseColor.rgb *= ( 0.90 + dtl * 0.13 + dtl2 * 0.07 );

      float pid = idAt( vMapUv );
      vec2 luv = lutUV( pid );
      vec4 wash = texture2D( washMap, luv );
      vec3 ss = texture2D( shadeMap, vMapUv ).rgb;
      float shd = 0.42 + ss.r * 0.88;
      vec4 tA = texture2D( tierMapA, luv );
      vec4 tB = texture2D( tierMapB, luv );

      // resolve the coastline at id-map resolution: the base texture only
      // knows land/sea at grid res, the province map knows it exactly
      float landF = smoothstep( 0.030, 0.085, ss.b );
      float provLand = step( 0.5, tB.b );
      float fillF = provLand * ( 1.0 - landF );          // land px painted as sea
      vec3 pl = texture2D( paperLand, vMapUv * vec2( 12.0, 6.0 ) ).rgb;
      vec3 parch = mix( vec3( 0.655, 0.615, 0.485 ), pl * 1.06, paperKL );
      diffuseColor.rgb = mix( diffuseColor.rgb, parch * shd, fillF * 0.9 );
      float cutF = ( 1.0 - provLand ) * landF;           // sea px painted as land
      diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.322, 0.392, 0.392 ), cutF * 0.85 );

      // sandy beach band along the shore (fades with distance to coast)
      float beach = smoothstep( 0.035, 0.085, ss.b ) * ( 1.0 - smoothstep( 0.09, 0.52, ss.b ) );
      diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.76, 0.70, 0.53 ) * shd,
        beach * 0.42 * provLand * ( 1.0 - ss.g ) );

      // flat mode (province map): full-strength fill, no snow cut-through and
      // almost no relief shading — crisp cartographic colours like a paint map
      float washA = wash.a * ( 1.0 - ss.g * 0.85 * ( 1.0 - washFlat ) ) * provLand;
      float shdW = mix( shd, clamp( 0.86 + ss.r * 0.14, 0.0, 1.0 ), washFlat );
      diffuseColor.rgb = mix( diffuseColor.rgb, wash.rgb * shdW, washA );
      // flat mode: calm single-tone sea hiding the cloud fog baked into the
      // base texture, so the coastline reads at id-map precision
      diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.302, 0.353, 0.373 ),
        washFlat * ( 1.0 - provLand ) * 0.96 );
      vec2 off = max( provTexel, fwidth( vMapUv ) * 0.75 );
      float bd = 0.0;
      float nid;
      nid = idAt( vMapUv + vec2( off.x, 0.0 ) );
      if ( nid != pid ) bd = max( bd, borderTier( pid, tA, tB, nid, provDark, hierK ) );
      nid = idAt( vMapUv - vec2( off.x, 0.0 ) );
      if ( nid != pid ) bd = max( bd, borderTier( pid, tA, tB, nid, provDark, hierK ) );
      nid = idAt( vMapUv + vec2( 0.0, off.y ) );
      if ( nid != pid ) bd = max( bd, borderTier( pid, tA, tB, nid, provDark, hierK ) );
      nid = idAt( vMapUv - vec2( 0.0, off.y ) );
      if ( nid != pid ) bd = max( bd, borderTier( pid, tA, tB, nid, provDark, hierK ) );
      // second ring widens only the realm-level borders, like the CPU dilate did
      if ( hierK > 0.5 && bd < 0.46 ) {
        vec2 off2 = off * 2.2;
        float bd2 = 0.0;
        nid = idAt( vMapUv + vec2( off2.x, 0.0 ) );
        if ( nid != pid ) bd2 = max( bd2, borderTier( pid, tA, tB, nid, 0.0, 1.0 ) );
        nid = idAt( vMapUv - vec2( off2.x, 0.0 ) );
        if ( nid != pid ) bd2 = max( bd2, borderTier( pid, tA, tB, nid, 0.0, 1.0 ) );
        nid = idAt( vMapUv + vec2( 0.0, off2.y ) );
        if ( nid != pid ) bd2 = max( bd2, borderTier( pid, tA, tB, nid, 0.0, 1.0 ) );
        nid = idAt( vMapUv - vec2( 0.0, off2.y ) );
        if ( nid != pid ) bd2 = max( bd2, borderTier( pid, tA, tB, nid, 0.0, 1.0 ) );
        if ( bd2 >= 0.46 ) bd = max( bd, bd2 * 0.72 );
      }
      if ( bd > 0.0 )
        diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.125, 0.098, 0.070 ), bd );

      // realm-coloured glow in the water hugging owned coasts (CK3-style);
      // radius is capped in texels so it stays a coastal rim at any zoom
      if ( provLand < 0.5 ) {
        vec2 r1 = min( off * 2.2, provTexel * 7.0 );
        vec2 r2 = min( off * 5.0, provTexel * 16.0 );
        vec4 rim = landWashAt( vMapUv + vec2( r1.x, 0.0 ) );
        if ( rim.a == 0.0 ) rim = landWashAt( vMapUv - vec2( r1.x, 0.0 ) );
        if ( rim.a == 0.0 ) rim = landWashAt( vMapUv + vec2( 0.0, r1.y ) );
        if ( rim.a == 0.0 ) rim = landWashAt( vMapUv - vec2( 0.0, r1.y ) );
        if ( rim.a == 0.0 ) rim = landWashAt( vMapUv + r1 );
        if ( rim.a == 0.0 ) rim = landWashAt( vMapUv - r1 );
        float rimK = 0.55;
        if ( rim.a == 0.0 ) {
          rimK = 0.30;
          rim = landWashAt( vMapUv + vec2( r2.x, 0.0 ) );
          if ( rim.a == 0.0 ) rim = landWashAt( vMapUv - vec2( r2.x, 0.0 ) );
          if ( rim.a == 0.0 ) rim = landWashAt( vMapUv + vec2( 0.0, r2.y ) );
          if ( rim.a == 0.0 ) rim = landWashAt( vMapUv - vec2( 0.0, r2.y ) );
        }
        if ( rim.a > 0.0 )
          diffuseColor.rgb = mix( diffuseColor.rgb, rim.rgb, rim.a * rimK );
      }

      if ( max( abs( mod( pid, 256.0 ) - hoverId.x ), abs( floor( pid / 256.0 ) - hoverId.y ) ) < 0.5 )
        diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 1.0 ), 0.16 * provLand );
      if ( max( abs( mod( pid, 256.0 ) - selId.x ), abs( floor( pid / 256.0 ) - selId.y ) ) < 0.5 )
        diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 1.0, 0.9, 0.58 ), 0.30 * provLand );

      // the game's flat-map paper: parchment grain over land (mottles the
      // political wash) and the muted sea sheet over open water
      float pgl = dot( pl, vec3( 0.3333 ) ) * 1.88;
      diffuseColor.rgb *= mix( 1.0, pgl, 0.30 * provLand * paperKL * ( 1.0 - washFlat * 0.8 ) );
      vec3 ps = texture2D( paperSea, vMapUv * vec2( 12.0, 6.0 ) ).rgb;
      float pgs = dot( ps, vec3( 0.3333 ) ) * 3.03;
      float seaF = ( 1.0 - provLand ) * paperKS * ( 1.0 - washFlat * 0.75 );
      diffuseColor.rgb *= mix( 1.0, pgs, seaF * 0.42 );
      diffuseColor.rgb = mix( diffuseColor.rgb, ps * 1.10, seaF * 0.15 );`)},this.terrain=new rn(f,E),this.scene.add(this.terrain);const w=new rn(new Hi(a*8,o*8),new Yr({color:new at("#42504f")}));w.geometry.rotateX(-Math.PI/2),w.position.y=-1.2,this.scene.add(w);const m=o*1.15/(2*Math.tan(this.camera.fov*Math.PI/180/2));this.fitDist=Math.max(m,a/(2*Math.tan(this.camera.fov*Math.PI/180/2)*this.camera.aspect)*1.06),this.scene.fog=new ka(h,this.fitDist*.75,this.fitDist*2.1),this.cam={tx:e.landCX-a/2,tz:e.landCY-o/2,dist:this.fitDist*.72,pitch:rs.degToRad(52),yaw:0},this.applyCamera(),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.invalidate()})}elevAtGrid(e,t){const{W:n,H:r}=this.world,s=Yn+1;let a=e/(n-1)*Yn,o=t/(r-1)*ii;a<0&&(a=0),o<0&&(o=0),a>Yn-.001&&(a=Yn-.001),o>ii-.001&&(o=ii-.001);const l=a|0,c=o|0,h=a-l,f=o-c,d=c*s+l,_=this.vertElev[d],x=this.vertElev[d+1],A=this.vertElev[d+s],p=this.vertElev[d+s+1];return _+(x-_)*h+(A-_)*f+(_-x-A+p)*h*f}elevAtWorld(e,t){return this.elevAtGrid(e+this.W/2,t+this.H/2)}applyCamera(){const e=this.cam,t=this.elevAtWorld(e.tx,e.tz)*.5,n=Math.cos(e.pitch),r=Math.sin(e.pitch);this.camera.position.set(e.tx+Math.sin(e.yaw)*n*e.dist,t+r*e.dist,e.tz+Math.cos(e.yaw)*n*e.dist),this.camera.lookAt(e.tx,t,e.tz),this.invalidate(),this.onCameraChange&&this.onCameraChange()}clampCamera(){const e=this.cam;e.dist=Math.max(70,Math.min(this.fitDist*1.25,e.dist)),e.pitch=Math.max(rs.degToRad(28),Math.min(rs.degToRad(80),e.pitch)),e.yaw=Math.max(-1,Math.min(1,e.yaw));const t=this.W*.62,n=this.H*.72;e.tx=Math.max(-t,Math.min(t,e.tx)),e.tz=Math.max(-n,Math.min(n,e.tz))}invalidate(){this.needsRender=!0}setPaperTextures(e,t){const n=new Fl,r=[[e,this.paperUniforms.paperLand,this.paperUniforms.paperKL],[t,this.paperUniforms.paperSea,this.paperUniforms.paperKS]];for(const[s,a,o]of r)n.load(s,l=>{l.wrapS=l.wrapT=Gr,l.minFilter=vn,l.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),a.value=l,o.value=1,this.invalidate()})}setHover(e){const t=this.hlUniforms.hoverId.value;e<0?t.set(-10,-10):t.set(e&255,e>>8&255),this.invalidate()}setSelected(e){const t=this.hlUniforms.selId.value;e<0?t.set(-10,-10):t.set(e&255,e>>8&255),this.invalidate()}setWash(e,t,n,r=!1){this.washData.set(e),this.washTex.needsUpdate=!0,this.modeUniforms.provDark.value=t,this.modeUniforms.hierK.value=n?1:0,this.modeUniforms.washFlat.value=r?1:0,this.invalidate()}render(){this.needsRender&&(this.needsRender=!1,this.renderer.render(this.scene,this.camera))}ndc(e,t){return new rt(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1)}pickPlane(e,t){const n=new Oo;n.setFromCamera(this.ndc(e,t),this.camera);const r=-n.ray.origin.y/n.ray.direction.y;return!isFinite(r)||r<=0?null:n.ray.origin.clone().addScaledVector(n.ray.direction,r)}pickGround(e,t){const n=new Oo;n.setFromCamera(this.ndc(e,t),this.camera);const r=n.ray.origin,s=n.ray.direction;if(s.y>=-1e-5)return null;const a=Math.max(0,(r.y-(this.maxElev+2))/-s.y),o=r.y/-s.y,l=320;let c=a,h=-1;for(let u=0;u<=l;u++){const b=a+(o+4-a)*u/l,R=r.x+s.x*b,v=r.y+s.y*b,T=r.z+s.z*b;if(v<=this.elevAtWorld(R,T)){h=b;break}c=b}if(h<0)return null;let f=c,d=h;for(let u=0;u<18;u++){const b=(f+d)/2,R=r.x+s.x*b,v=r.y+s.y*b,T=r.z+s.z*b;v<=this.elevAtWorld(R,T)?d=b:f=b}const _=r.x+s.x*d,x=r.z+s.z*d,A=_+this.W/2,p=x+this.H/2;return A<0||p<0||A>=this.W||p>=this.H?null:{gx:A,gy:p}}projectGrid(e,t,n=3){const r=new q(e-this.W/2,this.elevAtGrid(e,t)+n,t-this.H/2);return r.clone().sub(this.camera.position).dot(this.camera.getWorldDirection(new q))<=0?null:(r.project(this.camera),[(r.x*.5+.5)*window.innerWidth,(1-(r.y*.5+.5))*window.innerHeight])}}function Ur(i){const e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function Wm(i,e,t){let n=2.6,r=5;return i.startsWith("rock")?(n=1.4,r=3.8):/^b\d+_/.test(i)&&(i.endsWith("castle")?(n=4.4,r=4):i.endsWith("temple")?(n=3.9,r=4.4):(n=3.2,r=5)),Math.min(n/Math.max(.001,e),r/Math.max(.001,t))}function ul(i){let e=0;for(const t of i.parts)e=Math.max(e,t.hi[0]-t.lo[0],t.hi[2]-t.lo[2]);return e}async function Xm(i,e){const t=await fetch(i+"map/objects/models.json");if(!t.ok)throw new Error("models.json HTTP "+t.status);const n=await t.json(),r=new ji,s=e.W,a=e.H,o=new Fl,l=new Map,c=E=>{let w=l.get(E);return w||(w=o.load(i+"map/objects/"+E,()=>e.invalidate()),w.colorSpace=Kt,w.anisotropy=4,l.set(E,w)),w},h=new zu(16773853,9076848,1.9),f=new Gu(16772812,2.1);f.position.set(-.55,1,-.7),r.add(h,f);const d=new Map,_=E=>{let w=d.get(E);if(w)return w;w=[];for(const m of n.models[E].parts){const S=new Uint16Array(Ur(m.v).buffer.slice(0)),D=new Uint16Array(Ur(m.u).buffer.slice(0)),L=Ur(m.x).buffer.slice(0),N=S.length/3,B=new Float32Array(S.length);for(let k=0;k<3;k++){const I=m.lo[k],W=m.hi[k]-m.lo[k];for(let ne=0;ne<N;ne++)B[ne*3+k]=I+S[ne*3+k]/65535*W}const G=new Float32Array(D.length);for(let k=0;k<D.length;k++)G[k]=D[k]/65535;const U=new bn;U.setAttribute("position",new Jt(B,3)),U.setAttribute("uv",new Jt(G,2)),U.setIndex(new Jt(m.x32?new Uint32Array(L):new Uint16Array(L),1)),U.computeVertexNormals(),w.push(U)}return d.set(E,w),w},x=new Map,A=(E,w)=>{const m=E+(w?"|f":"");let S=x.get(m);return S||(S=new Iu({map:c(E),alphaTest:w?.45:.6,side:w?_n:Un}),x.set(m,S)),S},p=new Et,u=new di,b=new q(0,1,0),R=new q,v=new q;for(const[E,w]of Object.entries(n.inst)){const m=n.models[E];if(!m)continue;const S=Ur(w.d),D=w.n,L=!/^b\d+_/.test(E)&&!E.startsWith("rock"),N=Wm(E,m.hgt,ul(m)),G=_(E).map((U,k)=>{const I=new Co(U,A(m.parts[k].tex,L),D);return I.frustumCulled=!1,I});for(let U=0;U<D;U++){const k=U*6,I=S[k]|S[k+1]<<8,W=S[k+2]|S[k+3]<<8,ne=S[k+4]/255*Math.PI*2,oe=(.25+S[k+5]/255*2.75)*N,se=e.elevAtGrid(I,W);u.setFromAxisAngle(b,ne),p.compose(R.set(I-s/2,se,W-a/2),u,v.set(oe,oe,oe));for(const de of G)de.setMatrixAt(U,p)}for(const U of G)U.instanceMatrix.needsUpdate=!0,r.add(U)}const T=new Map;for(const E of n.spec)n.models[E.k]&&(T.get(E.k)??T.set(E.k,[]).get(E.k)).push(E);for(const[E,w]of T){const m=n.models[E],S=_(E),D=ul(m),L=4/Math.max(.001,m.hgt),N=Math.min(17/Math.max(.001,m.hgt),22/Math.max(.001,D)),B=S.map((G,U)=>{const k=new Co(G,A(m.parts[U].tex,!1),w.length);return k.frustumCulled=!1,k});w.forEach((G,U)=>{const k=Math.max(e.elevAtGrid(G.x,G.y),.15),I=Math.min(Math.max(G.s*.5*1.6,L),Math.max(L,N));u.setFromAxisAngle(b,G.r),p.compose(R.set(G.x-s/2,k,G.y-a/2),u,v.set(I,I,I));for(const W of B)W.setMatrixAt(U,p)});for(const G of B)G.instanceMatrix.needsUpdate=!0,r.add(G)}return e.scene.add(r),e.invalidate(),r}function Ns(i){const{np:e,pArea:t,pCX:n,pCY:r,W:s,H:a}=i;function o(u,b,R){const v=new Float64Array(u),T=new Float64Array(u),E=new Float64Array(u),w=new Float64Array(u),m=new Float64Array(u),S=new Float64Array(u);for(let L=0;L<e;L++){const N=b[L];if(N<0)continue;const B=t[L],G=n[L],U=r[L];v[N]+=G*B,T[N]+=U*B,E[N]+=B,w[N]+=G*G*B,m[N]+=U*U*B,S[N]+=G*U*B}const D=[];for(let L=0;L<u;L++){if(E[L]<1)continue;const N=v[L]/E[L],B=T[L]/E[L],G=w[L]/E[L]-N*N,U=m[L]/E[L]-B*B,k=S[L]/E[L]-N*B,I=.5*Math.atan2(2*k,G-U),W=G+U,ne=G*U-k*k,oe=Math.sqrt(Math.max(0,W*W/4-ne));D.push({x:N,y:B,angle:I,ext:Math.sqrt(Math.max(1,W/2+oe)),name:R[L],area:E[L],idx:L})}return D}const l=o(i.nKing,i.kingOf,i.kingName),c=o(i.nEmp,i.empOf,i.empName),h=new Float64Array(i.nCounty),f=new Float64Array(i.nCounty),d=new Float64Array(i.nCounty);for(let u=0;u<e;u++){const b=i.countyOf[u];b<0||(h[b]+=n[u]*t[u],f[b]+=r[u]*t[u],d[b]+=t[u])}const _=(u,b)=>{for(const R of u){const v=b[R.idx];v>=0&&d[v]>0&&(R.capX=h[v]/d[v],R.capY=f[v]/d[v])}};_(l,i.kCapital),_(c,i.eCapital);const x=i.seaLabels.map(u=>({x:u.x,y:u.y,name:u.n,area:u.a,ext:Math.sqrt(u.a)*.9})),A=[],p=Math.max(40,s*a/e*.25);for(let u=0;u<e;u++)t[u]<p||A.push({x:n[u],y:r[u],name:i.provName[u],ext:Math.hypot(i.pMaxX[u]-i.pMinX[u],i.pMaxY[u]-i.pMinY[u])/2,area:t[u]});return{king:l,emp:c,prov:A,sea:x,straits:i.straits}}const Fs='"Iowan Old Style",Palatino,Georgia,serif',Os=new Map;function qm(i,e){let t=Os.get(i);if(t!==void 0)return t&&t.complete&&t.naturalWidth?t:null;const n=new Image;return n.onload=()=>{e&&e()},n.onerror=()=>Os.set(i,null),n.src=i,Os.set(i,n),null}function Ym(i,e,t,n,r){const s=window.innerWidth,a=window.innerHeight;i.clearRect(0,0,s,a),i.textAlign="center",i.textBaseline="middle";const o=t.cam.dist,l=o>t.fitDist*.55,c=o<680,h=[],f=[];document.querySelectorAll(".panel").forEach(u=>{if(u.classList.contains("hidden"))return;const b=getComputedStyle(u);if(b.display==="none"||b.visibility==="hidden")return;const R=u.getBoundingClientRect();R.width&&R.height&&f.push(R)});const d=44;function _(u,b,R,v){if(u-R<d||u+R>s-d||b-v<d||b+v>a-d)return!0;for(const T of f)if(u+R>T.left-6&&u-R<T.right+6&&b+v>T.top-6&&b-v<T.bottom+6)return!0;return!1}function x(u,b,R,v){if(_(u,b,R,v))return!1;for(const T of h)if(Math.abs(u-T.x)<R+T.hw&&Math.abs(b-T.y)<v+T.hh)return!1;return!0}function A(u){const b=t.projectGrid(u.x,u.y);if(!b)return null;const R=Math.cos(u.angle)*u.ext,v=Math.sin(u.angle)*u.ext,T=t.projectGrid(u.x-R,u.y-v),E=t.projectGrid(u.x+R,u.y+v);if(!T||!E)return null;let w=Math.atan2(E[1]-T[1],E[0]-T[0]);return w>Math.PI/2&&(w-=Math.PI),w<-Math.PI/2&&(w+=Math.PI),{sx:b[0],sy:b[1],screenExt:Math.hypot(E[0]-T[0],E[1]-T[1]),rot:w}}function p(u,b,R,v,T,E,w){const m=A(u);if(!m||m.sx<-320||m.sx>s+320||m.sy<-200||m.sy>a+200)return;i.font=`600 ${b}px ${Fs}`;const S=u.name.toUpperCase();let D=0;const L=[];for(const I of S){const W=i.measureText(I).width;L.push(W),D+=W}let N=S.length>1?(T-D)/(S.length-1):0;N=Math.max(b*.08,Math.min(N,b*.9));const B=D+N*(S.length-1),G=B*.5*.8+8,U=b*.62+5;if(!x(m.sx,m.sy,G,U))return;h.push({x:m.sx,y:m.sy,hw:G,hh:U}),i.save(),i.translate(m.sx,m.sy),i.rotate(m.rot),i.globalAlpha=E,i.lineJoin="round";let k=-B/2;for(let I=0;I<S.length;I++){const W=S[I],ne=L[I],oe=k+ne/2;i.lineWidth=b*.2,i.strokeStyle=v,i.strokeText(W,oe,0),i.fillStyle=R,i.fillText(W,oe,0),k+=ne+N}if(i.restore(),w&&n){const I=qm(`${n}${w}_${u.idx}.png`,r??null);if(I){const W=Math.max(20,Math.min(b*1.25,46));let ne=m.sx,oe=m.sy-U-W-4;if(u.capX!==void 0&&u.capY!==void 0){const se=t.projectGrid(u.capX,u.capY,4);se&&(ne=se[0],oe=se[1]-W)}i.save(),i.globalAlpha=E,i.shadowColor="rgba(0,0,0,0.55)",i.shadowBlur=6,i.shadowOffsetY=2,i.drawImage(I,ne-W/2,oe,W,W),i.restore()}}}{i.save(),i.setLineDash([7,5]),i.lineWidth=1.6,i.strokeStyle="rgba(146, 44, 30, 0.75)";for(const u of e.straits){const b=t.projectGrid(u[0],u[1],1.5),R=t.projectGrid(u[2],u[3],1.5);if(!b||!R)continue;const v=Math.hypot(R[0]-b[0],R[1]-b[1]);v<7||v>620||Math.max(b[0],R[0])<0||Math.min(b[0],R[0])>s||Math.max(b[1],R[1])<0||Math.min(b[1],R[1])>a||(i.beginPath(),i.moveTo(b[0],b[1]),i.lineTo(R[0],R[1]),i.stroke())}i.restore()}if(l)for(const u of[...e.emp].sort((b,R)=>R.area-b.area)){const b=A(u);if(!b)continue;const R=Math.max(22,Math.min(b.screenExt*2*.15,56));p(u,R,"rgba(26,20,12,0.86)","rgba(238,228,198,0.4)",Math.min(b.screenExt*2*.9,s*.62),.9,"e")}{const u=l?.85:1;for(const b of[...e.king].sort((R,v)=>v.area-R.area)){const R=A(b);if(!R)continue;const v=R.screenExt*2;if(v<62)continue;let T=Math.max(13,Math.min(v*.18,40));T*.62>v*.95/Math.max(3,b.name.length)&&(T=Math.max(12,v*.95/(b.name.length*.62))),p(b,T,"rgba(26,20,12,0.94)","rgba(238,226,192,0.5)",Math.min(v*.86,s*.5),u,l?void 0:"k")}}{i.save(),i.textAlign="center",i.textBaseline="middle";for(const u of e.sea){const b=t.projectGrid(u.x,u.y,1);if(!b)continue;const[R,v]=b;if(R<-60||R>s+60||v<-40||v>a+40)continue;const T=t.projectGrid(u.x+u.ext,u.y,1),E=T?Math.abs(T[0]-R):0,w=Math.max(10,Math.min(E*.3,26));if(w<10)continue;i.font=`italic 600 ${w}px ${Fs}`;const m=i.measureText(u.name).width*.5+6,S=w*.6+3;x(R,v,m,S)&&(h.push({x:R,y:v,hw:m,hh:S}),i.globalAlpha=.78,i.lineWidth=w*.18,i.strokeStyle="rgba(26,34,34,0.5)",i.strokeText(u.name,R,v),i.fillStyle="rgba(205,221,218,0.92)",i.fillText(u.name,R,v))}i.globalAlpha=1,i.restore()}if(c){const u=Math.min(1,(680-o)/220);for(const b of[...e.prov].sort((R,v)=>v.area-R.area)){const R=t.projectGrid(b.x,b.y);if(!R)continue;const[v,T]=R;if(v<0||v>s||T<0||T>a)continue;const E=t.projectGrid(b.x+b.ext,b.y),w=E?Math.abs(E[0]-v):0,m=Math.max(9,Math.min(w*.32,16));if(m<9)continue;i.font=`600 ${m}px ${Fs}`;const S=i.measureText(b.name).width*.5+4,D=m*.6+3;x(v,T,S,D)&&(h.push({x:v,y:T,hw:S,hh:D}),i.globalAlpha=u,i.lineWidth=m*.28,i.strokeStyle="rgba(242,232,202,0.78)",i.strokeText(b.name,v,T),i.fillStyle="rgba(26,20,10,0.96)",i.fillText(b.name,v,T))}}i.globalAlpha=1}const tn="/ck3/world/",ye=i=>document.getElementById(i),fl=()=>new Promise(i=>requestAnimationFrame(()=>i())),$m=[["political","Political"],["province","Provinces"],["terrain","Terrain"],["elevation","Elevation"],["culture","Culture"],["faith","Faith"],["development","Development"]];async function Km(){const i=ye("loading"),e=async M=>{i.style.display="flex",i.textContent=M,await fl(),await fl()},t=new Promise(M=>{const C=new Image;C.onload=()=>M(C),C.onerror=()=>M(null),C.src=tn+"map/prov8.png"});await e("Loading the map…");const n=await tc(1420,tn);ye("date").textContent=`${n.date} · Anno Aldermarki`,await e("Shading the relief…"),nc(n),await e("Baking the map…");const r=ic(n);n.cloud=null;const s=document.createElement("canvas");s.width=n.W,s.height=n.H;const a=s.getContext("2d",{willReadFrequently:!0}),o=a.createImageData(n.W,n.H);let l="political",c=!1;es(n,r,l,o),a.putImageData(o,0,0),await e("Raising the terrain…");const h=await t,f=new Vm(n,s,document.body,h,r.snow),d=f.renderer.domElement;f.setPaperTextures(tn+"map/ui/paper_land.png",tn+"map/ui/paper_sea.png");{const M=document.createElement("img");M.src=tn+"map/ui/vignette.png",M.id="vig",M.alt="",document.body.appendChild(M)}const _=new Uint8Array(65536).fill(40);for(let M=0;M<n.np;M++)_[n.rawOf[M]]=n.devOf[M];const x=new Uint8Array(256*256*4);function A(M){x.fill(0);const{rawCounty:C,rawCult:X,rawFaith:Z,rawLand:ce,cDuchy:_e,dKing:Ge,kEmp:Ie,kColor:it,cultCol:xt,faithCol:Dt}=n,ve=M==="province"?0:.16,Ue=(ht,et,F)=>{const ae=et[0]*.3+et[1]*.59+et[2]*.11,we=ht*4;x[we]=et[0]+(ae-et[0])*ve,x[we+1]=et[1]+(ae-et[1])*ve,x[we+2]=et[2]+(ae-et[2])*ve,x[we+3]=F*255|0};if(M!=="terrain"&&M!=="elevation"){for(let ht=0;ht<65536;ht++)if(ce[ht])if(M==="political"){const et=C[ht],F=et>=0?_e[et]:-1,ae=F>=0?Ge[F]:-1;ae>=0&&Ue(ht,it[ae],.52)}else if(M==="province"){const et=ht*2654435761>>>0;Ue(ht,[80+(et&175),80+(et>>8&175),80+(et>>16&175)],.97)}else if(M==="culture"){const et=X[ht];et>=0&&Ue(ht,xt[et],.5)}else if(M==="faith"){const et=Z[ht];et>=0&&Ue(ht,Dt[et],.5)}else M==="development"&&Ue(ht,sc(_[ht]),.56)}const bt=M==="terrain"||M==="elevation";f.setWash(x,bt?0:M==="province"?.42:.1,M==="political"||M==="culture"||M==="faith"||M==="development",M==="province");const wt=document.getElementById("vig");wt&&(wt.style.display=M==="province"?"none":"");const mt=M==="elevation";mt!==c&&(c=mt,es(n,r,M,o),a.putImageData(o,0,0),f.texture.needsUpdate=!0),f.invalidate()}A(l);let p=null;Xm(tn,f).then(M=>{p=M;const C=ye("objs");C&&(C.className="on")}).catch(M=>console.warn("map objects unavailable:",M));const u=ye("labels"),b=u.getContext("2d");let R=Ns(n),v=!0;const T=Math.min(2,window.devicePixelRatio||1),E=()=>{u.width=window.innerWidth*T,u.height=window.innerHeight*T,u.style.width=window.innerWidth+"px",u.style.height=window.innerHeight+"px",b.setTransform(T,0,0,T,0,0),v=!0};E(),window.addEventListener("resize",E),f.onCameraChange=()=>{v=!0};const w=["No Holding","Castle","City","Temple","Tribe"],m=(M,...C)=>{const X=M.map(Z=>Z+".png");for(const Z of C){const ce=n.artPools[Z];ce&&X.push(...ce)}return X},S={castle:m(["holding_1","art_fortress"],"castle"),city:m(["art_city1","art_city2"],"city"),port:m(["art_port"],"port"),temple:m(["holding_3"],"temple"),tribal:m(["art_tribal"],"tribal"),terr:{[Be.BEACH]:m(["terr_beach","art_coast"],"coast","port"),[Be.PLAINS]:m(["terr_plains"],"plains"),[Be.FARM]:m(["terr_farm","art_farm"],"farm"),[Be.FOREST]:m(["terr_forest"],"forest","jungle"),[Be.HILLS]:m(["terr_hills"],"mountain"),[Be.DRY]:m(["terr_desert","art_desert","art_ruin","art_river"],"desert","ruin","river"),[Be.WET]:m(["terr_wet","art_swamp","art_lakes"],"swamp"),[Be.MTN]:m(["terr_mtn"],"mountain"),[Be.SNOW]:m(["terr_mtn"],"snow","mountain")}},D=new Map;function L(M){return D.get(M)??""}const N=M=>`<span class="swatch" style="background:rgb(${M[0]},${M[1]},${M[2]})"></span>`;let B=-1;function G(M){B=M,f.setSelected(M<0?-1:n.rawOf[M]);const C=ye("sel");if(M<0){C.style.display="none";return}ye("faith").classList.remove("open");const X=n.countyOf[M],Z=n.duchyOf[M],ce=n.kingOf[M],_e=n.empOf[M],Ge=n.cultureOf[M],Ie=n.faithOf[M],it=n.holdingOf[M];ye("selName").textContent=n.provName[M];let xt=X>=0?`${w[it]} in the County of ${n.countyName[X]}`:"Uncolonised wasteland";X>=0&&_e>=0&&n.eCapital[_e]===X?xt+=" · Imperial Capital":X>=0&&ce>=0&&n.kCapital[ce]===X&&(xt+=" · Royal Capital"),ye("selSub").textContent=xt;const Dt=[],ve=(F,ae)=>`<img class="coa" src="${tn}map/ui/coa/${F}_${ae}.png" alt="" onerror="this.remove()">`;Z>=0&&Dt.push(`<span class="chip" style="--cc:#8a7f66">${n.duchyName[Z]}</span>`),ce>=0&&Dt.push(`<span class="chip flagged rlink" data-realm="k:${ce}" title="About this realm">${ve("k",ce)}${n.kingName[ce]}</span>`),_e>=0&&Dt.push(`<span class="chip flagged rlink" data-realm="e:${_e}" title="About this realm">${ve("e",_e)}${n.empName[_e]}</span>`),ye("selChips").innerHTML=Dt.join(""),ye("selChips").querySelectorAll(".rlink").forEach(F=>{F.onclick=()=>{const[ae,we]=F.dataset.realm.split(":");de(ae,+we)}});const Ue=F=>!F||/^wasteland/i.test(F),bt=Ie>=0&&n.faithHasIcon[Ie]?`<img class="fic" src="${tn}map/ui/faith_${Ie}.png" alt="">`:Ie>=0?N(n.faithCol[Ie]):"";ye("selBody").innerHTML=`<div class="k">Terrain</div><div>${Qn[n.pTerr[M]]}</div>`+(Ge>=0&&!Ue(n.cultName[Ge])?`<div class="k">Culture</div><div>${N(n.cultCol[Ge])}<a class="flink" data-culture="${Ge}" title="About this culture">${n.cultName[Ge]}</a></div>`:"")+(Ie>=0&&!Ue(n.faithName[Ie])?`<div class="k">Faith</div><div>${bt}<a class="flink" data-faith="${Ie}" title="About this faith">${n.faithName[Ie]}</a></div>`:"")+`<div class="k">Development</div><div>${n.devOf[M]}</div>`,ye("selBody").querySelectorAll("a.flink").forEach(F=>{F.onclick=ae=>{ae.preventDefault(),F.dataset.faith?ne(+F.dataset.faith):F.dataset.culture&&oe(+F.dataset.culture)}});const wt=(F,ae)=>F&&ae?`<a class="flink" data-char="${F}" title="About this ruler">${ae}</a>`:ae??"",mt=[];if(X>=0){const F=n.countyHolder[X];mt.push(`<div><span class="k">County Holder:</span> <b>${Ue(F)?"uncolonised":wt(n.countyHolderKey[X],F)}</b></div>`)}if(ce>=0&&n.kingHolder[ce]&&mt.push(`<div><span class="k">${n.kingName[ce]}:</span> <b>${wt(n.kingHolderKey[ce],n.kingHolder[ce])}</b></div>`),_e>=0&&n.empHolder[_e]&&mt.push(`<div><span class="k">${n.empName[_e]}:</span> <b>${wt(n.empHolderKey[_e],n.empHolder[_e])}</b></div>`),ye("selHolders").innerHTML=mt.join(""),ye("selHolders").style.display=mt.length?"block":"none",ye("selHolders").querySelectorAll("a[data-char]").forEach(F=>{F.onclick=ae=>{ae.preventDefault(),se(F.dataset.char)}}),X>=0){const F=[];for(let ae=0;ae<n.np&&F.length<40;ae++)n.countyOf[ae]===X&&F.push(ae===M?`<b>${n.provName[ae]}</b>`:`${n.provName[ae]}${n.holdingOf[ae]?` (${w[n.holdingOf[ae]].toLowerCase()})`:""}`);ye("selBars").innerHTML='<span class="k">Baronies:</span> '+F.join(" · "),ye("selBars").style.display="block"}else ye("selBars").style.display="none";const ht=ye("selIllu"),et=L(M);et?(ht.style.display="block",ht.onerror=()=>{ht.style.display="none"},ht.src=`${tn}map/ui/${et}`):ht.style.display="none",C.style.display="block"}let U=null;function k(M){let C=-1,X=0;for(let Z=0;Z<n.np;Z++)n.countyOf[Z]===M&&n.pArea[Z]>X&&(X=n.pArea[Z],C=Z);C<0||(f.cam.tx=n.pCX[C]-n.W/2,f.cam.tz=n.pCY[C]-n.H/2,f.cam.dist=Math.min(f.cam.dist,320),f.clampCamera(),f.applyCamera(),G(C))}function I(M,C,X,Z){ye("sel").style.display="none",U=Z,ye("faithName").innerHTML=M,ye("faithSub").textContent=C,ye("faithBody").innerHTML=X,ye("faithMode").style.display=Z?"":"none",ye("faith").classList.add("open"),ye("faithBody").querySelectorAll("a[data-county]").forEach(ce=>{ce.onclick=_e=>{_e.preventDefault(),k(+ce.dataset.county)}}),ye("faithBody").querySelectorAll("a[data-char]").forEach(ce=>{ce.onclick=_e=>{_e.preventDefault(),se(ce.dataset.char)}}),ye("faithBody").querySelectorAll("a[data-culture]").forEach(ce=>{ce.onclick=_e=>{_e.preventDefault(),oe(+ce.dataset.culture)}}),ye("faithBody").querySelectorAll("a[data-realm]").forEach(ce=>{ce.onclick=_e=>{_e.preventDefault();const[Ge,Ie]=ce.dataset.realm.split(":");de(Ge,+Ie)}})}const W=(M,C)=>M&&C?`<a class="hsite" data-char="${M}">${C}</a>`:C??"vacant";function ne(M){const C=n.faithHasIcon[M]?`<img class="fic" src="${tn}map/ui/faith_${M}.png" alt="">`:N(n.faithCol[M]);let X=0;for(let _e=0;_e<n.np;_e++)n.faithOf[_e]===M&&X++;const Z=[n.faithRelig[M],n.faithAdh[M]?`followers: ${n.faithAdh[M]}s`:null,`${X} provinces`].filter(Boolean);let ce="";n.faithDesc[M]&&(ce+=`<div class="desc">${n.faithDesc[M]}</div>`),n.faithTenets[M].length&&(ce+=`<div class="sect"><span class="k">Tenets:</span> <b>${n.faithTenets[M].join("</b> · <b>")}</b></div>`),n.faithSites[M].length&&(ce+='<div class="sect"><span class="k">Holy sites:</span> '+n.faithSites[M].map(_e=>`<a class="hsite" data-county="${_e.c}">${_e.n}</a>`).join(" · ")+"</div>"),I(`${C}${n.faithName[M]}`,Z.join(" · "),ce,"faith")}function oe(M){let C=0;for(let ce=0;ce<n.np;ce++)n.cultureOf[ce]===M&&C++;const X=[n.cultHeritage[M]?`${n.cultHeritage[M]} heritage`:null,n.cultLang[M]?`speaks ${n.cultLang[M]}`:null,`${C} provinces`].filter(Boolean);let Z='<div class="grid" style="display:grid;grid-template-columns:auto 1fr;gap:4px 12px;font-size:13px">';n.cultEthos[M]&&(Z+=`<div class="k">Ethos</div><div><b>${n.cultEthos[M]}</b></div>`),n.cultMartial[M]&&(Z+=`<div class="k">Warriors</div><div>${n.cultMartial[M]}</div>`),Z+="</div>",n.cultTrad[M].length&&(Z+=`<div class="sect"><span class="k">Traditions:</span> <b>${n.cultTrad[M].join("</b> · <b>")}</b></div>`),I(`${N(n.cultCol[M])}${n.cultName[M]}`,X.join(" · "),Z,"culture")}function se(M){const C=n.chars[M];if(!C)return;const X=["Diplomacy","Martial","Stewardship","Intrigue","Learning"],Z=C.b?`born ${C.b}${C.dd?`, died ${C.dd}`:""} · year is ${n.date}`:"";let ce="";C.mo&&(ce+=`<div class="desc" style="font-style:italic">“${C.mo}”</div>`);const _e=C.sk.map((Ie,it)=>Ie==null?null:`<div class="k">${X[it]}</div><div><b>${Ie}</b></div>`).filter(Boolean).join("");if(_e&&(ce+=`<div class="grid" style="display:grid;grid-template-columns:auto 1fr;gap:3px 12px;font-size:13px;margin-top:6px">${_e}</div>`),C.tr.length){const Ie=C.tr.map((it,xt)=>{var Ue;const Dt=((Ue=C.ti)==null?void 0:Ue[xt])??-1;return`<span class="trchip">${Dt>=0?`<img class="tric" src="map/ui/tr_${Dt}.png" alt="">`:""}<b>${it}</b></span>`}).join(" ");ce+=`<div class="sect"><span class="k">Traits:</span> ${Ie}</div>`}const Ge=C.dy?`${C.n} of House ${C.dy}`:C.n;I(Ge,Z,ce,null)}function de(M,C){const X=`<img class="fic" src="${tn}map/ui/coa/${M}_${C}.png" alt="" onerror="this.remove()">`;let Z=0;const ce=M==="k"?n.kingOf:n.empOf;for(let Ge=0;Ge<n.np;Ge++)ce[Ge]===C&&Z++;let _e="";if(M==="k"){const Ge=n.kEmp[C],Ie=[Ge>=0?`part of ${n.empName[Ge]}`:"independent",`${Z} provinces`];_e+=`<div class="sect" style="padding-top:0"><span class="k">Ruler:</span> <b>${W(n.kingHolderKey[C],n.kingHolder[C])}</b></div>`,n.kCapital[C]>=0&&(_e+=`<div class="sect"><span class="k">Capital:</span> <a class="hsite" data-county="${n.kCapital[C]}">${n.countyName[n.kCapital[C]]}</a></div>`);const it=[];for(let xt=0;xt<n.nDuchy;xt++)n.dKing[xt]===C&&it.push(xt);it.length&&(_e+='<div class="sect"><span class="k">De jure duchies:</span> '+it.map(xt=>`<b>${n.duchyName[xt]}</b>`).join(" · ")+"</div>"),I(`${X}${n.kingName[C]}`,Ie.join(" · "),_e,"political")}else{const Ge=[`${Z} provinces`];_e+=`<div class="sect" style="padding-top:0"><span class="k">Ruler:</span> <b>${W(n.empHolderKey[C],n.empHolder[C])}</b></div>`,n.eCapital[C]>=0&&(_e+=`<div class="sect"><span class="k">Capital:</span> <a class="hsite" data-county="${n.eCapital[C]}">${n.countyName[n.eCapital[C]]}</a></div>`);const Ie=[];for(let it=0;it<n.nKing;it++)n.kEmp[it]===C&&Ie.push(it);Ie.length&&(_e+='<div class="sect"><span class="k">De jure kingdoms:</span> '+Ie.map(it=>`<a class="hsite" data-realm="k:${it}">${n.kingName[it]}</a>`).join(" · ")+"</div>"),I(`${X}${n.empName[C]}`,Ge.join(" · "),_e,"political")}}ye("faithClose").onclick=()=>{ye("faith").classList.remove("open"),B>=0&&(ye("sel").style.display="block")},ye("faithMode").onclick=()=>{U&&(l=U,[...ye("modes").children].forEach(M=>{M.className=M.dataset.mode===U?"on":""}),A(U))};const We=[Be.BEACH,Be.PLAINS,Be.FARM,Be.FOREST,Be.HILLS,Be.DRY,Be.WET,Be.MTN,Be.SNOW],Je=new Map,He=new Map;let j=!1,te=-1;const le=ye("edit"),De=ye("edName"),ze=ye("edTerr"),Ae=ye("edCult"),ut=ye("edFaith"),Xe=ye("edHold"),je=ye("edDev"),qe=ye("edArt"),Ye=ye("edPrev"),gt=ye("dledits"),ft=(M,C)=>{const X=document.createElement("option");return X.value=M,X.textContent=C,X};{for(const M of We)ze.appendChild(ft(String(M),Qn[M]));Ae.appendChild(ft("-1","(none)")),n.cultName.forEach((M,C)=>Ae.appendChild(ft(String(C),M))),ut.appendChild(ft("-1","(none)")),n.faithName.forEach((M,C)=>ut.appendChild(ft(String(C),M))),w.forEach((M,C)=>Xe.appendChild(ft(String(C),M)))}function At(M){const C=new Set;for(const[ce,_e]of D)ce!==M&&C.add(_e);qe.innerHTML="",qe.appendChild(ft("","(no picture)"));const X=new Set,Z=(ce,_e)=>{const Ge=document.createElement("optgroup");Ge.label=ce;for(const Ie of _e)X.has(Ie)||C.has(Ie)||(X.add(Ie),Ge.appendChild(ft(Ie,Ie.replace(/\.(png|jpg)$/,"").replace(/^(art_|terr_|holding_)/,"").replace(/_/g," "))));Ge.children.length&&qe.appendChild(Ge)};Z("Castles",S.castle),Z("Cities",S.city),Z("Ports",S.port),Z("Temples",S.temple),Z("Tribal",S.tribal);for(const ce of We)Z(Qn[ce],S.terr[ce]??[]);qe.value=D.get(M)??""}function vt(){gt.style.display=Je.size?"":"none",gt.textContent=`Save edits (${Je.size})`}function st(M){He.has(M)||He.set(M,{name:n.provName[M],terrain:n.pTerr[M],culture:n.cultureOf[M],faith:n.faithOf[M],holding:n.holdingOf[M],dev:n.devOf[M]});let C=Je.get(M);return C||(C={},Je.set(M,C)),C}function dt(M){const C=Je.get(M),X=He.get(M);!C||!X||(C.name===X.name&&delete C.name,C.terrain===X.terrain&&delete C.terrain,C.culture===X.culture&&delete C.culture,C.faith===X.faith&&delete C.faith,C.holding===X.holding&&delete C.holding,C.dev===X.dev&&delete C.dev,C.art===""&&delete C.art,Object.keys(C).length||Je.delete(M),vt())}function z(M,C){n.pTerr[M]=C;for(let X=n.pMinY[M];X<=n.pMaxY[M];X++)for(let Z=n.pMinX[M];Z<=n.pMaxX[M];Z++){const ce=X*n.W+Z;n.prov[ce]===M&&(n.terr[ce]=C)}rc(n,r,M),es(n,r,l,o),a.putImageData(o,0,0),f.texture.needsUpdate=!0,f.invalidate()}function Lt(){if(te<0)return;const M=L(te);if(!M){Ye.style.display="none";return}Ye.style.display="block",Ye.onerror=()=>{Ye.style.display="none"},Ye.src=`${tn}map/ui/${M}`}function Qe(M){if(te=M,f.setSelected(M<0?-1:n.rawOf[M]),M<0){le.style.display="none";return}ye("sel").style.display="none",ye("faith").classList.remove("open");const C=n.countyOf[M];ye("edTitle").textContent=n.provName[M],ye("edSub").textContent=(C>=0?`County of ${n.countyName[C]}`:"Uncolonised wasteland")+` · province ${n.rawOf[M]}`,De.value=n.provName[M],ze.value=String(n.pTerr[M]),Ae.value=String(n.cultureOf[M]),ut.value=String(n.faithOf[M]),Xe.value=String(n.holdingOf[M]),je.value=String(n.devOf[M]),At(M),Lt(),le.style.display="block"}De.oninput=()=>{if(te<0)return;const M=De.value.trim();if(!M)return;const C=st(te);n.provName[te]=M,ye("edTitle").textContent=M,C.name=M,dt(te)},De.onchange=()=>{R=Ns(n),v=!0},ze.onchange=()=>{if(te<0)return;const M=+ze.value,C=st(te);z(te,M),C.terrain=M,dt(te)},Ae.onchange=()=>{if(te<0)return;const M=+Ae.value,C=st(te);n.cultureOf[te]=M,n.rawCult[n.rawOf[te]]=M,C.culture=M,dt(te),A(l)},ut.onchange=()=>{if(te<0)return;const M=+ut.value,C=st(te);n.faithOf[te]=M,n.rawFaith[n.rawOf[te]]=M,C.faith=M,dt(te),A(l)},Xe.onchange=()=>{if(te<0)return;const M=+Xe.value,C=st(te);n.holdingOf[te]=M,C.holding=M,dt(te)},je.onchange=()=>{if(te<0)return;const M=Math.max(0,Math.min(100,Math.round(+je.value||0)));je.value=String(M);const C=st(te);n.devOf[te]=M,_[n.rawOf[te]]=M,C.dev=M,dt(te),A(l)},qe.onchange=()=>{if(te<0)return;const M=qe.value,C=st(te);M?D.set(te,M):D.delete(te),C.art=M,dt(te),Lt()},ye("edRevert").onclick=()=>{const M=te;if(M<0)return;const C=He.get(M);C&&(n.provName[M]=C.name,n.pTerr[M]!==C.terrain&&z(M,C.terrain),n.cultureOf[M]=C.culture,n.rawCult[n.rawOf[M]]=C.culture,n.faithOf[M]=C.faith,n.rawFaith[n.rawOf[M]]=C.faith,n.holdingOf[M]=C.holding,n.devOf[M]=C.dev,_[n.rawOf[M]]=C.dev),D.delete(M),Je.delete(M),vt(),R=Ns(n),v=!0,A(l),Qe(M)},ye("edClose").onclick=()=>{le.style.display="none",te=-1,f.setSelected(B>=0?n.rawOf[B]:-1)},ye("editbtn").onclick=()=>{j=!j,ye("editbtn").className=j?"on":"",j?(ye("sel").style.display="none",ye("faith").classList.remove("open"),B>=0&&Qe(B)):(le.style.display="none",te=-1)},gt.onclick=()=>{const M=[];for(const[X,Z]of Je){const ce={id:n.rawOf[X],province:n.provName[X]};Z.name!==void 0&&(ce.name=Z.name),Z.terrain!==void 0&&(ce.terrain=Qn[Z.terrain]),Z.culture!==void 0&&(ce.culture=Z.culture>=0?n.cultName[Z.culture]:null),Z.faith!==void 0&&(ce.faith=Z.faith>=0?n.faithName[Z.faith]:null),Z.holding!==void 0&&(ce.holding=w[Z.holding]),Z.dev!==void 0&&(ce.development=Z.dev),Z.art!==void 0&&(ce.picture=Z.art),M.push(ce)}const C={type:"map-edits",generated:new Date().toISOString(),edited:M.length,edits:M};gt.href=URL.createObjectURL(new Blob([JSON.stringify(C,null,2)],{type:"application/json"}))},vt();const P=(M,C)=>{const X=f.pickGround(M,C);return X?n.prov[(X.gy|0)*n.W+(X.gx|0)]:-1};let g=!1,V=!1,Y=!1,Q=-1,ue=null,he=[0,0],ee=[0,0];const ie=ye("tip"),ge=M=>{M!==Q&&(Q=M,f.setHover(M<0?-1:n.rawOf[M]))};d.addEventListener("contextmenu",M=>M.preventDefault()),d.addEventListener("pointerdown",M=>{if(Y=!1,ee=[M.clientX,M.clientY],he=[M.clientX,M.clientY],M.button===2||M.button===1)V=!0;else{g=!0;const C=f.pickPlane(M.clientX,M.clientY);ue=C?{x:C.x,z:C.z}:null}d.classList.add("drag"),d.setPointerCapture(M.pointerId)}),d.addEventListener("pointermove",M=>{if(Math.abs(M.clientX-ee[0])+Math.abs(M.clientY-ee[1])>4&&(Y=!0),g&&ue){const C=f.pickPlane(M.clientX,M.clientY);C&&(f.cam.tx+=ue.x-C.x,f.cam.tz+=ue.z-C.z,f.clampCamera(),f.applyCamera())}else if(V)f.cam.yaw-=(M.clientX-he[0])*.004,f.cam.pitch+=(M.clientY-he[1])*.003,f.clampCamera(),f.applyCamera();else{const C=P(M.clientX,M.clientY);if(ge(C),C>=0){const X=n.countyOf[C],Z=n.kingOf[C],ce=n.empOf[C],_e=n.holdingOf[C],Ge=_e?`<b>${n.provName[C]}</b> · ${w[_e]}`:`<b>${n.provName[C]}</b>`,Ie=X>=0?`${Qn[n.pTerr[C]]} · County of ${n.countyName[X]}`:Qn[n.pTerr[C]],it=X>=0&&n.countyHolder[X]?`<br><span style="color:#b6a988">Holder:</span> ${n.countyHolder[X]}`:"",xt=Z>=0?`${n.kingName[Z]} · <span style="color:#b6a988">${ce>=0?n.empName[ce]:""}</span>`:'<span style="color:#b6a988">Wasteland</span>';ie.innerHTML=`${Ge}<br>${Ie}${it}<br>${xt}`,ie.style.display="block";let Dt=M.clientX+16,ve=M.clientY+16;const Ue=ie.getBoundingClientRect();Dt+Ue.width>window.innerWidth-8&&(Dt=M.clientX-Ue.width-16),ve+Ue.height>window.innerHeight-8&&(ve=M.clientY-Ue.height-16),ie.style.left=Dt+"px",ie.style.top=ve+"px"}else ie.style.display="none"}he=[M.clientX,M.clientY]});const Re=M=>{const C=(g||V)&&!Y&&M.button!==2&&M.button!==1;if(g=!1,V=!1,ue=null,d.classList.remove("drag"),C){const X=P(M.clientX,M.clientY);j?Qe(X):G(X)}};d.addEventListener("pointerup",Re),d.addEventListener("pointerleave",()=>{ie.style.display="none",ge(-1)}),d.addEventListener("wheel",M=>{M.preventDefault();const C=f.pickPlane(M.clientX,M.clientY),X=f.cam.dist;if(f.cam.dist*=Math.exp(M.deltaY*.0011),f.clampCamera(),C){const Z=1-f.cam.dist/X;f.cam.tx+=(C.x-f.cam.tx)*Z,f.cam.tz+=(C.z-f.cam.tz)*Z,f.clampCamera()}f.applyCamera()},{passive:!1});{const M=ye("search"),C=ye("results"),X=ve=>ve.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),Z=[],ce=(ve,Ue,bt=320)=>{f.cam.tx=ve-n.W/2,f.cam.tz=Ue-n.H/2,f.cam.dist=Math.min(f.cam.dist,bt),f.clampCamera(),f.applyCamera()},_e=(ve,Ue)=>{let bt=-1,wt=0;for(let mt=0;mt<n.np;mt++)ve[mt]===Ue&&n.pArea[mt]>wt&&(wt=n.pArea[mt],bt=mt);return bt},Ge=(ve,Ue,bt)=>{let wt=0,mt=0,ht=0;for(let et=0;et<n.np;et++)ve[et]===Ue&&(wt+=n.pCX[et]*n.pArea[et],mt+=n.pCY[et]*n.pArea[et],ht+=n.pArea[et]);ht&&ce(wt/ht,mt/ht,bt)};for(let ve=0;ve<n.np;ve++)Z.push({key:X(n.provName[ve]),name:n.provName[ve],type:"Province",go:()=>{ce(n.pCX[ve],n.pCY[ve],260),G(ve)}});n.countyName.forEach((ve,Ue)=>Z.push({key:X(ve),name:ve,type:"County",go:()=>{const bt=_e(n.countyOf,Ue);bt>=0&&(ce(n.pCX[bt],n.pCY[bt],300),G(bt))}})),n.duchyName.forEach((ve,Ue)=>Z.push({key:X(ve),name:ve,type:"Duchy",go:()=>Ge(n.duchyOf,Ue,420)})),n.kingName.forEach((ve,Ue)=>Z.push({key:X(ve),name:ve,type:"Kingdom",go:()=>{Ge(n.kingOf,Ue,700),de("k",Ue)}})),n.empName.forEach((ve,Ue)=>Z.push({key:X(ve),name:ve,type:"Empire",go:()=>{Ge(n.empOf,Ue,1100),de("e",Ue)}})),n.cultName.forEach((ve,Ue)=>{/^wasteland/i.test(ve)||Z.push({key:X(ve),name:ve,type:"Culture",go:()=>oe(Ue)})}),n.faithName.forEach((ve,Ue)=>{/^wasteland/i.test(ve)||Z.push({key:X(ve),name:ve,type:"Faith",go:()=>ne(Ue)})}),n.seaLabels.forEach(ve=>Z.push({key:X(ve.n),name:ve.n,type:"Sea",go:()=>ce(ve.x,ve.y,900)}));let Ie=[],it=-1;const xt=()=>{C.innerHTML=Ie.map((ve,Ue)=>`<div class="res${Ue===it?" hot":""}" data-i="${Ue}"><span>${ve.name}</span><span class="t">${ve.type}</span></div>`).join(""),C.style.display=Ie.length?"block":"none",C.querySelectorAll(".res").forEach(ve=>{ve.onmousedown=Ue=>{Ue.preventDefault(),Dt(+ve.dataset.i)}})},Dt=ve=>{const Ue=Ie[ve];Ue&&(M.value=Ue.name,Ie=[],it=-1,xt(),M.blur(),Ue.go())};M.oninput=()=>{const ve=X(M.value.trim());if(it=-1,ve.length<2){Ie=[],xt();return}const Ue=[],bt=[];for(const wt of Z)if(wt.key.startsWith(ve)?Ue.push(wt):wt.key.includes(ve)&&bt.push(wt),Ue.length>=12)break;Ie=[...Ue,...bt].slice(0,12),xt()},M.onkeydown=ve=>{ve.key==="ArrowDown"?(it=Math.min(Ie.length-1,it+1),xt(),ve.preventDefault()):ve.key==="ArrowUp"?(it=Math.max(0,it-1),xt(),ve.preventDefault()):ve.key==="Enter"?(Dt(it>=0?it:0),ve.preventDefault()):ve.key==="Escape"&&(Ie=[],xt(),M.blur()),ve.stopPropagation()},M.onblur=()=>setTimeout(()=>{Ie=[],xt()},150)}const xe=()=>document.activeElement instanceof HTMLInputElement||document.activeElement instanceof HTMLSelectElement,fe={};window.addEventListener("keydown",M=>{xe()||(fe[M.key.toLowerCase()]=!0)}),window.addEventListener("keyup",M=>{fe[M.key.toLowerCase()]=!1}),setInterval(()=>{const M=f.cam.dist*.02;let C=!1;(fe.w||fe.arrowup)&&(f.cam.tz-=M,C=!0),(fe.s||fe.arrowdown)&&(f.cam.tz+=M,C=!0),(fe.a||fe.arrowleft)&&(f.cam.tx-=M,C=!0),(fe.d||fe.arrowright)&&(f.cam.tx+=M,C=!0),C&&(f.clampCamera(),f.applyCamera())},16);const Le=ye("modes");for(const[M,C]of $m){const X=document.createElement("button");X.textContent=C,X.dataset.mode=M,M===l&&(X.className="on"),X.onclick=()=>{l=M,[...Le.children].forEach(Z=>{Z.className=Z.dataset.mode===M?"on":""}),A(M)},Le.appendChild(X)}const Fe=ye("tilt");Fe.oninput=()=>{ye("tiltv").textContent=Fe.value,f.cam.pitch=(24+ +Fe.value/100*56)*Math.PI/180,f.clampCamera(),f.applyCamera()},ye("reset").onclick=()=>{f.cam.tx=n.landCX-n.W/2,f.cam.tz=n.landCY-n.H/2,f.cam.dist=f.fitDist*.72,f.cam.yaw=0,f.clampCamera(),f.applyCamera()},ye("zin").onclick=()=>{f.cam.dist/=1.3,f.clampCamera(),f.applyCamera()},ye("zout").onclick=()=>{f.cam.dist*=1.3,f.clampCamera(),f.applyCamera()},ye("clearSel").onclick=()=>G(-1),ye("center").onclick=()=>{B<0||(f.cam.tx=n.pCX[B]-n.W/2,f.cam.tz=n.pCY[B]-n.H/2,f.cam.dist=Math.min(f.cam.dist,420),f.clampCamera(),f.applyCamera())};let ke=!0;ye("objs").onclick=()=>{p&&(ke=!ke,ye("objs").className=ke?"on":"",f.invalidate())},ye("hideui").onclick=()=>{document.querySelectorAll(".panel").forEach(C=>{C.id!=="hideui"&&C.classList.toggle("hidden")});const M=ye("hideui");M.textContent=M.textContent==="Hide UI"?"Show UI":"Hide UI",v=!0},ye("dl").onclick=()=>{f.render();const M=document.createElement("canvas");M.width=d.width,M.height=d.height;const C=M.getContext("2d");C.drawImage(d,0,0),C.drawImage(u,0,0,M.width,M.height),ye("dl").href=M.toDataURL("image/png")},ye("dljson").onclick=()=>{const M=[];for(let X=0;X<n.np;X++){const Z=n.countyOf[X],ce=n.duchyOf[X],_e=n.kingOf[X],Ge=n.empOf[X],Ie=n.cultureOf[X],it=n.faithOf[X];M.push({id:X,name:n.provName[X],terrain:Qn[n.pTerr[X]],county:Z>=0?n.countyName[Z]:null,duchy:ce>=0?n.duchyName[ce]:null,kingdom:_e>=0?n.kingName[_e]:null,empire:Ge>=0?n.empName[Ge]:null,culture:Ie>=0?n.cultName[Ie]:null,faith:it>=0?n.faithName[it]:null,holding:w[n.holdingOf[X]],holder:Z>=0?n.countyHolder[Z]:null,development:n.devOf[X],neighbours:[...n.padj[X]]})}const C={provinces:n.np,counties:n.nCounty,duchies:n.nDuchy,kingdoms:n.nKing,empires:n.nEmp,realms:M};ye("dljson").href=URL.createObjectURL(new Blob([JSON.stringify(C)],{type:"application/json"}))};const O=()=>{if(p){const M=ke&&f.cam.dist<f.fitDist*.55;p.visible!==M&&(p.visible=M,f.invalidate())}f.render(),v&&(v=!1,Ym(b,R,f,tn+"map/ui/coa/",()=>{v=!0})),requestAnimationFrame(O)};requestAnimationFrame(O),i.style.display="none";const pe=f.terrain.geometry.attributes.position;let re=1e9,me=-1e9;for(let M=0;M<pe.count;M++){const C=pe.getY(M);C<re&&(re=C),C>me&&(me=C)}window.__APP={scene:f,world:n,selectProvince:G,showFaith:ne,showCulture:oe,showChar:se,showRealm:de,openEditor:Qe,edits:Je,info:{webgl2:f.renderer.getContext()instanceof WebGL2RenderingContext,rendererType:"WebGLRenderer",isPerspectiveCamera:f.camera.isPerspectiveCamera===!0,geometryType:f.terrain.geometry.type,terrainMinY:re,terrainMaxY:me,provinces:n.np,kingdoms:n.nKing,empires:n.nEmp}},console.log("3D map ready:",JSON.stringify(window.__APP.info))}Km().catch(i=>{console.error("boot failed",i);const e=document.getElementById("loading");e&&(e.textContent="Load error — see console")});
