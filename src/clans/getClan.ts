import getURL from "../getURL";

const getClan = async (tag: string) => {
  return await getURL(`clan/${tag}`);
};

export default getClan;
