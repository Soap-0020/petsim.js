type icons = {
  name: string;
  icon: string;
};

type rarity = {
  number: number;
  name: string;
  announce: boolean;
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
};

export default boxes;
