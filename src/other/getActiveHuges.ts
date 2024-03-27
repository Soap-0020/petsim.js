import getEggs from "../collections/getCollection/getEggs";

const getActiveHuges = async (): Promise<string[]> => {
  const eggs = await getEggs();

  return eggs
    .find((e) => e.name == "Active Huge Egg")
    ?.pets.map((e) => e.name) as string[];
};

export default getActiveHuges;
