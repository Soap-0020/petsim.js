import Rarity from "../rarity";

type RainData = {
  lightEmission: number | null;
};

type Tiers = {
  orbImage: string;
  imageOutline: string;
  order: number;
  isBottom: boolean;
  value: number;
  name: string;
  tinyImage: string;
  rainData: RainData;
};

type BagTiers = {
  value: number;
  image: string;
};

type Currency = {
  category: "Currency";
  collection: "Currency";
  name: string;
  isWorldCurrency: boolean;
  description: string;
  tradeable: boolean;
  maxAmount: number;
  configName: string;

  rarity: Rarity;
  tiers: Tiers[];
  bagTiers: BagTiers[];

  rawData: any;
};

export default Currency;
