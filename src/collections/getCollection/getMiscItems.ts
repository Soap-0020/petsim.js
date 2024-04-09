import getCollection from "../getCollection";
import getImageURL from "../../other/getImageURL";
import miscItems from "../../types/collections/miscItems";
import getRAP from "../../other/getRAP";

const getMiscItems = async (): Promise<miscItems[]> => {
  const data = await getCollection("MiscItems");

  const rapData = (await getRAP()).filter((item) => {
    return item.category == "Misc";
  });

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
    } satisfies miscItems;
  }) satisfies miscItems[];
};

export default getMiscItems;
