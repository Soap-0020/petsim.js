type rewards = {
  bronze: string[];
  silver: string[];
  gold: string[];
};

type clanBattles = {
  configName: string;
  name: string;
  finishTime: number;
  startTime: number;
  category: "GuildBattles";
  collection: "GuildBattles";
  rewards: rewards;
  hasGoals: boolean;
  rawData: any;
};

export default clanBattles;
