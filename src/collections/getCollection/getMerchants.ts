import Merchants from "../../types/collections/merchants";
import fetchCollection from "../fetchCollection";

const getMerchants = async (): Promise<Merchants[]> => {
  const data = await fetchCollection("Merchants");

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
    } satisfies Merchants;
  }) satisfies Merchants[];
};

export default getMerchants;
