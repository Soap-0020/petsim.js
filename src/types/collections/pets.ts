type Rap = {
  shiny: boolean;
  variant: number | null;
  rap: number;
};

type Exist = {
  shiny: boolean;
  variant: number | null;
  exist: number;
};

type Thumbnails = {
  normal: string;
  golden: string | null;
};

type Animations = { [key: string]: any };

type Pets = {
  configName: string;
  category: string;
  collection: "Pets";
  thumbnails: Thumbnails;
  obtainable: boolean;
  huge: boolean;
  titanic: boolean;
  name: string;
  description: string | null;
  animations: Animations;
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

  rap: Rap[];
  exist: Exist[];

  rawData: any;
};

export default Pets;
