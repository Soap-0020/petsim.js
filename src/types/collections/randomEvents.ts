type AreaWhitelist = {
  magma: boolean;
  main: boolean;
  ice: boolean;
};

type RandomEvents = {
  category: "RandomEvents";
  configName: string;
  collection: "RandomEvents";
  minimumZone: number | null;
  allowInZones: boolean;
  color: string;
  duration: number;
  allowInInstances: boolean;
  allowMultiple: boolean;
  name: string;
  playtimeRequirement: number;
  chance: number;

  areaWhitelist: AreaWhitelist;
  icon: string;
  breakingRequirement: number;
  rawData: any;
};

export default RandomEvents;
