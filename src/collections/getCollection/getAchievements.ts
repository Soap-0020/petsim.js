import apiError from "../../errors/apiError";
import achievements from "../../types/collections/achievements";
import jsonData from "../../types/jsonData";

const getAchievements = async () => {
  const data = await fetch(
    "https://biggamesapi.io/api/collection/Achievements"
  );
  const json = (await data.json()) as jsonData;

  if (json.error) throw new apiError(json.error.message);
  if (json.data) {
    const formattedJson: achievements[] = json.data.map((achievement: any) => {
      const infomation: achievements = {
        collection: "Achievements",
        category: "Achievements",

        configName: achievement.configName,
        name: achievement.configData.Name,

        tiers: achievement.configData.Tiers.map((tier: any) => {
          return {
            rewards: tier.Rewards.map((reward: any) => {
              return {
                id: reward.Reward._data.id,
                amount: reward.Reward._data._am ?? 1,
                tier: reward.Reward._data.tn ?? null,
                variant: reward.Reward._data.pt ?? null,
                shiny: reward.Reward._data.sh ?? false,
              };
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
          };
        }),
      };

      return infomation;
    });

    return formattedJson;
  }

  throw new Error("Unknown Error");
};

export default getAchievements;
