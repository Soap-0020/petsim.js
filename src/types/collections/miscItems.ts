import Rarity from "../rarity";

type MiscItems = {
  category: string;
  collection: "MiscItems";
  configName: string;
  name: string;
  rarity: Rarity;
  tradeable: boolean;
  icon: string;
  description: string;
  rawData: any;
  rap: number | null;
};

export default MiscItems;
