import getCollection from "../getCollection";
import getImageURL from "../../other/getImageURL";
import lootboxes from "../../types/collections/lootboxes";
import rapType from "../../types/rapData";

const getLootboxes = async (rapData: rapType[] = []): Promise<lootboxes[]> => {
  const data = await getCollection("Lootboxes");

  rapData = rapData.filter((item) => item.category == "Lootbox");

  return data.map((lootbox: any) => {
    return {
      collection: "Lootboxes",
      category: "Lootboxes",
      description: lootbox.configData.Desc,
      icon: getImageURL(lootbox.configData.Icon),
      name: lootbox.configData.DisplayName,
      configName: lootbox.configName,
      rarity: {
        number: lootbox.configData.Rarity.RarityNumber,
        name: lootbox.configData.Rarity.DisplayName,
        announce: lootbox.configData.Rarity.Announce,
      },
      rawData: lootbox,
      rap: rapData.find((e) => e.id == lootbox.configName)?.rap ?? null,
    } satisfies lootboxes;
  }) satisfies lootboxes[];
};

export default getLootboxes;
