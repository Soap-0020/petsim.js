import EventEmitter from "events";
import getRAP from "./getRAP";
import rapData from "../types/rapData";
import rapCallback from "../types/rapCallback";

const onRapChange = (callback: rapCallback) => {
  const emitter = new EventEmitter();

  emitter.on("launch", callback);

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
          emitter.emit("launch", pet, foundCache);

          foundCache.rap = pet.rap;
        }
      }
      index++;
      await new Promise((e) => setTimeout(e, 300_000));
    }
  })();
};

export default onRapChange;
