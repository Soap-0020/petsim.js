import apiError from "../errors/apiError";
import jsonData from "../types/jsonData";
import rapData from "../types/rapData";

const getRAP = async () => {
  const data = await fetch("https://biggamesapi.io/api/rap");
  const json = (await data.json()) as jsonData;

  if (json.error) throw new apiError(json.error.message);
  if (json.data) {
    const formattedJson: rapData[] = json.data.map((item: any) => {
      return {
        category: item.category,
        id: item.configData.id,
        tier: item.configData.tn ?? null,
        variant: item.configData.pt ?? null,
        shiny: item.configData.sh ?? false,
        rap: item.value,
      };
    });

    return formattedJson;
  }

  throw new Error("Unknown Error");
};

export default getRAP;
