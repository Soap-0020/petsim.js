type ambience = {
  soundId: string | null;
};

type breakable = {
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

type breakables = { [key: string]: breakable };

type lighting = { [key: string]: any };

type zones = {
  configName: string;
  category: string;
  collection: "Zones";
  name: string;
  ambience: ambience;
  breakables: breakables;
  maximumAvailableEgg: number;
  worldNumber: number;
  currency: string;
  zoneNumber: number;
  lighting: lighting;
  rawData: any;
};

export default zones;
