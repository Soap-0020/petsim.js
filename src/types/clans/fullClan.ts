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

type battle = {
  processedAwards: boolean;
  awardUserIds: number[];
  battleId: string;
  points: number;
  pointContributions: pointContributions[];
  earnedMedal: "Bronze" | "Silver" | "Gold" | null;
};

type battles = {
  [index: string]: battle;
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
