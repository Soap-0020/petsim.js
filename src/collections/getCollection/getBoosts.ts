import getImageURL from "../../other/getImageURL";
import boosts from "../../types/collections/boosts";
import getCollection from "../getCollection";

const getBoosts = async () => {
  const data = await getCollection("Boosts");

  return data.map((boost: any) => {
    return {
      name: boost.configData.DisplayName,
      category: "Boosts",
      collection: "Boosts",
      configName: boost.configName,
      icon: getImageURL(boost.configData.Icon),
      maximumPercent: boost.configData.MaximumPercent,
      rawData: boost,
    } as boosts;
  }) as boosts[];
};

export default getBoosts;
