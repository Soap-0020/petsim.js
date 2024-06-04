import Rarity from "../rarity";

type Boost = {
  amount: number;
  type: string;
};

type Fruits = {
  category: "Fruits";
  collection: "Fruits";
  name: string;
  configName: string;
  rarity: Rarity;
  duration: number;
  ignoreFruitMachine: boolean;
  description: string;
  icon: string;
  boosts: Boost[];

  rap: number | null;
  rawData: any;
};

export default Fruits;
