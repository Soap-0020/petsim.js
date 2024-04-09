import getCollection from "../getCollection";
import getImageURL from "../../other/getImageURL";
import ultimates from "../../types/collections/ultimates";
import rapType from "../../types/rapData";

const getUltimates = async (rapData: rapType[] = []): Promise<ultimates[]> => {
  const data = await getCollection("Ultimates");

  rapData = rapData.filter((item) => item.category == "Ultimate");

  return data.map((ultimate: any) => {
    return {
      category: "Ultimates",
      collection: "Ultimates",
      configName: ultimate.configName,
      tierToLevel: ultimate.configData.TierToLevel,
      name: ultimate.configData.DisplayName,
      levelToTier: ultimate.configData.LevelToTier,
      description: ultimate.configData.Desc,
      icon: getImageURL(ultimate.configData.Icon),
      maxTier: ultimate.configData.MaxTier,
      rawData: ultimate,
      tradable: ultimate.configData.Tradable ?? true,
      productId: ultimate.configData.ProductId ?? null,
      rarity: {
        name: ultimate.configData.Rarity.DisplayName,
        number: ultimate.configData.Rarity.RarityNumber,
        announce: ultimate.configData.Rarity.Announce,
      },

      rap:
        rapData.find((e) => e.id == ultimate.configData.DisplayName)?.rap ??
        null,
    } satisfies ultimates;
  }) satisfies ultimates[];
};

export default getUltimates;
