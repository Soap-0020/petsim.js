import getImageURL from "../../other/getImageURL";
import getRAP from "../../other/getRAP";
import eggs from "../../types/collections/eggs";
import getCollection from "../getCollection";

const getEggs = async () => {
  const data = await getCollection("Eggs");

  const rapData = (await getRAP()).filter((item) => {
    return item.category == "Egg";
  });

  return data.map((egg: any) => {
    const products: { [key: string]: number } = {};

    if (egg.configData.productIds) {
      Object.keys(egg.configData.productIds).forEach((key: string) => {
        products[key] = egg.configData.productIds[key];
      });
    }

    return {
      collection: "Eggs",
      category: egg.category,

      overrideCost: egg.configData.overrideCost ?? null,
      isCustomEgg: egg.configData.isCustomEgg ?? false,

      name: egg.configData.name,
      configName: egg.configName,
      disableGold: egg.configData.disableGold ?? false,
      disableRainbow: egg.configData.disableRainbow ?? false,
      rainbowChance: egg.configData.rainbowChance ?? null,
      shinyChance: egg.configData.shinyChance ?? null,
      goldChance: egg.configData.goldChance ?? null,
      disableModifiers: egg.configData.disableModifiers ?? false,
      icon: getImageURL(egg.configData.icon),
      eggNumber: egg.configData.eggNumber ?? null,
      worldNumber: egg.configData.worldNumber ?? null,
      currency: egg.configData.currency ?? null,

      productIds: products,
      pets: egg.configData.pets.map((pet: any) => {
        return {
          name: pet[0],
          chance: pet[1],
          notification: pet[2] ?? null,
        } as eggs["pets"][number];
      }),
      rarity: egg.configData.rarity
        ? {
            number: egg.configData.rarity.RarityNumber,
            name: egg.configData.rarity.DisplayName,
            announce: egg.configData.rarity.Announce,
          }
        : null,
      rap:
        rapData.find((rap) => {
          return rap.id == egg.configName;
        })?.rap ?? null,

      rawData: egg,
    } as eggs;
  }) as eggs[];
};

export default getEggs;
