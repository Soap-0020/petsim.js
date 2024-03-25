import getURL from "../getURL";
import existData from "../types/existData";

const getExist = async () => {
  const data = await getURL("https://biggamesapi.io/api/exists");

  return data.map((item: any) => {
    return {
      category: item.category,
      id: item.configData.id,
      tier: item.configData.tn ?? null,
      variant: item.configData.pt ?? null,
      shiny: item.configData.sh ?? false,
      exist: item.value,
    } as existData;
  }) as existData[];
};

export default getExist;
