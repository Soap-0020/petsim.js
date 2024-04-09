import getCollection from "../getCollection";
import getImageURL from "../../other/getImageURL";
import randomEvents from "../../types/collections/randomEvents";

const getRandomEvents = async (): Promise<randomEvents[]> => {
  const data = await getCollection("RandomEvents");

  return data.map((randomEvent: any) => {
    return {
      configName: randomEvent.configName,
      category: "RandomEvents",
      collection: "RandomEvents",
      allowInZones: randomEvent.configData.AllowInZones,
      icon: getImageURL(randomEvent.configData.Icon),
      chance: randomEvent.configData.Chance,
      color: randomEvent.configData.Color,
      duration: randomEvent.configData.Duration,
      breakingRequirement: randomEvent.configData.BreakingRequirement,
      playtimeRequirement: randomEvent.configData.PlaytimeRequirement,
      name: randomEvent.configData.Name,
      rawData: randomEvent,
      minimumZone: randomEvent.configData.MinimumZone ?? null,
      allowInInstances: randomEvent.configData.AllowInInstances,
      allowMultiple: randomEvent.configData.AllowMultiple,
      areaWhitelist: {
        magma: randomEvent.configData.AreaWhitelist.Main_Magma,
        main: randomEvent.configData.AreaWhitelist.Main,
        ice: randomEvent.configData.AreaWhitelist.Main_Ice,
      },
    } satisfies randomEvents;
  }) satisfies randomEvents[];
};

export default getRandomEvents;
