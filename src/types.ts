/** Terrain categories shared by the preprocessing script and the renderer. */
export const T = {
  DEEP: 0, OCEAN: 1, SHALLOW: 2, BEACH: 3, PLAINS: 4, FARM: 5,
  FOREST: 6, HILLS: 7, DRY: 8, WET: 9, MTN: 10, SNOW: 11,
} as const;

export const TCOL: Record<number, [number, number, number]> = {
  [T.DEEP]: [54, 70, 68], [T.OCEAN]: [70, 88, 84], [T.SHALLOW]: [94, 110, 102],
  [T.BEACH]: [186, 174, 138], [T.PLAINS]: [138, 148, 98], [T.FARM]: [172, 162, 96],
  [T.FOREST]: [84, 110, 76], [T.HILLS]: [138, 128, 92], [T.DRY]: [188, 164, 116],
  [T.WET]: [100, 120, 100], [T.MTN]: [128, 116, 102], [T.SNOW]: [222, 222, 220],
};

export const TNAME: Record<number, string> = {
  [T.DEEP]: 'Ocean', [T.OCEAN]: 'Ocean', [T.SHALLOW]: 'Coastal waters', [T.BEACH]: 'Coast',
  [T.PLAINS]: 'Plains', [T.FARM]: 'Farmland', [T.FOREST]: 'Forest', [T.HILLS]: 'Hills',
  [T.DRY]: 'Drylands', [T.WET]: 'Wetlands', [T.MTN]: 'Mountains', [T.SNOW]: 'Snow',
};

export const isSea = (t: number): boolean => t <= T.SHALLOW;

/** Darker, muted, earthy realm palette (neighbours coloured distinctly). */
export const REALM_COLORS: [number, number, number][] = [
  [96, 120, 84], [118, 102, 146], [172, 118, 76], [140, 142, 90], [144, 102, 102], [94, 136, 142],
  [154, 84, 90], [94, 114, 154], [124, 90, 138], [164, 142, 84], [84, 132, 114], [158, 100, 80],
  [108, 102, 146], [80, 118, 88], [168, 130, 102], [128, 90, 100], [102, 138, 142], [154, 130, 74],
  [88, 108, 140], [148, 108, 140], [118, 146, 98], [150, 92, 108], [92, 122, 100], [166, 118, 88],
];

export type MapMode =
  | 'political' | 'province' | 'terrain' | 'elevation'
  | 'culture' | 'faith' | 'development';

/** A title holder's character card (from history/characters). */
export interface CharCard {
  n: string; dy: string | null; mo: string | null; f: number;
  sk: (number | null)[]; tr: string[];
  /** icon index per trait (docs/map/ui/tr_{i}.png), -1 = no icon */
  ti?: number[];
  b: number | null; dd: number | null;
}

/** The fully built world model the renderer consumes. */
export interface World {
  W: number; H: number; N: number;
  /** normalised height 0..1 per cell */
  height: Float32Array;
  /** height value (0..1) that sits at the waterline; land below it is clamped to 0 elevation */
  seaBase: number;
  terr: Uint8Array;
  land: Uint8Array;
  /** compact province id per cell, -1 for water */
  prov: Int32Array;
  /** baked relief shading multiplier per cell */
  shade: Float32Array;
  /** low-frequency cloud field (freed after base bake) */
  cloud: Float32Array | null;

  np: number;
  provName: string[];
  pTerr: Uint8Array;
  pArea: Int32Array;
  pCX: Float64Array; pCY: Float64Array;
  pMinX: Int32Array; pMinY: Int32Array; pMaxX: Int32Array; pMaxY: Int32Array;
  padj: Set<number>[];
  /** real river mask per cell (from map_data/rivers.png) */
  river: Uint8Array;
  /** land-side Chamfer distance to the sea, in cells (0 for water) */
  coastD: Uint8Array;

  /** REAL de jure hierarchy from the mod's landed_titles (-1 = wasteland) */
  nCounty: number; nDuchy: number; nKing: number; nEmp: number;
  countyOf: Int32Array; duchyOf: Int32Array; kingOf: Int32Array; empOf: Int32Array;
  countyName: string[]; duchyName: string[]; kingName: string[]; empName: string[];
  kColor: [number, number, number][];
  /** real title holders at the mod's default bookmark (null = vacant) */
  countyHolder: (string | null)[]; duchyHolder: (string | null)[];
  kingHolder: (string | null)[]; empHolder: (string | null)[];
  /** holding type per province: 0 none, 1 castle, 2 city, 3 temple, 4 tribal */
  holdingOf: Uint8Array;
  faithHasIcon: boolean[];
  /** faith lore from the mod: religion family, adherent name, description,
   *  tenets, holy sites (county-table indices) */
  faithRelig: (string | null)[]; faithAdh: (string | null)[];
  faithDesc: (string | null)[]; faithTenets: string[][];
  faithSites: { n: string; c: number }[][];
  /** character cards for title holders, keyed by history character id */
  chars: Record<string, CharCard>;
  countyHolderKey: (string | null)[]; duchyHolderKey: (string | null)[];
  kingHolderKey: (string | null)[]; empHolderKey: (string | null)[];
  /** culture pillars & traditions from common/culture */
  cultEthos: (string | null)[]; cultHeritage: (string | null)[];
  cultLang: (string | null)[]; cultMartial: (string | null)[];
  cultTrad: string[][];
  /** the bookmark year holders are evaluated at */
  date: string;
  /** scenic art pools for the province panel (bucket -> ui file names) */
  artPools: Record<string, string[]>;
  /** capital county index per kingdom / empire (-1 = none declared) */
  kCapital: Int32Array; eCapital: Int32Array;
  /** named seas: label anchors from the sea provinces */
  seaLabels: { x: number; y: number; n: string; a: number }[];
  /** strait/sea-crossing segments in grid px: [x1,y1,x2,y2] */
  straits: number[][];

  /** raw definition.csv id per compact province, and per grid cell */
  rawOf: Int32Array; rawGrid: Uint16Array;
  /** per-raw-id tables over ALL meta provinces (index = raw id, -1 = none) */
  rawCounty: Int32Array; rawCult: Int32Array; rawFaith: Int32Array;
  rawLand: Uint8Array;
  /** de jure chain tables: county->duchy, duchy->kingdom, kingdom->empire */
  cDuchy: Int32Array; dKing: Int32Array; kEmp: Int32Array;
  /** real cultures & faiths from the mod's history (-1 = none) */
  cultureOf: Int32Array; faithOf: Int32Array;
  nCult: number; nFaith: number;
  cultName: string[]; faithName: string[];
  cultCol: [number, number, number][]; faithCol: [number, number, number][];
  devOf: Uint8Array;

  landCX: number; landCY: number;
  seed: number;
}
