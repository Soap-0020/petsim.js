type donationData = {
  userId: number;
  diamonds: number;
};

type diamondContributions = {
  sum: number;
  data: donationData[];
};

type member = {
  userId: number;
  permissionLevel: number;
  joinTime: number;
};

type status = {
  text: string | null;
  timestamp: number | null;
  username: string | null;
};

type medals = {
  bronze: number;
  silver: number;
  gold: number;
};

type pointContributions = {
  userId: number;
  points: number;
};

type contributions = {
  [index: string]: number | undefined;
};

type goals = {
  type: number;
  amount: number;
  stars: number;
  progress: number;
  tier: number;
  contributions: contributions;
};

type battle = {
  processedAwards: boolean;
  awardUserIds: number[];
  battleId: string;
  points: number;
  pointContributions: pointContributions[];
  earnedMedal: "Bronze" | "Silver" | "Gold" | null;

  goals: goals[];
};

type battles = {
  [index: string]: battle | undefined;
};

type fullClan = {
  battles: battles;
  created: number;
  owner: number;
  name: string;
  icon: string;
  description: string;
  memberCapacity: number;
  officerCapacity: number;
  guildLevel: number;
  diamonds: number;
  status: status;
  diamondContributions: {
    allTime: diamondContributions;
  };
  members: member[];
  countryCode: string;
  lastKickTimestamp: number | null;
  medals: medals;
};

export default fullClan;
