type rewards = {
  bronze: string[];
  silver: string[];
  gold: string[];
};

type activeClanBattle = {
  category: "GuildBattles";
  configName: string;
  finishTime: number;
  startTime: number;
  name: string;
  rewards: rewards;

  rawData: any;
};

export default activeClanBattle;
