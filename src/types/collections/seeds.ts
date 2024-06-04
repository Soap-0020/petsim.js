import Rarity from "../rarity";

type Loot = {
  item: { id: string; amount: number; tier: number | null; maxAmount: number };
  weight: number;
};

type Seeds = {
  category: "Seeds";
  configName: string;
  collection: "Seeds";
  icon: string;
  growTime: number;
  description: string;
  rarity: Rarity;
  name: string;

  loot: Loot[];
  rawData: any;
  rap: number | null;
};

export default Seeds;
