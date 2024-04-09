import getCollection from "../getCollection";
import shovels from "../../types/collections/shovels";
import getImageURL from "../../other/getImageURL";
import rapType from "../../types/rapData";

const getShovels = async (rapData: rapType[] = []): Promise<shovels[]> => {
  const data = await getCollection("Shovels");

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
    } satisfies shovels;
  }) satisfies shovels[];
};

export default getShovels;
