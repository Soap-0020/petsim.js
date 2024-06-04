import RapCallback from "../types/callbacks/rapCallback";
import RapData from "../types/rapData";
import getRAP from "./getRAP";

const onRapChange = (callback: RapCallback) => {
  (async () => {
    let index = 0;
    const cache: RapData[] = [];
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
          callback(pet, { ...foundCache }, data);
          foundCache.rap = pet.rap;
        }
      }
      index++;
      await new Promise((e) => setTimeout(e, 60_000));
    }
  })();
};

export default onRapChange;
