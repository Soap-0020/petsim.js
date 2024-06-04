import Rarity from "../rarity";

type ProductIds = {
  [index: string]: number | undefined;
};

type Pets = {
  name: string;
  chance: number;
  notification: string | null;
};

type Eggs = {
  collection: "Eggs";
  category: string;

  name: string;
  configName: string;
  rarity: Rarity | null;
  disableGold: boolean;
  disableRainbow: boolean;
  rainbowChance: number | null;
  shinyChance: number | null;
  goldChance: number | null;
  disableModifiers: boolean;
  icon: string;
  pets: Pets[];

  eggNumber: number | null;
  worldNumber: number | null;
  currency: string | null;

  productIds: ProductIds;
  rap: number | null;
  overrideCost: number | null;
  isCustomEgg: boolean;

  rawData: any;
};

export default Eggs;
