import rarity from "../rarity";

type booths = {
  category: "Booths";
  collection: "Booths";
  name: string;
  configName: string;
  icon: string;
  description: string;
  rarity: rarity;
  hidden: boolean;

  rap: number | null;
  rawData: any;
};

export default booths;
