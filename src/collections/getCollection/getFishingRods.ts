import getCollection from "../getCollection";
import getRAP from "../../other/getRAP";
import fishingRods from "../../types/collections/fishingRods";
import getImageURL from "../../other/getImageURL";

const getFishingRods = async (): Promise<fishingRods[]> => {
  const data = await getCollection("FishingRods");

  const rapData = (await getRAP()).filter((item) => {
    return item.category == "Misc";
  });

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
        } satisfies fishingRods["fishingOdds"][number];
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
    } satisfies fishingRods;
  }) satisfies fishingRods[];
};

export default getFishingRods;
