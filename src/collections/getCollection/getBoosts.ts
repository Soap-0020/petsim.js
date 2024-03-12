import apiError from "../../errors/apiError";
import boosts from "../../types/collections/boosts";
import jsonData from "../../types/jsonData";

const getBoosts = async () => {
  const data = await fetch("https://biggamesapi.io/api/collection/Boosts");
  const json = (await data.json()) as jsonData;

  if (json.error) throw new apiError(json.error.message);
  if (json.data) {
    const formattedJson: boosts[] = json.data.map((boost: any) => {
      return {
        name: boost.configData.DisplayName,
        category: "Boosts",
        collection: "Boosts",
        configName: boost.configName,
        icon: boost.configData.Icon,
        maximumPercent: boost.configData.MaximumPercent,
      };
    });

    return formattedJson;
  }

  throw new Error("Unknown Error");
};

export default getBoosts;
