import rarity from "../rarity";

type ultimates = {
  category: "Ultimates";
  collection: "Ultimates";
  rarity: rarity;
  tierToLevel: number[];
  configName: string;

  name: string;
  levelToTier: number[];
  description: string;
  icon: string;
  maxTier: number;
  rawData: any;
  rap: number | null;
  tradable: boolean;
  productId: number | null;
};

export default ultimates;
