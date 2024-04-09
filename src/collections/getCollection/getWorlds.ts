import getCollection from "../getCollection";
import worlds from "../../types/collections/worlds";

const getWorlds = async (): Promise<worlds[]> => {
  const data = await getCollection("Worlds");

  return data.map((world: any) => {
    return {
      configName: world.configName,
      collection: "Worlds",
      category: "Worlds",
      currency: world.configData.WorldCurrency,
      placeId: world.configData.PlaceId,
      mapName: world.configData.MapName,
      additionalMusic: world.configData.AdditionalMusic ?? [],
      rawData: world,
      world: world.configData.WorldNumber,
    } satisfies worlds;
  }) satisfies worlds[];
};

export default getWorlds;
