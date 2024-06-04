import Rarity from "../rarity";

type Tiers = {
  rarity: Rarity;
  power: number;
  description: string;
  time: number;
  icon: string;
  name: string;

  rap: number | null;
  tier: number;
};

type Potions = {
  configName: string;
  category: "Potions";
  collection: "Potions";
  baseTier: number;
  maxTier: number;
  primaryColor: string;
  secondaryColor: string;
  tiers: Tiers[];

  rawData: any;
};

export default Potions;
