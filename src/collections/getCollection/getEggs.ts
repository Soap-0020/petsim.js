import apiError from "../../errors/apiError";
import getRAP from "../../other/getRAP";
import eggs from "../../types/collections/eggs";
import jsonData from "../../types/jsonData";

const getEggs = async () => {
  const data = await fetch("https://biggamesapi.io/api/collection/Eggs");
  const json = (await data.json()) as jsonData;

  if (json.error) throw new apiError(json.error.message);
  if (json.data) {
    const rapData = (await getRAP()).filter((item) => {
      return item.category == "Egg";
    });

    const formattedJson: eggs[] = json.data.map((egg: any) => {
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
        icon: egg.configData.icon,
        eggNumber: egg.configData.eggNumber ?? null,
        worldNumber: egg.configData.worldNumber ?? null,
        currency: egg.configData.currency ?? null,

        productIds: products,
        pets: egg.configData.pets.map((pet: any) => {
          return {
            name: pet[0],
            chance: pet[1],
            notification: pet[2] ?? null,
          };
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
      };
    });

    return formattedJson;
  }

  throw new Error("Unknown Error");
};

export default getEggs;
