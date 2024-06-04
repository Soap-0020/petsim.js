import Rarity from "../rarity";

type Ultimates = {
  category: "Ultimates";
  collection: "Ultimates";
  rarity: Rarity;
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

export default Ultimates;
