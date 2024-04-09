import rarity from "../rarity";

type miscItems = {
  category: string;
  collection: "MiscItems";
  configName: string;
  name: string;
  rarity: rarity;
  tradeable: boolean;
  icon: string;
  description: string;
  rawData: any;
  rap: number | null;
};

export default miscItems;
