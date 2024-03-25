import apiError from "../../errors/apiError";
import getImageURL from "../../other/getImageURL";
import getRAP from "../../other/getRAP";
import enchants from "../../types/collections/enchants";
import jsonData from "../../types/jsonData";
import getCollection from "../getCollection";

const getEnchants = async () => {
  const data = await getCollection("Enchants");

  const rapData = (await getRAP()).filter((item) => {
    return item.category == "Enchant";
  });

  return data.map((enchant: any) => {
    let tier = enchant.configData.BaseTier - 1;

    return {
      collection: "Enchants",
      category: enchant.category,
      configName: enchant.configName,
      baseTier: enchant.configData.BaseTier,
      maxTier: enchant.configData.MaxTier,
      diminishPowerThreshold: enchant.configData.DiminishPowerThreshold ?? null,
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
          icon: getImageURL(tierData.Icon),
          name: tierData.DisplayName,
          tier: tier,

          rap:
            rapData.find((rapItem) => {
              return (
                rapItem.id == enchant.configName.split("| ")[1] &&
                rapItem.tier == tier
              );
            })?.rap ?? null,
        } as enchants["tiers"][number];
      }),

      rawData: enchant,
    } as enchants;
  }) as enchants[];
};

export default getEnchants;
