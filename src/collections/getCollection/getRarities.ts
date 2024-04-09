import getCollection from "../getCollection";
import rarities from "../../types/collections/rarities";

const getRarities = async (): Promise<rarities[]> => {
  const data = await getCollection("Rarity");

  return data.map((rarity: any) => {
    return {
      collection: "Rarity",
      category: "Rarity",
      configName: rarity.configName,
      name: rarity.configData.DisplayName,
      color: rarity.configData.Color,
      announce: rarity.configData.Announce,
      rawData: rarity,
      number: rarity.configData.RarityNumber,
    } satisfies rarities;
  }) satisfies rarities[];
};

export default getRarities;
