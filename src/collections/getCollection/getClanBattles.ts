import ClanBattles from "../../types/collections/clanBattles";
import fetchCollection from "../fetchCollection";

const getClanBattles = async (): Promise<ClanBattles[]> => {
  const data = await fetchCollection("GuildBattles");

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
            reward._data.id satisfies ClanBattles["rewards"]["bronze"]
        ),
        silver: clanBattle.configData.Rewards.Silver.map(
          (reward: any) =>
            reward._data.id satisfies ClanBattles["rewards"]["silver"]
        ),
        gold: clanBattle.configData.Rewards.Gold.map(
          (reward: any) =>
            reward._data.id satisfies ClanBattles["rewards"]["gold"]
        ),
      },
      rawData: clanBattle,
    } satisfies ClanBattles;
  }) satisfies ClanBattles[];
};

export default getClanBattles;
