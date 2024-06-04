import getImageURL from "../../other/getImageURL";
import Shovels from "../../types/collections/shovels";
import RapData from "../../types/rapData";
import fetchCollection from "../fetchCollection";

const getShovels = async (rapData: RapData[] = []): Promise<Shovels[]> => {
  const data = await fetchCollection("Shovels");

  rapData = rapData.filter((item) => item.category == "Misc");

  return data.map((shovel: any) => {
    return {
      collection: "Shovels",
      category: "Shovels",
      configName: shovel.configName,
      name: shovel.configData.DisplayName,
      itemId: shovel.configData.AssociatedItemID,
      icon: getImageURL(shovel.configData.Icon),
      description: shovel.configData.Desc,
      salePrice: shovel.configData.MerchantSalePrice ?? null,
      rawData: shovel,
      rap:
        rapData.find((e) => e.id == shovel.configData.DisplayName)?.rap ?? null,
    } satisfies Shovels;
  }) satisfies Shovels[];
};

export default getShovels;
