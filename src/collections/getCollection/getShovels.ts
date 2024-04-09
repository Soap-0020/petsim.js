import getCollection from "../getCollection";
import shovels from "../../types/collections/shovels";
import getRAP from "../../other/getRAP";
import getImageURL from "../../other/getImageURL";

const getShovels = async (): Promise<shovels[]> => {
  const data = await getCollection("Shovels");

  const rapData = (await getRAP()).filter((item) => {
    return item.category == "Misc";
  });

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
