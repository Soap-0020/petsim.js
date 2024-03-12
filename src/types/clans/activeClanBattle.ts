type reward = {
  id: string;
};

type rewards = {
  bronze: reward[];
  silver: reward[];
  gold: reward[];
};

type activeClanBattle = {
  category: "GuildBattles";
  configName: string;
  finishTime: number;
  startTime: number;
  name: string;
  rewards: rewards;
};

export default activeClanBattle;
