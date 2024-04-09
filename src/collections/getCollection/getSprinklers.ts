import getCollection from "../getCollection";
import getImageURL from "../../other/getImageURL";
import sprinklers from "../../types/collections/sprinklers";
import rapType from "../../types/rapData";

const getSprinklers = async (
  rapData: rapType[] = []
): Promise<sprinklers[]> => {
  const data = await getCollection("Sprinklers");

  rapData = rapData.filter((item) => item.category == "Misc");

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
