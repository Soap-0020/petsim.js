type fishingOdds = {
  chance: number;
  type: string;
};

type fishingRods = {
  collection: "FishingRods";
  category: "FishingRods";
  configName: string;
  fishingChance: number;
  fishingOdds: fishingOdds[];
  currencyMultiplier: number;
  name: string;
  minimumFishingTime: number;
  speedMultiplier: number;
  icon: string;
  barSize: number;

  salePrice: number | null;
  rap: number | null;
};

export default fishingRods;
