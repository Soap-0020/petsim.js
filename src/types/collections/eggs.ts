type productIds = {
  [index: string]: number | undefined;
};

type pets = {
  name: string;
  chance: number;
  notification: string | null;
};

type rarity = {
  number: number;
  name: string;
  announce: boolean;
};

type eggs = {
  collection: "Eggs";
  category: string;

  name: string;
  configName: string;
  rarity: rarity | null;
  disableGold: boolean;
  disableRainbow: boolean;
  rainbowChance: number | null;
  shinyChance: number | null;
  goldChance: number | null;
  disableModifiers: boolean;
  icon: string;
  pets: pets[];

  eggNumber: number | null;
  worldNumber: number | null;
  currency: string | null;

  productIds: productIds;
  rap: number | null;
  overrideCost: number | null;
  isCustomEgg: boolean;
};

export default eggs;
