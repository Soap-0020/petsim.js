type FishingOdds = {
  chance: number;
  type: string;
};

type FishingRods = {
  collection: "FishingRods";
  category: "FishingRods";
  configName: string;
  fishingChance: number;
  fishingOdds: FishingOdds[];
  currencyMultiplier: number;
  name: string;
  minimumFishingTime: number;
  speedMultiplier: number;
  icon: string;
  barSize: number;

  salePrice: number | null;
  rap: number | null;
};

export default FishingRods;
