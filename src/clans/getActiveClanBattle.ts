import getURL from "../getURL";

const getActiveClanBattle = async () => {
  return await getURL("activeClanBattle");
};

export default getActiveClanBattle;
