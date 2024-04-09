import getImageURL from "../../other/getImageURL";
import boxes from "../../types/collections/boxes";
import rapType from "../../types/rapData";
import getCollection from "../getCollection";

const getBoxes = async (rapData: rapType[] = []): Promise<boxes[]> => {
  const data = await getCollection("Boxes");

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
        } satisfies boxes["icons"][number];
      }),

      rap:
        rapData.find((item) => {
          return item.id + " Box" == box.configData.DisplayName;
        })?.rap ?? null,

      rawData: box,
    } satisfies boxes;
  }) satisfies boxes[];
};

export default getBoxes;
