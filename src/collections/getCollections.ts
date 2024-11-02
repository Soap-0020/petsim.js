import getURL from "../getURL";

const getCollections = async (): Promise<string[]> => {
  return await getURL("collections");
};

export default getCollections;
