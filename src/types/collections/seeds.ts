import rarity from "../rarity";

type loot = {
  item: { id: string; amount: number; tier: number | null; maxAmount: number };
  weight: number;
};

type seeds = {
  category: "Seeds";
  configName: string;
  collection: "Seeds";
  icon: string;
  growTime: number;
  description: string;
  rarity: rarity;
  name: string;

  loot: loot[];
  rawData: any;
  rap: number | null;
};

export default seeds;
