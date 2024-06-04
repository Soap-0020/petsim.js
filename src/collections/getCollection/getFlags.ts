import getImageURL from "../../other/getImageURL";
import RapData from "../../types/rapData";
import Flags from "../../types/collections/flags";
import fetchCollection from "../fetchCollection";

const getFlags = async (rapData: RapData[] = []): Promise<Flags[]> => {
  const data = await fetchCollection("ZoneFlags");

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
    } satisfies Flags;
  }) satisfies Flags[];
};

export default getFlags;
