import Rarity from "../rarity";

type Booths = {
  category: "Booths";
  collection: "Booths";
  name: string;
  configName: string;
  icon: string;
  description: string;
  rarity: Rarity;
  hidden: boolean;

  rap: number | null;
  rawData: any;
};

export default Booths;
