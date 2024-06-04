import rarity from "../rarity";

type Icons = {
  name: string;
  icon: string;
};

type Boxes = {
  category: "Boxes";
  collection: "Boxes";
  capacity: number;
  name: string;
  configName: string;
  description: string;
  rarity: rarity;
  icons: Icons[];

  rap: number | null;
  rawData: any;
};

export default Boxes;
