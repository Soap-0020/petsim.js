type Perk = {
  level: number;
  text: string;
  title: string;
  power: number | null;
};

type Perks = { [key: string]: Perk[] };

type Mastery = {
  configName: string;
  category: "Mastery";
  perks: Perks;
  name: string;
  icon: string;
  description: string;

  rawData: any;
  collection: "Mastery";
};

export default Mastery;
