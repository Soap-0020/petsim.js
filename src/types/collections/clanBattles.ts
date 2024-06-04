type Rewards = {
  bronze: string[];
  silver: string[];
  gold: string[];
};

type ClanBattles = {
  configName: string;
  name: string;
  finishTime: number;
  startTime: number;
  category: "GuildBattles";
  collection: "GuildBattles";
  rewards: Rewards;
  hasGoals: boolean;
  rawData: any;
};

export default ClanBattles;
