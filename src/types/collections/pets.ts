type rap = {
  shiny: boolean;
  variant: number | null;
  rap: number;
};

type exist = {
  shiny: boolean;
  variant: number | null;
  exist: number;
};

type thumbnails = {
  normal: string;
  golden: string | null;
};

type animations = { [key: string]: any };

type pets = {
  configName: string;
  category: string;
  collection: "Pets";
  thumbnails: thumbnails;
  obtainable: boolean;
  huge: boolean;
  titanic: boolean;
  name: string;
  description: string | null;
  animations: animations;
  fly: boolean;
  power: number | null;
  egg: string | null;
  preventGolden: boolean;

  world: number | null;
  zone: number | null;

  hideSerial: boolean;
  hideExists: boolean;
  exclusiveLevel: number | null;
  isFromLastZone: boolean;

  rap: rap[];
  exist: exist[];

  rawData: any;
};

export default pets;
