import Rarities from "../../types/collections/rarities";
import fetchCollection from "../fetchCollection";

const getRarities = async (): Promise<Rarities[]> => {
  const data = await fetchCollection("Rarity");

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
    } satisfies Rarities;
  }) satisfies Rarities[];
};

export default getRarities;
