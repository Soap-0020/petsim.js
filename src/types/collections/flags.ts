import Rarity from "../rarity";

type Flags = {
  configName: string;
  category: "ZoneFlags";
  collection: "ZoneFlags";
  rarity: Rarity;
  color: string;
  duration: number;
  description: string;
  name: string;
  icon: string;
  rap: number | null;
  rawData: any;
};

export default Flags;
