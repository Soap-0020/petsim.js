import rarity from "../rarity";

type rainData = {
  lightEmission: number | null;
};

type tiers = {
  orbImage: string;
  imageOutline: string;
  order: number;
  isBottom: boolean;
  value: number;
  name: string;
  tinyImage: string;
  rainData: rainData;
};

type bagTiers = {
  value: number;
  image: string;
};

type currency = {
  category: "Currency";
  collection: "Currency";
  name: string;
  isWorldCurrency: boolean;
  description: string;
  tradeable: boolean;
  maxAmount: number;
  configName: string;

  rarity: rarity;
  tiers: tiers[];
  bagTiers: bagTiers[];

  rawData: any;
};

export default currency;
