import getURL from "../getURL";

const getClansTotal = async (): Promise<number> => {
  return await getURL("clansTotal");
};

export default getClansTotal;
