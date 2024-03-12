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
};

type charms = {
  category: "Charms";
  collection: "Charms";
  baseTier: number;
  maxTier: number;
  icon: string;

  tiers: tiers[];
  rap: number | null;
};

export default charms;
