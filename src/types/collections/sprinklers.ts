import Rarity from "../rarity";

type Sprinklers = {
  category: "Sprinklers";
  collection: "Sprinklers";
  configName: string;
  rarity: Rarity;
  color: string;
  duration: number;
  description: string;
  name: string;
  icon: string;

  rap: number | null;
  rawData: any;
};

export default Sprinklers;
