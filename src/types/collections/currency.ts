type rainData = {
  lightEmission: number;
};

type tiers = {
  orbImage: string;
  imageOutline: string;
  order: number;
  isBottom: boolean;
  value: number;
  name: string;
  tinyImage: string;

  rainData?: rainData;
};

type bagTiers = {
  value: number;
  image: string;
};

type rarity = {
  number: number;
  name: string;
  announce: boolean;
};

type currency = {
  category: "Currency";
  collection: "Currency";
  name: string;
  isWorldCurrency?: boolean;
  description: string;
  tradeable: boolean;
  maxAmount: number;

  rarity: rarity;
  tiers: tiers[];
  bagTiers: bagTiers;
};

export default currency;
