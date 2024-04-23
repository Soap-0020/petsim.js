import fullClan from "../types/clans/fullClan";
import fullMember from "../types/clans/fullMember";
import getClan from "./getClan";

//IMPORTANT getClanMembers returns an array of fullMembers with more properties than the regular member type

const getClanMembers = async (tag: string): Promise<fullMember[]> => {
    const clan = await getClan(tag);
    //the owner of the clan is added to the members array for convenience
    clan.members.push({
      userId: clan.owner,
      joinTime: clan.created,
      permissionLevel: 100,
    } as fullMember);

    return clan.members.map((member: fullClan["members"][number]) => {
      const mostRecentBattle = Object.values(clan.battles)[
        Object.values(clan.battles).length - 1
      ];
      const points = mostRecentBattle.pointContributions.find(
        (contribution) => contribution.userId === member.userId
      );
      const diamonds = clan.diamondContributions.allTime.data.find(
        (donation) => donation.userId === member.userId
      );

      return {
        userId: member.userId,
        joinTime: member.joinTime,
        permissionLevel: member.permissionLevel,
        diamondsDonated: diamonds?.diamonds || 0,
        latestPoints: points?.points || 0,
        claimedLatestPrize: mostRecentBattle.awardUserIds.includes(
          member.userId
        ),
      } satisfies fullMember;
    }) satisfies fullMember[];
};

export default getClanMembers;
