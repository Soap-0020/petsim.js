type rarity = {
  number: number;
  name: string;
  announce: boolean;
};

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
};

export default charms;
