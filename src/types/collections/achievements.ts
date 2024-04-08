type reward = {
  id: string;
  amount: number;
  tier: number | null;
  variant: number | null;
  shiny: boolean;
};

type difficulty = {
  name: string;
  order: number;
};

type tiers = {
  rewards: reward[];
  difficulty: difficulty;
  title: string;
  amount: number;
  manuallyNotify: number | null;

  hidden: boolean;
  description: string;
};

type achievements = {
  category: "Achievements";
  collection: "Achievements";
  name: string;
  configName: string;
  tiers: tiers[];
  icon: string;

  rawData: any;
};

export default achievements;
