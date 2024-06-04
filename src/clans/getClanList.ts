import getURL from "../getURL";

const getClanList = async (): Promise<string[]> => {
  return await getURL("https://biggamesapi.io/api/clansList");
};

export default getClanList;
