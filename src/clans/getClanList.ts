import getURL from "../getURL";

const getClanList = async (): Promise<string[]> => {
  const data = await getURL("https://biggamesapi.io/api/clansList");

  return data;
};

export default getClanList;
