import getCollection from "../getCollection";
import getRAP from "../../other/getRAP";
import getImageURL from "../../other/getImageURL";
import hoverboards from "../../types/collections/hoverboards";

const getHoverboards = async (): Promise<hoverboards[]> => {
  const data = await getCollection("Hoverboards");

  const rapData = (await getRAP()).filter((item) => {
    return item.category == "Hoverboard";
  });

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
    } satisfies hoverboards;
  }) satisfies hoverboards[];
};

export default getHoverboards;
