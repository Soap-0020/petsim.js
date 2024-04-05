import getImageURL from "../../other/getImageURL";
import getRAP from "../../other/getRAP";
import booths from "../../types/collections/booths";
import getCollection from "../getCollection";

const getBooths = async (): Promise<booths[]> => {
  const data = await getCollection("Booths");

  const rapData = (await getRAP()).filter((item) => {
    return item.category == "Booth";
  });

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
