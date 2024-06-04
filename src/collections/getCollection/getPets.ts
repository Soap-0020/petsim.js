import getImageURL from "../../other/getImageURL";
import RapData from "../../types/rapData";
import ExistData from "../../types/existData";
import Pets from "../../types/collections/pets";
import fetchCollection from "../fetchCollection";

const getPets = async (
  rapData: RapData[] = [],
  existData: ExistData[] = []
): Promise<Pets[]> => {
  const data = await fetchCollection("Pets");

  rapData = rapData.filter((item) => item.category == "Pet");

  return data.map((pet: any) => {
    return {
      collection: "Pets",
      category: pet.category,
      huge: pet.configData.huge ?? false,
      titanic: pet.configData.titanic ?? false,
      fly: pet.configData.fly ?? false,
      description: pet.configData.indexDesc ?? null,
      obtainable: pet.configData.indexObtainable ?? false,
      configName: pet.configName,
      name: pet.configData.name,
      animations: pet.configData.animations ?? {},
      thumbnails: {
        golden:
          pet.configData.goldenThumbnail == ""
            ? null
            : getImageURL(pet.configData.goldenThumbnail),
        normal: getImageURL(pet.configData.thumbnail),
      },
      power: pet.configData.cachedPower ? pet.configData.cachedPower[0] : null,
      egg: pet.configData.fromEgg ?? null,
      world: pet.configData.fromWorldNumber ?? null,
      zone: pet.configData.fromZoneNumber ?? null,
      hideExists: pet.configData.hideExists ?? false,
      hideSerial: pet.configData.hideSerial ?? false,
      exclusiveLevel: pet.configData.exclusiveLevel ?? null,
      isFromLastZone: pet.configData.isFromLastZone ?? false,
      preventGolden: pet.configData.preventGolden ?? false,

      rap: rapData
        .filter((e) => e.id == pet.configData.name)
        .map((e) => {
          return {
            shiny: e.shiny,
            variant: e.variant ?? null,
            rap: e.rap,
          } satisfies Pets["rap"][number];
        }),

      exist: existData
        .filter((e) => e.id == pet.configData.name)
        .map((e) => {
          return {
            shiny: e.shiny,
            variant: e.variant ?? null,
            exist: e.exist,
          } satisfies Pets["exist"][number];
        }),
      rawData: pet,
    } satisfies Pets;
  }) satisfies Pets[];
};

export default getPets;
