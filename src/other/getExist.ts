import getURL from "../getURL";
import ExistData from "../types/existData";

const getExist = async (): Promise<ExistData[]> => {
  const data = await getURL("https://biggamesapi.io/api/exists");

  return data.map((item: any) => {
    return {
      category: item.category,
      id: item.configData.id,
      tier: item.configData.tn ?? null,
      variant: item.configData.pt ?? null,
      shiny: item.configData.sh ?? false,
      exist: item.value,
    } satisfies ExistData;
  }) satisfies ExistData[];
};

export default getExist;
