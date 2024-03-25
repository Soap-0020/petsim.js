import getURL from "../getURL";

const getCollection = async (collection: string) => {
  return await getURL(`https://biggamesapi.io/api/collection/${collection}`);
};

export default getCollection;
