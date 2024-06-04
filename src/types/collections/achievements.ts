type Reward = {
  id: string;
  amount: number;
  tier: number | null;
  variant: number | null;
  shiny: boolean;
};

type Difficulty = {
  name: string;
  order: number;
};

type Tiers = {
  rewards: Reward[];
  difficulty: Difficulty;
  title: string;
  amount: number;
  manuallyNotify: number | null;

  hidden: boolean;
  description: string;
};

type Achievements = {
  category: "Achievements";
  collection: "Achievements";
  name: string;
  configName: string;
  tiers: Tiers[];
  icon: string;

  rawData: any;
};

export default Achievements;
