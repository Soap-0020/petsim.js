import getCollection from "../getCollection";
import getImageURL from "../../other/getImageURL";
import walteringCans from "../../types/collections/walteringCans";
import rapType from "../../types/rapData";

const getWalteringCans = async (
  rapData: rapType[] = []
): Promise<walteringCans[]> => {
  const data = await getCollection("WateringCans");

  rapData = rapData.filter((item) => item.category == "Misc");

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
