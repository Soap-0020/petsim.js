import getURL from "../getURL";

const getClanTotal = async (): Promise<number> => {
  const data = await getURL("https://biggamesapi.io/api/clansTotal");

  return data;
};

export default getClanTotal;
