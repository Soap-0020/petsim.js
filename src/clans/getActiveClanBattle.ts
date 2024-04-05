import getURL from "../getURL";
import activeClanBattle from "../types/clans/activeClanBattle";

const getActiveClanBattle = async (): Promise<activeClanBattle> => {
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
          .id satisfies activeClanBattle["rewards"]["bronze"][number];
      }),
      silver: data.configData.Rewards.Silver.map((reward: any) => {
        return reward._data
          .id satisfies activeClanBattle["rewards"]["silver"][number];
      }),
      gold: data.configData.Rewards.Gold.map((reward: any) => {
        return reward._data
          .id satisfies activeClanBattle["rewards"]["gold"][number];
      }),
    },
    rawData: data,
  } satisfies activeClanBattle;
};

export default getActiveClanBattle;
