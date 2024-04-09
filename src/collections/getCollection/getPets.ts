import getCollection from "../getCollection";
import getImageURL from "../../other/getImageURL";
import pets from "../../types/collections/pets";
import rapType from "../../types/rapData";
import existType from "../../types/existData";

const getPets = async (
  rapData: rapType[] = [],
  existData: existType[] = []
): Promise<pets[]> => {
  const data = await getCollection("Pets");

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
          } satisfies pets["rap"][number];
        }),

      exist: existData
        .filter((e) => e.id == pet.configData.name)
        .map((e) => {
          return {
            shiny: e.shiny,
            variant: e.variant ?? null,
            exist: e.exist,
          } satisfies pets["exist"][number];
        }),
      rawData: pet,
    } satisfies pets;
  }) satisfies pets[];
};

export default getPets;
