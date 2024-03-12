import apiError from "../../errors/apiError";
import getRAP from "../../other/getRAP";
import buffs from "../../types/collections/buffs";
import jsonData from "../../types/jsonData";

const getBuffs = async () => {
  const data = await fetch("https://biggamesapi.io/api/collection/Buffs");
  const json = (await data.json()) as jsonData;

  if (json.error) throw new apiError(json.error.message);
  if (json.data) {
    const rapData = (await getRAP()).filter((item) => {
      return item.category == "Misc";
    });

    const formattedJson: buffs[] = json.data.map((buff: any) => {
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
      };
    });

    return formattedJson;
  }

  throw new Error("Unknown Error");
};

export default getBuffs;
