import apiError from "../../errors/apiError";
import getRAP from "../../other/getRAP";
import booths from "../../types/collections/booths";
import jsonData from "../../types/jsonData";

const getBooths = async () => {
  const data = await fetch("https://biggamesapi.io/api/collection/Booths");
  const json = (await data.json()) as jsonData;

  if (json.error) throw new apiError(json.error.message);
  if (json.data) {
    const rapData = (await getRAP()).filter((item) => {
      return item.category == "Booth";
    });

    const formattedJson: booths[] = json.data.map((booth: any) => {
      return {
        category: "Booths",
        collection: "Booths",
        name: booth.configData.DisplayName,
        icon: booth.configData.Icon,
        description: booth.configData.Desc,
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
      };
    });

    return formattedJson;
  }

  throw new Error("Unknown Error");
};

export default getBooths;
