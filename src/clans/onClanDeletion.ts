import getClans from "./getClans";
import clanOverview from "../types/clans/clanOverview";
import clanOverviewCallback from "../types/clanOverviewCallback";

const onClanDelition = (callback: clanOverviewCallback) => {
  (async () => {
    let index = 0;
    let cache: clanOverview[] = [];
    while (true) {
      const data = await getClans({ pageSize: Number.MAX_SAFE_INTEGER });

      for (const dataCache of cache) {
        const foundData = data.find((e) => e.name == dataCache.name);

        if (!foundData && index > 0) {
          callback(dataCache);
          continue;
        }
      }
      cache = data;
      index++;
      await new Promise((e) => setTimeout(e, 20_000));
    }
  })();
};

export default onClanDelition;
