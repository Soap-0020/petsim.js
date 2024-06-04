import getImageURL from "../../other/getImageURL";
import Rebirths from "../../types/collections/rebirths";
import fetchCollection from "../fetchCollection";

const getRebirths = async (): Promise<Rebirths[]> => {
  const data = await fetchCollection("Rebirths");

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
        } satisfies Rebirths["unlocks"][number];
      }),
    } satisfies Rebirths;
  }) satisfies Rebirths[];
};

export default getRebirths;
