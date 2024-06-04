type Unlocks = {
  title: string;
  icon: string;
  description: string;
  guiTitle: string | null;
};

type Rebirths = {
  configName: string;
  category: "Rebirths";
  collection: "Rebirths";
  strengthPowerBoost: number;
  name: string;
  boostDescription: string;
  zoneRequired: number;
  rebirth: number;
  unlocks: Unlocks[];
  rawData: any;
};

export default Rebirths;
