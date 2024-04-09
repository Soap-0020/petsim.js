import rarity from "../rarity";

type lootboxes = {
  configName: string;
  category: "Lootboxes";
  collection: "Lootboxes";
  name: string;
  icon: string;
  description: string;
  rarity: rarity;

  rap: number | null;
  rawData: any;
};

export default lootboxes;
