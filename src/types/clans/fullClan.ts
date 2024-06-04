type DonationData = {
  userId: number;
  diamonds: number;
};

type DiamondContributions = {
  sum: number;
  data: DonationData[];
};

type Member = {
  userId: number;
  permissionLevel: number;
  joinTime: number;
};

type Status = {
  text: string | null;
  timestamp: number | null;
  username: string | null;
};

type Medals = {
  bronze: number;
  silver: number;
  gold: number;
};

type PointContributions = {
  userId: number;
  points: number;
};

type Contributions = {
  [index: string]: number | undefined;
};

type Goals = {
  type: number;
  amount: number;
  stars: number;
  progress: number;
  tier: number;
  contributions: Contributions;
};

type Battle = {
  processedAwards: boolean;
  awardUserIds: number[];
  battleId: string;
  points: number;
  pointContributions: PointContributions[];
  earnedMedal: "Bronze" | "Silver" | "Gold" | null;

  goals: Goals[];
};

type Battles = {
  [index: string]: Battle;
};

type FullClan = {
  battles: Battles;
  created: number;
  owner: number;
  name: string;
  icon: string;
  description: string;
  memberCapacity: number;
  officerCapacity: number;
  guildLevel: number;
  diamonds: number;
  status: Status;
  diamondContributions: {
    allTime: DiamondContributions;
  };
  members: Member[];
  countryCode: string;
  lastKickTimestamp: number | null;
  medals: Medals;

  rawData: any;
};

export default FullClan;
