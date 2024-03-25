import getRAP from "../../other/getRAP";
import buffs from "../../types/collections/buffs";
import getCollection from "../getCollection";

const getBuffs = async () => {
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
    } as buffs;
  }) as buffs[];
};

export default getBuffs;
