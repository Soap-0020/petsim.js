import getEggs from "../collections/getCollection/getEggs";

const getActiveHuges = async (): Promise<string[]> => {
  throw new Error("⚠️ DO NOT USE. WAITING ON API ACCESS");
  const eggs = await getEggs();

  return eggs
    .find((e) => e.name == "Active Huge Egg")
    ?.pets.map((e) => e.name) as string[];
};

export default getActiveHuges;
