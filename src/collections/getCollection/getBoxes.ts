import apiError from "../../errors/apiError";
import getRAP from "../../other/getRAP";
import boxes from "../../types/collections/boxes";
import jsonData from "../../types/jsonData";

const getBoxes = async () => {
  const data = await fetch("https://biggamesapi.io/api/collection/Boxes");
  const json = (await data.json()) as jsonData;

  if (json.error) throw new apiError(json.error.message);
  if (json.data) {
    const rapData = (await getRAP()).filter((item) => {
      return item.category == "Box";
    });

    const formattedJson: boxes[] = json.data.map((box: any) => {
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
        icons: box.configData.Icons.map((icon: any) => ({
          name: icon.Name,
          icon: icon.Icon,
        })),

        rap:
          rapData.find((item) => {
            return item.id + " Box" == box.configData.DisplayName;
          })?.rap ?? null,
      };
    });

    return formattedJson;
  }

  throw new Error("Unknown Error");
};

export default getBoxes;
