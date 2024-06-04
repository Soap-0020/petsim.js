type ClanOverview = {
  created: number;
  name: string;
  memberCapacity: number;
  depositedDiamonds: number;
  countryCode: string | null;
  members: number;
  points: number | null;
  rawData: any;
  icon: string;
};

export default ClanOverview;
