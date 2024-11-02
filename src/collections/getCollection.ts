import getURL from "../getURL";

const getCollection = async (collection: string) => {
  return await getURL(`collection/${collection}`);
};

export default getCollection;
