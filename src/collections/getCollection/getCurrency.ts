import apiError from "../../errors/apiError";
import currency from "../../types/collections/currency";
import jsonData from "../../types/jsonData";

const getCurrency = async () => {
  const data = await fetch("https://biggamesapi.io/api/collection/Currency");
  const json = (await data.json()) as jsonData;

  if (json.error) throw new apiError(json.error.message);
  if (json.data) {
    const formattedJson: currency[] = json.data.map((currency: any) => {
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
            orbImage: tier.orbImage,
            imageOutline: tier.imageOutline,
            order: tier.Order,
            isBottom: tier.isBottom ?? false,
            value: tier.value,
            name: tier.tierName,
            tinyImage: tier.tinyImage,
            rainData: {
              lightEmission: tier.rainData?.LightEmission ?? null,
            },
          };
        }),

        bagTiers:
          currency.configData.BagTiers?.map((bagTier: any) => {
            return {
              value: bagTier.value,
              image: bagTier.image,
            };
          }) ?? [],
      };
    });

    return formattedJson;
  }

  throw new Error("Unknown Error");
};

export default getCurrency;
