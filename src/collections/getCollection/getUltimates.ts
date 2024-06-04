import getImageURL from "../../other/getImageURL";
import Ultimates from "../../types/collections/ultimates";
import RapData from "../../types/rapData";
import fetchCollection from "../fetchCollection";

const getUltimates = async (rapData: RapData[] = []): Promise<Ultimates[]> => {
  const data = await fetchCollection("Ultimates");

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
    } satisfies Ultimates;
  }) satisfies Ultimates[];
};

export default getUltimates;
