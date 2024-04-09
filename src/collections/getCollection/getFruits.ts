import getCollection from "../getCollection";
import getImageURL from "../../other/getImageURL";
import fruits from "../../types/collections/fruits";
import rapType from "../../types/rapData";

const getFruits = async (rapData: rapType[] = []): Promise<fruits[]> => {
  const data = await getCollection("Fruits");

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
        } satisfies fruits["boosts"][number];
      }),
      rap:
        rapData.find((rap) => rap.id == fruit.configData.DisplayName)?.rap ??
        null,
      rawData: fruit,
    } satisfies fruits;
  }) satisfies fruits[];
};

export default getFruits;
