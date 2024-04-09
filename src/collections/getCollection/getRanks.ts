import getCollection from "../getCollection";
import ranks from "../../types/collections/ranks";

const getRanks = async (): Promise<ranks[]> => {
  const data = await getCollection("Ranks");

  return data.map((rank: any) => {
    return {
      category: "Ranks",
      configName: rank.configName,
      collection: "Ranks",
      title: rank.configData.Title,
      unlockableEggSlots: rank.configData.UnlockableEggSlots,
      rank: rank.configData.RankNumber,
      maxEnchantEquipped: rank.configData.MaxEnchantsEquipped,
      unlockablePetSlots: rank.configData.UnlockablePetSlots,
      rawData: rank,
      maximumActiveGoals: rank.configData.MaximumActiveGoals,
      rewards: rank.configData.Rewards.map((reward: any) => {
        return {
          item: {
            id: reward.Item._data.id,
            amount: reward.Item._data._am ?? 1,
            tier: reward.Item._data.tn ?? null,
          },
          starsRequired: reward.StarsRequired,
        } satisfies ranks["rewards"][number];
      }),
      goals: rank.configData.Goals.map((goalType: any) => {
        return goalType.map((goal: any) => {
          return {
            amount: goal.Amount,
            type: goal.Type,
            weight: goal.Weight,
            currency: goal.CurrencyID ?? null,
          } satisfies ranks["goals"][number][number];
        }) satisfies ranks["goals"][number];
      }),
    } satisfies ranks;
  }) satisfies ranks[];
};

export default getRanks;
