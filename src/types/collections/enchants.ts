import Rarity from "../rarity";

type Tiers = {
  rarity: Rarity;
  power: number;
  description: string;
  icon: string;
  name: string;
  tier: number;

  rap: number | null;
};

type Enchants = {
  category: string;
  collection: "Enchants";
  configName: string;
  baseTier: number;
  maxTier: number;
  diminishPowerThreshold: number | null;
  productId: number | null;

  tiers: Tiers[];
  rawData: any;
};

export default Enchants;
