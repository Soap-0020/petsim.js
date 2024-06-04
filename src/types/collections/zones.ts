type Ambience = {
  soundId: string | null;
};

type Breakable = {
  settings: {
    respawnTime: number;
    daycareIgnore: boolean;
    maximum: number;
  };
  data: {
    worldNumber: number;
    type: string;
    weight: number;
  }[];
};

type Breakables = { [key: string]: Breakable };

type Lighting = { [key: string]: any };

type Zones = {
  configName: string;
  category: string;
  collection: "Zones";
  name: string;
  ambience: Ambience;
  breakables: Breakables;
  maximumAvailableEgg: number;
  worldNumber: number;
  currency: string;
  zoneNumber: number;
  lighting: Lighting;
  rawData: any;
};

export default Zones;
