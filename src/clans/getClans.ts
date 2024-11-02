import getURL from "../getURL";
import ClanSearchDetails from "../types/clanSearchDetails";

const getClans = async ({
  page = 1,
  pageSize = 10,
  sort = "Points",
  sortOrder = "desc",
}: ClanSearchDetails = {}) => {
  return await getURL(
    `clans?page=${page}&pageSize=${pageSize}&sort=${sort}&sortOrder=${sortOrder}`
  );
};

export default getClans;
