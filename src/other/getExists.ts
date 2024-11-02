import getURL from "../getURL";

const getExists = async () => {
  return await getURL("exists");
};

export default getExists;
