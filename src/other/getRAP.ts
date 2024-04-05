import getURL from "../getURL";
import rapData from "../types/rapData";

const getRAP = async (): Promise<rapData[]> => {
  const data = await getURL("https://biggamesapi.io/api/rap");

  return data.map((item: any) => {
    return {
      category: item.category,
      id: item.configData.id,
      tier: item.configData.tn ?? null,
      variant: item.configData.pt ?? null,
      shiny: item.configData.sh ?? false,
      rap: item.value,
    } satisfies rapData;
  }) satisfies rapData[];
};

export default getRAP;
