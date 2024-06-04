import Buffs from "../../types/collections/buffs";
import RapData from "../../types/rapData";
import fetchCollection from "../fetchCollection";

const getBuffs = async (rapData: RapData[] = []): Promise<Buffs[]> => {
  const data = await fetchCollection("Buffs");

  rapData = rapData.filter((item) => item.category == "Misc");

  return data.map((buff: any) => {
    return {
      category: "Buffs",
      collection: "Buffs",
      length: buff.configData.Length,
      name: buff.configData.DisplayName,
      configName: buff.configName,

      rap:
        rapData.find((item) => {
          return item.id == buff.configData.DisplayName;
        })?.rap ?? null,

      rawData: buff,
    } satisfies Buffs;
  }) satisfies Buffs[];
};

export default getBuffs;
