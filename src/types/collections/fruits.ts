import rarity from "../rarity";

type boost = {
  amount: number;
  type: string;
};

type fruits = {
  category: "Fruits";
  collection: "Fruits";
  name: string;
  configName: string;
  rarity: rarity;
  duration: number;
  ignoreFruitMachine: boolean;
  description: string;
  icon: string;
  boost: boost[];

  rap: number | null;
  rawData: any;
};

export default fruits;
