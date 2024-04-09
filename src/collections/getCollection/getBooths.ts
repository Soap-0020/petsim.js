import getImageURL from "../../other/getImageURL";
import booths from "../../types/collections/booths";
import rapType from "../../types/rapData";
import getCollection from "../getCollection";

const getBooths = async (rapData: rapType[] = []): Promise<booths[]> => {
  const data = await getCollection("Booths");

  rapData = rapData.filter((e) => e.category == "Booth");

  return data.map((booth: any) => {
    return {
      category: "Booths",
      collection: "Booths",
      name: booth.configData.DisplayName,
      icon: getImageURL(booth.configData.Icon),
      description: booth.configData.Desc,
      configName: booth.configName,
      rarity: {
        number: booth.configData.Rarity.RarityNumber,
        name: booth.configData.Rarity.DisplayName,
        announce: booth.configData.Rarity.Announce,
      },
      hidden: booth.configData.Hidden ?? false,
      rap:
        rapData.find((item) => {
          return item.id + " Booth" == booth.configData.DisplayName;
        })?.rap ?? null,
      rawData: booth,
    } satisfies booths;
  }) satisfies booths[];
};

export default getBooths;
