import getCollection from "../getCollection";
import getRAP from "../../other/getRAP";
import getImageURL from "../../other/getImageURL";
import lootboxes from "../../types/collections/lootboxes";

const getLootboxes = async (): Promise<lootboxes[]> => {
  const data = await getCollection("Lootboxes");

  const rapData = (await getRAP()).filter((item) => {
    return item.category == "Lootbox";
  });

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
