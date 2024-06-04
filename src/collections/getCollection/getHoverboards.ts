import getImageURL from "../../other/getImageURL";
import RapData from "../../types/rapData";
import Hoverboards from "../../types/collections/hoverboards";
import fetchCollection from "../fetchCollection";

const getHoverboards = async (
  rapData: RapData[] = []
): Promise<Hoverboards[]> => {
  const data = await fetchCollection("Hoverboards");

  rapData = rapData.filter((item) => item.category == "Hoverboard");

  return data.map((hoverboard: any) => {
    return {
      configName: hoverboard.configName,
      category: "Hoverboards",
      collection: "Hoverboards",
      rotationLimit: hoverboard.configData.RotationLimit ?? null,
      sounds: hoverboard.configData.Sounds,
      productId: hoverboard.configData.ProductId ?? null,
      animation: hoverboard.configData.Animation ?? null,
      bobRate: hoverboard.configData.BobRate ?? null,
      icon: getImageURL(hoverboard.configData.Icon),
      rarity: {
        number: hoverboard.configData.Rarity.RarityNumber,
        name: hoverboard.configData.Rarity.DisplayName,
        announce: hoverboard.configData.Rarity.Announce ?? false,
      },
      name: hoverboard.configData.DisplayName,
      description: hoverboard.configData.Desc,
      canBeShiny: hoverboard.configData.CanBeShiny ?? false,
      shinyParticleScale: hoverboard.configData.ShinyParticleScale ?? null,
      pitchScale: hoverboard.configData.PitchScale ?? null,
      hoverHeight: hoverboard.configData.HoverHeight ?? null,
      maxRoll: hoverboard.configData.MaxRoll ?? null,
      defaultJumpSpeedBoost:
        hoverboard.configData.DefaultJumpSpeedBoost ?? null,
      tradable: hoverboard.configData.Tradable ?? true,
      rawData: hoverboard,

      rap: {
        shiny:
          rapData.find(
            (e) =>
              e.id ==
                hoverboard.configData.DisplayName.replace(" Hoverboard", "") &&
              e.shiny == true
          )?.rap ?? null,
        normal:
          rapData.find(
            (e) =>
              e.id ==
                hoverboard.configData.DisplayName.replace(" Hoverboard", "") &&
              e.shiny == false
          )?.rap ?? null,
      },
    } satisfies Hoverboards;
  }) satisfies Hoverboards[];
};

export default getHoverboards;
