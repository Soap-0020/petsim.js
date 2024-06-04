import Rarity from "../rarity";

type Tiers = {
  description: string;
  name: string;
  power: number;
  rarity: Rarity;

  tier: number;
  rap: number | null;
};

type Charms = {
  category: "Charms";
  collection: "Charms";
  baseTier: number;
  maxTier: number;
  icon: string;
  configName: string;

  tiers: Tiers[];
  rawData: any;
};

export default Charms;
