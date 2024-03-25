import getURL from "../getURL";

const getCollections = async () => {
  return await getURL("https://biggamesapi.io/api/collections");
};

export default getCollections;
