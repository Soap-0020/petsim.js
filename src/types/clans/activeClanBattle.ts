type Rewards = {
  bronze: string[];
  silver: string[];
  gold: string[];
};

type ActiveClanBattle = {
  category: "GuildBattles";
  configName: string;
  finishTime: number;
  startTime: number;
  name: string;
  rewards: Rewards;

  rawData: any;
};

export default ActiveClanBattle;
