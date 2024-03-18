import EventEmitter from "events";
import existData from "../types/existData";
import getExist from "./getExist";
import existCallback from "../types/existCallback";

const onExistChange = (callback: existCallback) => {
  const emitter = new EventEmitter();

  emitter.on("launch", callback);

  (async () => {
    let index = 0;
    const cache: existData[] = [];
    while (true) {
      const data = await getExist();

      for (const pet of data) {
        const foundCache = cache.find(
          (e) =>
            e.shiny == pet.shiny && e.variant == pet.variant && e.id == pet.id
        );

        if (!foundCache) {
          cache.push(pet);
          if (index > 0) {
            const newPet = { ...pet };
            pet.exist = 0;
            emitter.emit("launch", newPet, pet);
            console.log(index);
          }

          continue;
        }

        if (foundCache.exist !== pet.exist) {
          emitter.emit("launch", pet, foundCache);

          foundCache.exist = pet.exist;
        }
      }
      index++;
      await new Promise((e) => setTimeout(e, 60_000));
    }
  })();
};

export default onExistChange;
