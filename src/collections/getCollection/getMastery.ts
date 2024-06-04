import getImageURL from "../../other/getImageURL";
import Mastery from "../../types/collections/mastery";
import fetchCollection from "../fetchCollection";

const getMastery = async (): Promise<Mastery[]> => {
  const data = await fetchCollection("Mastery");

  return data.map((mastery: any) => {
    const perks: { [key: string]: Mastery["perks"][number] } = {};

    Object.keys(mastery.configData.Perks).forEach((e) => {
      perks[e] = mastery.configData.Perks[e].map((e: any) => {
        return {
          level: e.Level,
          text: e.Text,
          title: e.Title,
          power: e.Power ?? null,
        } satisfies Mastery["perks"][number][number];
      });
    });

    return {
      configName: mastery.configName,
      category: "Mastery",
      collection: "Mastery",
      name: mastery.configData.Name,
      icon: getImageURL(mastery.configData.Icon),
      rawData: mastery,
      description: mastery.configData.Desc,
      perks: perks,
    } satisfies Mastery;
  }) satisfies Mastery[];
};

export default getMastery;
