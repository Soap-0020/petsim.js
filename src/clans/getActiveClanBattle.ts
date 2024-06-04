import getURL from "../getURL";
import ActiveClanBattle from "../types/clans/activeClanBattle";

const getActiveClanBattle = async (): Promise<ActiveClanBattle> => {
  const data = await getURL("https://biggamesapi.io/api/activeClanBattle");

  return {
    category: "GuildBattles",
    configName: data.configName,
    finishTime: data.configData.FinishTime,
    startTime: data.configData.StartTime,
    name: data.configData.Title,
    rewards: {
      bronze: data.configData.Rewards.Bronze.map((reward: any) => {
        return reward._data
          .id satisfies ActiveClanBattle["rewards"]["bronze"][number];
      }),
      silver: data.configData.Rewards.Silver.map((reward: any) => {
        return reward._data
          .id satisfies ActiveClanBattle["rewards"]["silver"][number];
      }),
      gold: data.configData.Rewards.Gold.map((reward: any) => {
        return reward._data
          .id satisfies ActiveClanBattle["rewards"]["gold"][number];
      }),
    },
    rawData: data,
  } satisfies ActiveClanBattle;
};

export default getActiveClanBattle;
