import getImageURL from "../../other/getImageURL";
import getRAP from "../../other/getRAP";
import charms from "../../types/collections/charms";
import getCollection from "../getCollection";

const getCharms = async () => {
  const data = await getCollection("Charms");

  const rapData = (await getRAP()).filter((item) => {
    return item.category == "Charm";
  });

  return data.map((charm: any) => {
    let tier = charm.configData.BaseTier - 1;
    return {
      category: "Charms",
      collection: "Charms",
      baseTier: charm.configData.BaseTier,
      maxTier: charm.configData.MaxTier,
      icon: getImageURL(charm.configData.Icon),
      configName: charm.configName,
      rawData: charm,
      tiers: charm.configData.Tiers.map((charmTier: any) => {
        tier++;
        return {
          description: charmTier.Desc,
          name: charmTier.DisplayName,
          power: charmTier.Power,
          rarity: {
            number: charmTier.Rarity.RarityNumber,
            name: charmTier.Rarity.DisplayName,
            announce: charmTier.Rarity.Announce,
          },
          tier,
          rap:
            rapData.find((item) => {
              return (
                item.id + " Charm" == charmTier.DisplayName && item.tier == tier
              );
            })?.rap ?? null,
        } as charms["tiers"][number];
      }),
    } as charms;
  }) as charms[];
};

export default getCharms;
