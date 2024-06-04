import getImageURL from "../../other/getImageURL";
import Boxes from "../../types/collections/boxes";
import RapData from "../../types/rapData";
import fetchCollection from "../fetchCollection";

const getBoxes = async (rapData: RapData[] = []): Promise<Boxes[]> => {
  const data = await fetchCollection("Boxes");

  rapData = rapData.filter((item) => item.category == "Box");

  return data.map((box: any) => {
    return {
      category: "Boxes",
      collection: "Boxes",
      capacity: box.configData.Capacity,
      name: box.configData.DisplayName,
      configName: box.configName,
      description: box.configData.Desc,
      rarity: {
        number: box.configData.Rarity.RarityNumber,
        name: box.configData.Rarity.DisplayName,
        announce: box.configData.Rarity.Announce,
      },

      icons: box.configData.Icons.map((icon: any) => {
        return {
          name: icon.Name,
          icon: getImageURL(icon.Icon),
        } satisfies Boxes["icons"][number];
      }),

      rap:
        rapData.find((item) => {
          return item.id + " Box" == box.configData.DisplayName;
        })?.rap ?? null,

      rawData: box,
    } satisfies Boxes;
  }) satisfies Boxes[];
};

export default getBoxes;
