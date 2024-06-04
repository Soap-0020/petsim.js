import getImageURL from "../../other/getImageURL";
import Achievements from "../../types/collections/achievements";
import fetchCollection from "../fetchCollection";

const getAchievements = async (): Promise<Achievements[]> => {
  const data = await fetchCollection("Achievements");

  return data.map((achievement: any) => {
    return {
      collection: "Achievements",
      category: "Achievements",
      configName: achievement.configName,
      name: achievement.configData.Name,
      rawData: achievement,
      icon: getImageURL(achievement.configData.Icon),

      tiers: achievement.configData.Tiers.map((tier: any) => {
        return {
          rewards: tier.Rewards.map((reward: any) => {
            return {
              id: reward.Reward._data.id,
              amount: reward.Reward._data._am ?? 1,
              tier: reward.Reward._data.tn ?? null,
              variant: reward.Reward._data.pt ?? null,
              shiny: reward.Reward._data.sh ?? false,
            } satisfies Achievements["tiers"][number]["rewards"][number];
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
        } satisfies Achievements["tiers"][number];
      }),
    } satisfies Achievements;
  }) satisfies Achievements[];
};

export default getAchievements;
