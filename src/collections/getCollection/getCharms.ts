import apiError from "../../errors/apiError";
import getRAP from "../../other/getRAP";
import charms from "../../types/collections/charms";
import jsonData from "../../types/jsonData";

const getCharms = async () => {
  const data = await fetch("https://biggamesapi.io/api/collection/Charms");
  const json = (await data.json()) as jsonData;

  if (json.error) throw new apiError(json.error.message);
  if (json.data) {
    const rapData = (await getRAP()).filter((item) => {
      return item.category == "Charm";
    });

    const formattedJson: charms[] = json.data.map((charm: any) => {
      let tier = 0;
      return {
        category: "Charms",
        collection: "Charms",
        baseTier: charm.configData.BaseTier,
        maxTier: charm.configData.MaxTier,
        icon: charm.configData.Icon,
        configName: charm.configName,
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
                  item.id + " Charm" == charmTier.DisplayName &&
                  item.tier == tier
                );
              })?.rap ?? null,
          };
        }),
      };
    });

    return formattedJson;
  }

  throw new Error("Unknown Error");
};

export default getCharms;
