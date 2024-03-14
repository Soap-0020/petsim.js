import apiError from "../errors/apiError";
import clanOverview from "../types/clans/clanOverview";
import searchDetails from "../types/clans/searchDetails";
import jsonData from "../types/jsonData";

const getClans = async ({
  page = 1,
  pageSize = 10,
  sort = "Points",
  sortOrder = "desc",
}: searchDetails = {}) => {
  const data = await fetch(
    `https://biggamesapi.io/api/clans?page=${page}&pageSize=${pageSize}&sort=${sort}&sortOrder=${sortOrder}`
  );
  const json = (await data.json()) as jsonData;

  if (json.error) throw new apiError(json.error.message);
  if (json.data) {
    const formattedJson: clanOverview[] = json.data.map((clan: any) => {
      return {
        created: clan.Created,
        name: clan.Name,
        memberCapacity: clan.MemberCapacity,
        depositedDiamonds: clan.DepositedDiamonds,
        countryCode: clan.CountryCode,
        members: clan.Members,
        points: clan.Points ?? null,
      };
    });

    return formattedJson;
  }

  throw new Error("Unknown Error");
};

export default getClans;
