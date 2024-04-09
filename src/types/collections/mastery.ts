type perk = {
  level: number;
  text: string;
  title: string;
  power: number | null;
};

type perks = { [key: string]: perk[] };

type mastery = {
  configName: string;
  category: "Mastery";
  perks: perks;
  name: string;
  icon: string;
  description: string;

  rawData: any;
  collection: "Mastery";
};

export default mastery;
