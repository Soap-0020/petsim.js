import getURL from "../getURL";
import getImageURL from "../other/getImageURL";
import ClanOverview from "../types/clans/clanOverview";
import SearchDetails from "../types/clans/searchDetails";

const getClans = async ({
  page = 1,
  pageSize = 10,
  sort = "Points",
  sortOrder = "desc",
}: SearchDetails = {}): Promise<ClanOverview[]> => {
  const data = await getURL(
    `https://biggamesapi.io/api/clans?page=${page}&pageSize=${pageSize}&sort=${sort}&sortOrder=${sortOrder}`
  );

  return data.map((clan: any) => {
    return {
      created: clan.Created,
      name: clan.Name,
      memberCapacity: clan.MemberCapacity,
      depositedDiamonds: clan.DepositedDiamonds,
      countryCode: clan.CountryCode,
      members: clan.Members,
      points: clan.Points ?? null,
      rawData: clan,
      icon: getImageURL(clan.Icon),
    } satisfies ClanOverview;
  }) satisfies ClanOverview[];
};

export default getClans;
