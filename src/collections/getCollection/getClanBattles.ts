import clanBattles from "../../types/collections/clanBattles";
import getCollection from "../getCollection";

const getClanBattles = async (): Promise<clanBattles[]> => {
  const data = await getCollection("GuildBattles");

  return data.map((clanBattle: any) => {
    return {
      configName: clanBattle.configName,
      name: clanBattle.configData.Title,
      finishTime: clanBattle.configData.FinishTime,
      startTime: clanBattle.configData.StartTime,
      category: "GuildBattles",
      collection: "GuildBattles",
      hasGoals: clanBattle.configData.HasGoals ?? false,
      rewards: {
        bronze: clanBattle.configData.Rewards.Bronze.map(
          (reward: any) =>
            reward._data.id satisfies clanBattles["rewards"]["bronze"]
        ),
        silver: clanBattle.configData.Rewards.Silver.map(
          (reward: any) =>
            reward._data.id satisfies clanBattles["rewards"]["silver"]
        ),
        gold: clanBattle.configData.Rewards.Gold.map(
          (reward: any) =>
            reward._data.id satisfies clanBattles["rewards"]["gold"]
        ),
      },
      rawData: clanBattle,
    } satisfies clanBattles;
  }) satisfies clanBattles[];
};

export default getClanBattles;
