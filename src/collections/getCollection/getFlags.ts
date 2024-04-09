import getCollection from "../getCollection";
import getImageURL from "../../other/getImageURL";
import flags from "../../types/collections/flags";
import rapType from "../../types/rapData";

const getFlags = async (rapData: rapType[] = []): Promise<flags[]> => {
  const data = await getCollection("ZoneFlags");

  rapData = rapData.filter((item) => item.category == "Misc");

  return data.map((flag: any) => {
    return {
      configName: flag.configName,
      collection: "ZoneFlags",
      category: "ZoneFlags",
      color: flag.configData.Color,
      duration: flag.configData.Duration,
      description: flag.configData.Desc,
      icon: getImageURL(flag.configData.Icon),
      rawData: flag,
      name: flag.configData.Name,
      rarity: {
        name: flag.configData.Rarity.DisplayName,
        number: flag.configData.Rarity.RarityNumber,
        announce: flag.configData.Rarity.Announce,
      },

      rap: rapData.find((e) => e.id == flag.configData.Name)?.rap ?? null,
    } satisfies flags;
  }) satisfies flags[];
};

export default getFlags;
