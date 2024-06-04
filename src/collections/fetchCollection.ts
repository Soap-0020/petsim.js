import getURL from "../getURL";

const fetchCollection = async (collection: string) => {
  return await getURL(`https://biggamesapi.io/api/collection/${collection}`);
};

export default fetchCollection;
