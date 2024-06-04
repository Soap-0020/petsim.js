import getURL from "../getURL";

const getClanTotal = async (): Promise<number> => {
  return await getURL("https://biggamesapi.io/api/clansTotal");
};

export default getClanTotal;
