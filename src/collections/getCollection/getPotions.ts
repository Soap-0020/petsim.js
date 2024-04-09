import getCollection from "../getCollection";
import getImageURL from "../../other/getImageURL";
import potions from "../../types/collections/potions";
import rapType from "../../types/rapData";

const getPotions = async (rapData: rapType[] = []): Promise<potions[]> => {
  const data = await getCollection("Potions");

  rapData = rapData.filter((item) => item.category == "Potion");

  return data.map((potion: any) => {
    let tierNumber = potion.configData.BaseTier - 1;

    return {
      collection: "Potions",
      category: "Potions",
      configName: potion.configName,
      primaryColor: potion.configData.PrimaryColor,
      secondaryColor: potion.configData.SecondaryColor,
      maxTier: potion.configData.MaxTier,
      baseTier: potion.configData.BaseTier,
      rawData: potion,
      tiers: potion.configData.Tiers.map((tier: any) => {
        tierNumber++;
        return {
          rarity: {
            number: tier.Rarity.RarityNumber,
            name: tier.Rarity.DisplayName,
            announce: tier.Rarity.Announce,
          },
          power: tier.Power,
          description: tier.Desc,
          time: tier.Time,
          icon: getImageURL(tier.Icon),
          name: tier.DisplayName,
          tier: tierNumber,

          rap:
            rapData.find(
              (e) =>
                e.id == potion.configName.split("| ")[1] && e.tier == tierNumber
            )?.rap ?? null,
        } satisfies potions["tiers"][number];
      }),
    } satisfies potions;
  }) satisfies potions[];
};

export default getPotions;
