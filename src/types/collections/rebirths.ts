type unlocks = {
  title: string;
  icon: string;
  description: string;
  guiTitle: string | null;
};

type rebirths = {
  configName: string;
  category: "Rebirths";
  collection: "Rebirths";
  strengthPowerBoost: number;
  name: string;
  boostDescription: string;
  zoneRequired: number;
  rebirth: number;
  unlocks: unlocks[];
  rawData: any;
};

export default rebirths;
