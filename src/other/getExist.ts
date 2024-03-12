import apiError from "../errors/apiError";
import existData from "../types/existData";
import jsonData from "../types/jsonData";

const getExist = async () => {
  const data = await fetch("https://biggamesapi.io/api/exists");
  const json = (await data.json()) as jsonData;

  if (json.error) throw new apiError(json.error.message);
  if (json.data) {
    const formattedJson: existData[] = json.data.map((item: any) => {
      return {
        category: item.category,
        id: item.configData.id,
        tier: item.configData.tn ?? null,
        variant: item.configData.pt ?? null,
        shiny: item.configData.sh ?? false,
        exist: item.value,
      };
    });

    return formattedJson;
  }

  throw new Error("Unknown Error");
};

export default getExist;
