type productIds = {
  [index: string]: number;
};

type pets = [string, number, string?];

type rarity = {
  number: number;
  name: string;
  announce: boolean;
};

type eggs = {
  collection: "Eggs";
  category:
    | "Exclusive Eggs"
    | "Update 1"
    | "Update 2"
    | "Update 3"
    | "Update 4"
    | "Update 5"
    | "Release"
    | "Machine Eggs"
    | "Update 6"
    | string;

  name: string;
  rarity?: rarity;
  disableGold?: boolean;
  disableRainbow?: boolean;
  rainbowChance?: number;
  shinyChance?: number;
  goldChance?: number;
  disableModifiers?: boolean;
  icon: string;
  pets: pets[];

  eggNumber?: number;
  worldNumber?: number;
  currency?: string;

  productIds?: productIds;
};

export default eggs;
