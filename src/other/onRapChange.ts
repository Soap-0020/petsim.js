import getRAP from "./getRAP";
import rapData from "../types/rapData";
import rapCallback from "../types/rapCallback";

const onRapChange = (callback: rapCallback) => {
  (async () => {
    let index = 0;
    const cache: rapData[] = [];
    while (true) {
      const data = await getRAP();

      for (const pet of data) {
        const foundCache = cache.find(
          (e) =>
            e.shiny == pet.shiny &&
            e.variant == pet.variant &&
            e.id == pet.id &&
            pet.category == e.category &&
            pet.tier == e.tier
        );

        if (!foundCache) {
          cache.push(pet);
          continue;
        }

        if (foundCache.rap !== pet.rap) {
          callback(pet, foundCache);
          foundCache.rap = pet.rap;
        }
      }
      index++;
      await new Promise((e) => setTimeout(e, 60_000));
    }
  })();
};

export default onRapChange;
