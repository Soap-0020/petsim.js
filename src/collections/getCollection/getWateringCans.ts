import getImageURL from "../../other/getImageURL";
import RapData from "../../types/rapData";
import WateringCans from "../../types/collections/wateringCans";
import fetchCollection from "../fetchCollection";

const getWateringCans = async (
  rapData: RapData[] = []
): Promise<WateringCans[]> => {
  const data = await fetchCollection("WateringCans");

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
    } satisfies WateringCans;
  }) satisfies WateringCans[];
};

export default getWateringCans;
