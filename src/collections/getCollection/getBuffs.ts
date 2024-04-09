import buffs from "../../types/collections/buffs";
import rapType from "../../types/rapData";
import getCollection from "../getCollection";

const getBuffs = async (rapData: rapType[] = []): Promise<buffs[]> => {
  const data = await getCollection("Buffs");

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
    } satisfies buffs;
  }) satisfies buffs[];
};

export default getBuffs;
