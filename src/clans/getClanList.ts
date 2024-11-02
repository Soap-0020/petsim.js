import getURL from "../getURL";

const getClanList = async (): Promise<string[]> => {
  return await getURL("clansList");
};

export default getClanList;
