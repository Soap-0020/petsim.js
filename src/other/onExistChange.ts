import ExistCallback from "../types/callbacks/existCallback";
import ExistData from "../types/existData";
import getExist from "./getExist";

const onExistChange = (callback: ExistCallback) => {
  (async () => {
    let index = 0;
    const cache: ExistData[] = [];
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
            callback(newPet, pet, data);
          }

          continue;
        }

        if (foundCache.exist !== pet.exist) {
          callback(pet, { ...foundCache }, data);

          foundCache.exist = pet.exist;
        }
      }
      index++;
      await new Promise((e) => setTimeout(e, 20_000));
    }
  })();
};

export default onExistChange;
