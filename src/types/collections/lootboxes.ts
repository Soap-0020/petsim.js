import Rarity from "../rarity";

type Lootboxes = {
  configName: string;
  category: "Lootboxes";
  collection: "Lootboxes";
  name: string;
  icon: string;
  description: string;
  rarity: Rarity;

  rap: number | null;
  rawData: any;
};

export default Lootboxes;
