import ExistData from "../types/existData";
import RapData from "../types/rapData";
import getAchievements from "./getCollection/getAchievements";
import getBoosts from "./getCollection/getBoosts";
import getBooths from "./getCollection/getBooths";
import getBuffs from "./getCollection/getBuffs";
import getCharms from "./getCollection/getCharms";
import getClanBattles from "./getCollection/getClanBattles";
import getCurrency from "./getCollection/getCurrency";
import getEggs from "./getCollection/getEggs";
import getEnchants from "./getCollection/getEnchants";
import getFishingRods from "./getCollection/getFishingRods";
import getFlags from "./getCollection/getFlags";
import getFruits from "./getCollection/getFruits";
import getHoverboards from "./getCollection/getHoverboards";
import getLootboxes from "./getCollection/getLootboxes";
import getMastery from "./getCollection/getMastery";
import getMerchants from "./getCollection/getMerchants";
import getMiscItems from "./getCollection/getMiscItems";
import getPets from "./getCollection/getPets";
import getPotions from "./getCollection/getPotions";
import getRandomEvents from "./getCollection/getRandomEvents";
import getRanks from "./getCollection/getRanks";
import getRarities from "./getCollection/getRarities";
import getRebirths from "./getCollection/getRebirths";
import getSecretRooms from "./getCollection/getSecretRooms";
import getSeeds from "./getCollection/getSeeds";
import getShovels from "./getCollection/getShovels";
import getSprinklers from "./getCollection/getSprinklers";
import getUltimates from "./getCollection/getUltimates";
import getUpgrades from "./getCollection/getUpgrades";
import getWateringCans from "./getCollection/getWateringCans";
import getWorlds from "./getCollection/getWorlds";
import getZones from "./getCollection/getZones";

const getCollection = async (
  collection: string,
  rapData?: RapData[],
  existData?: ExistData[]
): Promise<any> => {
  collection = collection.toLowerCase();

  if (collection == "achievements") return await getAchievements();
  if (collection == "boosts") return await getBoosts();
  if (collection == "booths") return await getBooths(rapData);
  if (collection == "buffs") return await getBuffs(rapData);
  if (collection == "charms") return await getCharms(rapData);
  if (collection == "guildbattles" || collection === "clanbattles")
    return await getClanBattles();
  if (collection == "currency") return await getCurrency();
  if (collection == "eggs") return await getEggs(rapData);
  if (collection == "enchants") return await getEnchants(rapData);
  if (collection == "fishingrods") return await getFishingRods(rapData);
  if (collection == "flags" || collection === "zoneflags")
    return await getFlags(rapData);
  if (collection == "fruits") return await getFruits(rapData);
  if (collection == "hoverboards") return await getHoverboards(rapData);
  if (collection == "lootboxes") return await getLootboxes(rapData);
  if (collection == "mastery") return await getMastery();
  if (collection == "merchants") return await getMerchants();
  if (collection == "misc" || collection === "miscitems")
    return await getMiscItems(rapData);
  if (collection == "pets") return await getPets(rapData, existData);
  if (collection == "potions") return await getPotions(rapData);
  if (collection == "randomevents") return await getRandomEvents();
  if (collection == "ranks") return await getRanks();
  if (collection == "rarities") return await getRarities();
  if (collection == "rebirths") return await getRebirths();
  if (collection == "secretrooms") return await getSecretRooms();
  if (collection == "seeds") return await getSeeds(rapData);
  if (collection == "shovels") return await getShovels(rapData);
  if (collection == "sprinklers") return await getSprinklers(rapData);
  if (collection == "ultimates") return await getUltimates(rapData);
  if (collection == "upgrades") return await getUpgrades();
  if (collection == "wateringcans") return await getWateringCans(rapData);
  if (collection == "worlds") return await getWorlds();
  if (collection == "zones") return await getZones();

  throw new Error("Invalid Collection");
};

export default getCollection;
