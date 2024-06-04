import getImageURL from "../../other/getImageURL";
import Lootboxes from "../../types/collections/lootboxes";
import RapData from "../../types/rapData";
import fetchCollection from "../fetchCollection";

const getLootboxes = async (rapData: RapData[] = []): Promise<Lootboxes[]> => {
  const data = await fetchCollection("Lootboxes");

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
    } satisfies Lootboxes;
  }) satisfies Lootboxes[];
};

export default getLootboxes;
