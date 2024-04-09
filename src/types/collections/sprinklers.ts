import rarity from "../rarity";

type sprinklers = {
  category: "Sprinklers";
  collection: "Sprinklers";
  configName: string;
  rarity: rarity;
  color: string;
  duration: number;
  description: string;
  name: string;
  icon: string;

  rap: number | null;
  rawData: any;
};

export default sprinklers;
