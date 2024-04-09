import rarity from "../rarity";

type tiers = {
  rarity: rarity;
  power: number;
  description: string;
  time: number;
  icon: string;
  name: string;

  rap: number | null;
  tier: number;
};

type potions = {
  configName: string;
  category: "Potions";
  collection: "Potions";
  baseTier: number;
  maxTier: number;
  primaryColor: string;
  secondaryColor: string;
  tiers: tiers[];

  rawData: any;
};

export default potions;
