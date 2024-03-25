import achievements from "../../types/collections/achievements";
import getCollection from "../getCollection";

const getAchievements = async () => {
  const data = await getCollection("Achievements");

  return data.map((achievement: any) => {
    return {
      collection: "Achievements",
      category: "Achievements",
      configName: achievement.configName,
      name: achievement.configData.Name,
      rawData: achievement,

      tiers: achievement.configData.Tiers.map((tier: any) => {
        return {
          rewards: tier.Rewards.map((reward: any) => {
            return {
              id: reward.Reward._data.id,
              amount: reward.Reward._data._am ?? 1,
              tier: reward.Reward._data.tn ?? null,
              variant: reward.Reward._data.pt ?? null,
              shiny: reward.Reward._data.sh ?? false,
            } as achievements["tiers"][number]["rewards"][number];
          }),
          difficulty: {
            name: tier.Difficulty.Name,
            order: tier.Difficulty.Order,
          },
          title: tier.Title,
          amount: tier.Amount,
          manuallyNotify: tier.ManuallyNotify ?? null,

          hidden: tier.Hidden,
          description: tier.Desc,
        } as achievements["tiers"][number];
      }),
    } as achievements;
  }) as achievements[];
};

export default getAchievements;
