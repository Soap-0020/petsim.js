import Zones from "../../types/collections/zones";
import fetchCollection from "../fetchCollection";

const getZones = async (): Promise<Zones[]> => {
  const data = await fetchCollection("Zones");

  return data.map((zone: any) => {
    const breakables: { [key: string]: any } = {};

    Object.keys(zone.configData.Breakables).forEach((e) => {
      breakables[e] = {
        settings: {
          respawnTime: zone.configData.Breakables[e].Settings.RespawnTime,
          daycareIgnore:
            zone.configData.Breakables[e].Settings.DaycareIgnore ?? false,
          maximum: zone.configData.Breakables[e].Settings.Maximum,
        } satisfies Zones["breakables"][string]["settings"],
        data: zone.configData.Breakables[e].Data.map((data: any) => {
          return {
            worldNumber: data.WorldNumber,
            type: data.Type,
            weight: data.Weight,
          } satisfies Zones["breakables"][string]["data"][number];
        }),
      };
    });
    return {
      category: zone.category,
      rawData: zone,
      collection: "Zones",
      configName: zone.configData,
      currency: zone.configData.Currency,
      zoneNumber: zone.configData.ZoneNumber,
      name: zone.configData.ZoneName,
      ambience: {
        soundId: zone.configData.Ambience
          ? zone.configData.Ambience.SoundId
          : null,
      },
      maximumAvailableEgg: zone.configData.MaximumAvailableEgg,
      worldNumber: zone.configData.WorldNumber,
      lighting: zone.configData.Lighting ?? {},
      breakables: breakables,
    } satisfies Zones;
  }) satisfies Zones[];
};

export default getZones;
