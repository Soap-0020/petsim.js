import getRAP from "../../other/getRAP";
import buffs from "../../types/collections/buffs";
import getCollection from "../getCollection";

const getBuffs = async (): Promise<buffs[]> => {
  const data = await getCollection("Buffs");

  const rapData = (await getRAP()).filter((item) => {
    return item.category == "Misc";
  });

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
