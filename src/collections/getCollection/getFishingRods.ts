import getImageURL from "../../other/getImageURL";
import FishingRods from "../../types/collections/fishingRods";
import RapData from "../../types/rapData";
import fetchCollection from "../fetchCollection";

const getFishingRods = async (
  rapData: RapData[] = []
): Promise<FishingRods[]> => {
  const data = await fetchCollection("FishingRods");

  rapData = rapData.filter((item) => item.category == "Misc");

  return data.map((fishingRod: any) => {
    return {
      collection: "FishingRods",
      category: "FishingRods",
      configName: fishingRod.configName,
      fishingChance: fishingRod.configData.FishingChance,
      fishingOdds: fishingRod.configData.FishingOdds.map((fishingOdd: any) => {
        return {
          chance: fishingOdd[0],
          type: fishingOdd[1],
        } satisfies FishingRods["fishingOdds"][number];
      }),
      currencyMultiplier: fishingRod.configData.FishingCurrencyMultiplier,
      name: fishingRod.configData.DisplayName,
      minimumFishingTime: fishingRod.configData.MinFishingTime,
      speedMultiplier: fishingRod.configData.FishingGameSpeedMultiplier,
      icon: getImageURL(fishingRod.configData.Icon),
      barSize: fishingRod.configData.BarSize,

      salePrice: fishingRod.configData.MerchantSalePrice ?? null,
      rap:
        rapData.find((item) => item.id == fishingRod.configData.DisplayName)
          ?.rap ?? null,
    } satisfies FishingRods;
  }) satisfies FishingRods[];
};

export default getFishingRods;
