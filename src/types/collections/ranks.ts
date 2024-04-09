type goals = {
  amount: number;
  type: number;
  weight: number;
  currency: string | null;
};

type rewards = {
  item: {
    id: string;
    amount: number;
    tier: number | null;
  };
  starsRequired: number;
};

type ranks = {
  configName: string;
  category: "Ranks";
  collection: "Ranks";
  unlockablePetSlots: number;
  maxEnchantEquipped: number;
  title: string;
  unlockableEggSlots: number;
  rank: number;
  maximumActiveGoals: number;
  goals: goals[][];
  rewards: rewards[];
  rawData: any;
};

export default ranks;
