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

type tierCurrencies = {
  rariry: rarity;
  tradeable: boolean;
  tiers: tiers[];
  name: string;
  maxAmount: number;
  description: string;
  bagTiers: bagTiers[];
};

type upgrades = {
  configName: string;
  category: "Upgrades";
  collection: "Upgrades";
  rawData: any;
  tierPowers: number[];
  tierCosts: number[];
  icon: string | null;
  tierCurrencies: tierCurrencies[];
};

export default upgrades;
