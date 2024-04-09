import getCollection from "../getCollection";
import getImageURL from "../../other/getImageURL";
import mastery from "../../types/collections/mastery";

const getMastery = async (): Promise<mastery[]> => {
  const data = await getCollection("Mastery");

  return data.map((mastery: any) => {
    const perks: { [key: string]: mastery["perks"][number] } = {};

    Object.keys(mastery.configData.Perks).forEach((e) => {
      perks[e] = mastery.configData.Perks[e].map((e: any) => {
        return {
          level: e.Level,
          text: e.Text,
          title: e.Title,
          power: e.Power ?? null,
        } satisfies mastery["perks"][number][number];
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
    } satisfies mastery;
  }) satisfies mastery[];
};

export default getMastery;
