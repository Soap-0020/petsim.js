import getImageURL from "../../other/getImageURL";
import Enchants from "../../types/collections/enchants";
import RapData from "../../types/rapData";
import fetchCollection from "../fetchCollection";

const getEnchants = async (rapData: RapData[] = []): Promise<Enchants[]> => {
  const data = await fetchCollection("Enchants");

  rapData = rapData.filter((item) => item.category == "Enchant");

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
        } satisfies Enchants["tiers"][number];
      }),

      rawData: enchant,
    } satisfies Enchants;
  }) satisfies Enchants[];
};

export default getEnchants;
