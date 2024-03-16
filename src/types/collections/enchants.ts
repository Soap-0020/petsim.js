type rarity = {
  number: number;
  name: string;
  announce: boolean;
};

type tiers = {
  rarity: rarity;
  power: number;
  description: string;
  icon: string;
  name: string;
  tier: number;

  rap: number | null;
};

type enchants = {
  category: string;
  collection: "Enchants";
  configName: string;
  baseTier: number;
  maxTier: number;
  diminishPowerThreshold: number | null;
  productId: number | null;

  tiers: tiers[];
};

export default enchants;
