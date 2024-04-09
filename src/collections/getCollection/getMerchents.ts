import getCollection from "../getCollection";
import merchents from "../../types/collections/merchents";

const getMerchents = async (): Promise<merchents[]> => {
  const data = await getCollection("Merchants");

  return data.map((merchent: any) => {
    return {
      collection: "Merchants",
      category: "Merchants",
      configName: merchent.configName,
      name: merchent.configData.DisplayName,
      machineName: merchent.configData.MachineName,
      rawData: merchent,
      stockByRespectLevel: merchent.configData.StockRangeByRespectLevel ?? [],
      slotRespectiveLevels: merchent.configData.SlotRespectLevels ?? [],
      refreshRate: merchent.configData.RefreshRate,
      isStatic: merchent.configData.IsStatic ?? false,
      priceMultiplier: merchent.configData.PriceMult,
      hideNotification: merchent.configData.HideNotification ?? false,
      hideRespect: merchent.configData.HideRespect ?? false,
    } satisfies merchents;
  }) satisfies merchents[];
};

export default getMerchents;
