import { Champion, Skin, Tag } from '../interfaces/champions';

const BaronSkins: Skin[] = [
  { urlImg: './assets/images/baronNashorSplash.jpg', name: 'Baron Nashor in Game', num: 1 },
  { urlImg: './assets/images/baronNashorInGame.jpg', name: 'Baron Nashor in Game', num: 2 },
];

export const Baron: Champion = {
  id: 'Baron',
  name: 'Baron Nashor',
  title: 'The final boss most powerful',
  lore: "Maybe you are lost. You shouldn't walk into the jungle alone. Please return to your battle line.",
  spells: [],
  skins: BaronSkins,
  tags: Tag.Assassin,
};
