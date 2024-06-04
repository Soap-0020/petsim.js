import getImageURL from "../../other/getImageURL";
import RapData from "../../types/rapData";
import MiscItems from "../../types/collections/miscItems";
import fetchCollection from "../fetchCollection";

const getMiscItems = async (rapData: RapData[] = []): Promise<MiscItems[]> => {
  const data = await fetchCollection("MiscItems");

  rapData = rapData.filter((item) => item.category == "Misc");

  return data.map((miscItem: any) => {
    return {
      configName: miscItem.configName,
      category: miscItem.category,
      name: miscItem.configData.DisplayName,
      icon: getImageURL(miscItem.configData.Icon),
      description: miscItem.configData.Desc,
      collection: "MiscItems",
      tradeable: miscItem.configData.Tradable ?? false,
      rawData: miscItem,
      rarity: {
        name: miscItem.configData.Rarity.RarityNumber,
        number: miscItem.configData.Rarity.DisplayName,
        announce: miscItem.configData.Rarity.Announce,
      },

      rap: rapData.find((e) => e.id == miscItem.configName)?.rap ?? null,
    } satisfies MiscItems;
  }) satisfies MiscItems[];
};

export default getMiscItems;
