import getCollection from "../getCollection";
import getRAP from "../../other/getRAP";
import getImageURL from "../../other/getImageURL";
import sprinklers from "../../types/collections/sprinklers";

const getSprinklers = async (): Promise<sprinklers[]> => {
  const data = await getCollection("Sprinklers");

  const rapData = (await getRAP()).filter((item) => {
    return item.category == "Misc";
  });

  return data.map((sprinkler: any) => {
    return {
      category: "Sprinklers",
      collection: "Sprinklers",
      configName: sprinkler.configName,
      color: sprinkler.configData.Color,
      duration: sprinkler.configData.Duration,
      description: sprinkler.configData.Desc,
      icon: getImageURL(sprinkler.configData.Icon),
      rawData: sprinkler,
      rarity: {
        name: sprinkler.configData.Rarity.DisplayName,
        number: sprinkler.configData.Rarity.RarityNumber,
        announce: sprinkler.configData.Rarity.Announce,
      },
      name: sprinkler.configData.Name,

      rap:
        rapData.find((e) => e.id == sprinkler.configName.split("| ")[1])?.rap ??
        null,
    } satisfies sprinklers;
  }) satisfies sprinklers[];
};

export default getSprinklers;
