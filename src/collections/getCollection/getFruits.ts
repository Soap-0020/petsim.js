import getImageURL from "../../other/getImageURL";
import RapData from "../../types/rapData";
import Fruits from "../../types/collections/fruits";
import fetchCollection from "../fetchCollection";

const getFruits = async (rapData: RapData[] = []): Promise<Fruits[]> => {
  const data = await fetchCollection("Fruits");

  rapData = rapData.filter((item) => item.category == "Fruit");

  return data.map((fruit: any) => {
    return {
      collection: "Fruits",
      category: "Fruits",
      name: fruit.configData.DisplayName,
      configName: fruit.configName,
      rarity: {
        number: fruit.configData.Rarity.RarityNumber,
        name: fruit.configData.Rarity.DisplayName,
        announce: fruit.configData.Rarity.Announce,
      },
      duration: fruit.configData.Duration,
      ignoreFruitMachine: fruit.configData.IgnoreFruitMachine ?? false,
      description: fruit.configData.Desc,
      icon: getImageURL(fruit.configData.Icon),
      boosts: fruit.configData.Boost.map((boost: any) => {
        return {
          amount: boost.Amount,
          type: boost.Type,
        } satisfies Fruits["boosts"][number];
      }),
      rap:
        rapData.find((rap) => rap.id == fruit.configData.DisplayName)?.rap ??
        null,
      rawData: fruit,
    } satisfies Fruits;
  }) satisfies Fruits[];
};

export default getFruits;
