import getCollection from "../getCollection";
import getRAP from "../../other/getRAP";
import getImageURL from "../../other/getImageURL";
import walteringCans from "../../types/collections/walteringCans";

const getWalteringCans = async (): Promise<walteringCans[]> => {
  const data = await getCollection("WateringCans");

  const rapData = (await getRAP()).filter((item) => {
    return item.category == "Misc";
  });

  return data.map((walteringCan: any) => {
    return {
      collection: "WateringCans",
      configName: walteringCan.configName,
      category: "WateringCans",
      name: walteringCan.configData.DisplayName,
      itemId: walteringCan.configData.AssociatedItemID,
      plantTimeMultiplier: walteringCan.configData.PlantTimeMultiplier,
      icon: getImageURL(walteringCan.configData.Icon),
      plantTimeMultiplierDuration:
        walteringCan.configData.PlantTimeMultiplierDuration,
      rawData: walteringCan,

      rap:
        rapData.find((e) => e.id == walteringCan.configName.split("| ")[1])
          ?.rap ?? null,
    } satisfies walteringCans;
  }) satisfies walteringCans[];
};

export default getWalteringCans;
