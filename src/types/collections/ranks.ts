type Goals = {
  amount: number;
  type: number;
  weight: number;
  currency: string | null;
};

type Rewards = {
  item: {
    id: string;
    amount: number;
    tier: number | null;
  };
  starsRequired: number;
};

type Ranks = {
  configName: string;
  category: "Ranks";
  collection: "Ranks";
  unlockablePetSlots: number;
  maxEnchantEquipped: number;
  title: string;
  unlockableEggSlots: number;
  rank: number;
  maximumActiveGoals: number;
  goals: Goals[][];
  rewards: Rewards[];
  rawData: any;
};

export default Ranks;
