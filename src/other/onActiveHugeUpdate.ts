import getActiveHuges from "./getActiveHuges";

const onActiveHugeUpdate = (
  callback: (afterActiveHuges: string[], beforeActiveHuges: string[]) => any
) => {
  (async () => {
    let index = 0;
    let cache: string[] = [];
    while (true) {
      const data = await getActiveHuges();

      for (const huge of data) {
        const foundCache = cache.find((e) => huge == e);

        if (!foundCache && index > 0) {
          callback(data, cache);
          break;
        }
      }
      cache = data;
      index++;
      await new Promise((e) => setTimeout(e, 300_000));
    }
  })();
};

export default onActiveHugeUpdate;
