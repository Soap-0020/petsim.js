import Rarity from "../rarity";

type Rap = {
  normal: number | null;
  shiny: number | null;
};

type Sounds = { [key: string]: string[] };

type Hoverboards = {
  configName: string;
  category: "Hoverboards";
  collection: "Hoverboards";
  rarity: Rarity;
  name: string;
  description: string;
  sounds: Sounds;
  icon: string;
  canBeShiny: boolean;
  productId: string | null;
  shinyParticleScale: number | null;
  pitchScale: number | null;
  bobRate: number | null;
  hoverHeight: number | null;
  animation: number | null;
  maxRoll: number | null;
  rotationLimit: number | null;
  defaultJumpSpeedBoost: number | null;
  tradable: boolean;
  rap: Rap;

  rawData: any;
};
export default Hoverboards;
