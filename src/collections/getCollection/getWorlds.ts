import Worlds from "../../types/collections/worlds";
import fetchCollection from "../fetchCollection";

const getWorlds = async (): Promise<Worlds[]> => {
  const data = await fetchCollection("Worlds");

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
    } satisfies Worlds;
  }) satisfies Worlds[];
};

export default getWorlds;
