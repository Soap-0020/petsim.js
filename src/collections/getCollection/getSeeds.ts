import getCollection from "../getCollection";
import seeds from "../../types/collections/seeds";
import getImageURL from "../../other/getImageURL";
import rapType from "../../types/rapData";

const getSeeds = async (rapData: rapType[] = []): Promise<seeds[]> => {
  const data = await getCollection("Seeds");

  rapData = rapData.filter((item) => item.category == "Seed");

  return data.map((seed: any) => {
    return {
      rap:
        rapData.find((e) => e.id == seed.configName.split("| ")[1])?.rap ??
        null,
      collection: "Seeds",
      category: "Seeds",
      configName: seed.configName,
      rarity: {
        name: seed.configData.Rarity.DisplayName,
        number: seed.configData.Rarity.RarityNumber,
        announce: seed.configData.Rarity.Announce,
      },
      name: seed.configData.DisplayName,
      description: seed.configData.Desc,
      growTime: seed.configData.GrowTime,
      icon: getImageURL(seed.configData.Icon),
      rawData: seed,
      loot: (seed.configData.LootTable[0]
        ? seed.configData.LootTable[0].entries[0].Value.entries
        : seed.configData.LootTable.entries[0].Value.entries
        ? seed.configData.LootTable.entries[0].Value.entries
        : seed.configData.LootTable.entries
      ).map((entry: any) => {
        return {
          weight: entry.Weight,
          item: {
            id: entry.Value._data.id,
            amount: entry.Value._data._am ?? 1,
            tier: entry.Value._data.tn ?? null,
            maxAmount: entry.Value._maxAmount,
          },
        } satisfies seeds["loot"][number];
      }),
    } satisfies seeds;
  }) satisfies seeds[];
};

export default getSeeds;
