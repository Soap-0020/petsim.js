import getURL from "../getURL";
import getImageURL from "../other/getImageURL";
import fullClan from "../types/clans/fullClan";

const getClan = async (tag: string): Promise<fullClan> => {
  const data = await getURL(`https://biggamesapi.io/api/clan/${tag}`);

  const battles: { [key: string]: any } = {};

  Object.keys(data.Battles ?? []).forEach((battle: string) => {
    const foundBattle = data.Battles[battle];

    const battleData = {
      processedAwards: foundBattle.ProcessedAwards,
      awardUserIds: foundBattle.AwardUserIDs,
      battleId: foundBattle.BattleID,
      points: foundBattle.Points,
      earnedMedal: foundBattle.EarnedMedal ?? null,
      pointContributions: (foundBattle.PointContributions ?? []).map(
        (contribution: any) => {
          return {
            userId: contribution.UserID,
            points: contribution.Points,
          } satisfies fullClan["battles"][string]["pointContributions"][number];
        }
      ),
      goals: foundBattle.Goals
        ? foundBattle.Goals.map((goal: any) => {
            const contributions: { [key: string]: any } = {};

            Object.keys(goal.Contributions).forEach((contribution: any) => {
              contributions[contribution.replace("u", "")] =
                goal.Contributions[contribution];
            });

            return {
              type: goal.Type,
              amount: goal.Amount,
              stars: goal.Stars,
              progress: goal.Progress,
              tier: goal.Tier,
              contributions: contributions,
            };
          })
        : [],
    } satisfies fullClan["battles"]["battle"];

    battles[battle] = battleData;
  });

  return {
    created: data.Created,
    owner: data.Owner,
    name: data.Name,
    icon: getImageURL(data.Icon),
    description: data.Desc,
    memberCapacity: data.MemberCapacity,
    officerCapacity: data.OfficerCapacity,
    guildLevel: data.GuildLevel,
    diamonds: data.DepositedDiamonds,
    status: {
      text: data.Status ?? null,
      timestamp: data.StatusTimestamp ?? null,
      username: data.StatusUsername ?? null,
    },
    diamondContributions: {
      allTime: {
        sum: data.DiamondContributions.AllTime.Sum,
        data: data.DiamondContributions.AllTime.Data.map((donation: any) => {
          return {
            userId: donation.UserID,
            diamonds: donation.Diamonds,
          } satisfies fullClan["diamondContributions"]["allTime"]["data"][number];
        }),
      },
    },
    members: data.Members.map((member: any) => {
      return {
        userId: member.UserID,
        permissionLevel: member.PermissionLevel,
        joinTime: member.JoinTime,
      } satisfies fullClan["members"][number];
    }),
    countryCode: data.CountryCode,
    lastKickTimestamp: data.lastKickTimestamp ?? null,
    medals: {
      bronze: data.BronzeMedals ?? 0,
      silver: data.SilverMedals ?? 0,
      gold: data.GoldMedals ?? 0,
    },

    battles,

    rawData: data,
  } satisfies fullClan;
};

export default getClan;
