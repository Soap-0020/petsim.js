import apiError from "../../errors/apiError";
import getRAP from "../../other/getRAP";
import enchants from "../../types/collections/enchants";
import jsonData from "../../types/jsonData";

const getEnchants = async () => {
  const data = await fetch("https://biggamesapi.io/api/collection/Enchants");
  const json = (await data.json()) as jsonData;

  if (json.error) throw new apiError(json.error.message);
  if (json.data) {
    const rapData = (await getRAP()).filter((item) => {
      return item.category == "Enchant";
    });

    const formattedJson: enchants[] = json.data.map((enchant: any) => {
      let tier = enchant.configData.BaseTier - 1;
      return {
        collection: "Enchants",
        category: enchant.category,
        configName: enchant.configName,
        baseTier: enchant.configData.BaseTier,
        maxTier: enchant.configData.MaxTier,
        diminishPowerThreshold:
          enchant.configData.DiminishPowerThreshold ?? null,
        productId: enchant.configData.ProductId ?? null,

        tiers: enchant.configData.Tiers.map((tierData: any) => {
          tier++;
          return {
            rarity: {
              number: tierData.Rarity.RarityNumber,
              name: tierData.Rarity.DisplayName,
              announce: tierData.Rarity.Announce,
            },
            power: tierData.Power,
            description: tierData.Desc,
            icon: tierData.Icon,
            name: tierData.DisplayName,
            tier: tier,

            rap:
              rapData.find((rapItem) => {
                return (
                  rapItem.id == enchant.configName.split("| ")[1] &&
                  rapItem.tier == tier
                );
              })?.rap ?? null,
          };
        }),
      };
    });

    return formattedJson;
  }

  throw new Error("Unknown Error");
};

export default getEnchants;
