import getCollection from "../getCollection";
import rebirths from "../../types/collections/rebirths";
import getImageURL from "../../other/getImageURL";

const getRebirths = async (): Promise<rebirths[]> => {
  const data = await getCollection("Rebirths");

  return data.map((rebirth: any) => {
    return {
      collection: "Rebirths",
      category: "Rebirths",
      configName: rebirth.configName,
      strengthPowerBoost: rebirth.configData.StrengthPowerBoost,
      name: rebirth.configData.DisplayName,
      boostDescription: rebirth.configData.BoostDesc,
      rebirth: rebirth.configData.RebirthNumber,
      rawData: rebirth,
      zoneRequired: rebirth.configData.ZoneNumberRequired,
      unlocks: rebirth.configData.RebirthUnlocks.map((unlock: any) => {
        return {
          title: unlock.Title,
          description: unlock.Desc,
          icon: getImageURL(unlock.Icon),
          guiTitle: unlock.GuiTitle ?? null,
        } satisfies rebirths["unlocks"][number];
      }),
    } satisfies rebirths;
  }) satisfies rebirths[];
};

export default getRebirths;
