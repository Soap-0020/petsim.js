import apiError from "../errors/apiError";
import fullClan from "../types/clans/fullClan";
import jsonData from "../types/jsonData";

const getClan = async (tag: string) => {
  const data = await fetch(`https://biggamesapi.io/api/clan/${tag}`);
  const json = (await data.json()) as jsonData;

  if (json.data) {
    const battles: { [key: string]: any } = {};

    Object.keys(json.data.Battles).forEach((battle: string) => {
      const foundBattle = json.data.Battles[battle];
      const data = {
        processedAwards: foundBattle.ProcessedAwards,
        awardUserIds: foundBattle.AwardUserIDs,
        battleId: foundBattle.BattleID,
        points: foundBattle.Points,
        earnedMedal: foundBattle.EarnedMedal ?? null,
        pointContributions: foundBattle.PointContributions.map(
          (contribution: any) => {
            return {
              userId: contribution.UserID,
              points: contribution.Points,
            };
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
      };
      battles[battle] = data;
    });

    const formattedJson: fullClan = {
      created: json.data.Created,
      owner: json.data.Owner,
      name: json.data.Name,
      icon: json.data.Icon,
      description: json.data.Desc,
      memberCapacity: json.data.MemberCapacity,
      officerCapacity: json.data.OfficerCapacity,
      guildLevel: json.data.GuildLevel,
      diamonds: json.data.DepositedDiamonds,
      status: {
        text: json.data.Status ?? null,
        timestamp: json.data.StatusTimestamp ?? null,
        username: json.data.StatusUsername ?? null,
      },
      diamondContributions: {
        allTime: {
          sum: json.data.DiamondContributions.AllTime.Sum,
          data: json.data.DiamondContributions.AllTime.Data.map(
            (donation: any) => {
              return {
                userId: donation.UserID,
                diamonds: donation.Diamonds,
              };
            }
          ),
        },
      },
      members: json.data.Members.map((member: any) => {
        return {
          userId: member.UserID,
          permissionLevel: member.PermissionLevel,
          joinTime: member.JoinTime,
        };
      }),
      countryCode: json.data.CountryCode,
      lastKickTimestamp: json.data.lastKickTimestamp ?? null,
      medals: {
        bronze: json.data.BronzeMedals ?? 0,
        silver: json.data.SilverMedals ?? 0,
        gold: json.data.GoldMedals ?? 0,
      },

      battles,
    };

    return formattedJson;
  } else if (json.error) throw new apiError(json.error.message);
  throw new Error("Unknown Error");
};

export default getClan;
