import getImageURL from "../../other/getImageURL";
import currency from "../../types/collections/currency";
import getCollection from "../getCollection";

const getCurrency = async (): Promise<currency[]> => {
  const data = await getCollection("Currency");

  return data.map((currency: any) => {
    return {
      category: "Currency",
      collection: "Currency",
      name: currency.configData.DisplayName,
      isWorldCurrency: currency.configData.IsWorldCurrency ?? false,
      description: currency.configData.Desc,
      tradeable: currency.configData.Tradable ?? false,
      maxAmount: currency.configData.MaxAmount,
      configName: currency.configName,

      rarity: {
        number: currency.configData.Rarity.RarityNumber,
        name: currency.configData.Rarity.DisplayName,
        announce: currency.configData.Rarity.Announce,
      },

      tiers: currency.configData.Tiers.map((tier: any) => {
        return {
          orbImage: getImageURL(tier.orbImage),
          imageOutline: getImageURL(tier.imageOutline),
          order: tier.Order,
          isBottom: tier.isBottom ?? false,
          value: tier.value,
          name: tier.tierName,
          tinyImage: getImageURL(tier.tinyImage),
          rainData: {
            lightEmission: tier.rainData?.LightEmission ?? null,
          },
        } satisfies currency["tiers"][number];
      }),

      bagTiers:
        currency.configData.BagTiers?.map((bagTier: any) => {
          return {
            value: bagTier.value,
            image: getImageURL(bagTier.image),
          } satisfies currency["bagTiers"][number];
        }) ?? [],

      rawData: currency,
    } satisfies currency;
  }) satisfies currency[];
};

export default getCurrency;
