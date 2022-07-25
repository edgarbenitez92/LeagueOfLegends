export interface Data {
  type: Type;
  name: string;
  format: string;
  version: string;
  data: { [key: string]: Champion };
}

export interface Champion {
  version?: string;
  id: string;
  key?: string;
  name: string;
  title: string;
  blurb?: string;
  lore: string;
  spells: Spell[];
  skins: Skin[];
  passive?: string;
  info?: Info;
  image?: Image;
  tags: string;
  partype?: string;
  stats?: { [key: string]: number };
  miniImage?: string;
}

export interface Skin {
  urlImg: string;
  num: number;
  name: string;
}

export interface Spell {
  name: string;
  description: string;
  image: Image;
}

export interface Image {
  full: string;
  sprite: Sprite;
  group: Type;
  x: number;
  y: number;
  w: number;
  h: number;
}

export enum Type {
  Champion = 'champion',
}

export enum Sprite {
  Champion0PNG = 'champion0.png',
  Champion1PNG = 'champion1.png',
  Champion2PNG = 'champion2.png',
  Champion3PNG = 'champion3.png',
  Champion4PNG = 'champion4.png',
  Champion5PNG = 'champion5.png',
}

export interface Info {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

export enum Tag {
  Assassin = 'Assassin',
  Fighter = 'Fighter',
  Mage = 'Mage',
  Marksman = 'Marksman',
  Support = 'Support',
  Tank = 'Tank',
}

// export enum Version {
//     The11101 = "11.10.1",
// }
