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

type TierCurrencies = {
  rariry: Rarity;
  tradeable: boolean;
  tiers: Tiers[];
  name: string;
  maxAmount: number;
  description: string;
  bagTiers: BagTiers[];
};

type Upgrades = {
  configName: string;
  category: "Upgrades";
  collection: "Upgrades";
  rawData: any;
  tierPowers: number[];
  tierCosts: number[];
  icon: string | null;
  tierCurrencies: TierCurrencies[];
};

export default Upgrades;
