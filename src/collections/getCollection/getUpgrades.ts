import getImageURL from "../../other/getImageURL";
import Upgrades from "../../types/collections/upgrades";
import fetchCollection from "../fetchCollection";

const getUpgrades = async (): Promise<Upgrades[]> => {
  const data = await fetchCollection("Upgrades");

  return data.map((upgrade: any) => {
    return {
      rawData: upgrade,
      category: "Upgrades",
      collection: "Upgrades",
      configName: upgrade.configName,
      icon:
        upgrade.configData.Icon == ""
          ? null
          : getImageURL(upgrade.configData.Icon),
      tierPowers: upgrade.configData.TierPowers,
      tierCosts: upgrade.configData.TierCosts,
      tierCurrencies: upgrade.configData.TierCurrencies.map((currency: any) => {
        return {
          rariry: {
            name: currency.Rarity.DisplayName,
            number: currency.Rarity.RarityNumber,
            announce: currency.Rarity.Announce,
          },
          tradeable: currency.Tradable ?? true,
          tiers: currency.Tiers.map((tier: any) => {
            return {
              orbImage: getImageURL(tier.orbImage),
              imageOutline: getImageURL(tier.imageOutline),
              isBottom: tier.isBottom,
              order: tier.Order,
              rainData: {
                lightEmission: tier.rainData.LightEmission,
              },
              value: tier.value,
              tinyImage: getImageURL(tier.tinyImage),
              name: tier.tierName,
            } satisfies Upgrades["tierCurrencies"][number]["tiers"][number];
          }),
          name: currency.DisplayName,
          maxAmount: currency.MaxAmount,
          description: currency.Desc,
          bagTiers: currency.BagTiers.map((bagTier: any) => {
            return {
              value: bagTier.value,
              image: getImageURL(bagTier.image),
            } satisfies Upgrades["tierCurrencies"][number]["bagTiers"][number];
          }),
        } satisfies Upgrades["tierCurrencies"][number];
      }),
    } satisfies Upgrades;
  }) satisfies Upgrades[];
};

export default getUpgrades;
