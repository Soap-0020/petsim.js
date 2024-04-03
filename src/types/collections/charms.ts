import rarity from "../rarity";

type tiers = {
  description: string;
  name: string;
  power: number;
  rarity: rarity;

  tier: number;
  rap: number | null;
};

type charms = {
  category: "Charms";
  collection: "Charms";
  baseTier: number;
  maxTier: number;
  icon: string;
  configName: string;

  tiers: tiers[];
  rawData: any;
};

export default charms;
