import rarity from "../rarity";

type icons = {
  name: string;
  icon: string;
};

type boxes = {
  category: "Boxes";
  collection: "Boxes";
  capacity: number;
  name: string;
  configName: string;
  description: string;
  rarity: rarity;
  icons: icons[];

  rap: number | null;
  rawData: any;
};

export default boxes;
