import rarity from "../rarity";

type flags = {
  configName: string;
  category: "ZoneFlags";
  collection: "ZoneFlags";
  rarity: rarity;
  color: string;
  duration: number;
  description: string;
  name: string;
  icon: string;
  rap: number | null;
  rawData: any;
};

export default flags;
