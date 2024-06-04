import getImageURL from "../../other/getImageURL";
import Boosts from "../../types/collections/boosts";
import fetchCollection from "../fetchCollection";

const getBoosts = async (): Promise<Boosts[]> => {
  const data = await fetchCollection("Boosts");

  return data.map((boost: any) => {
    return {
      name: boost.configData.DisplayName,
      category: "Boosts",
      collection: "Boosts",
      configName: boost.configName,
      icon: getImageURL(boost.configData.Icon),
      maximumPercent: boost.configData.MaximumPercent,
      rawData: boost,
    } satisfies Boosts;
  }) satisfies Boosts[];
};

export default getBoosts;
