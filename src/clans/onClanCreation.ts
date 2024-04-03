import getClan from "./getClan";
import getClans from "./getClans";
import clanOverview from "../types/clans/clanOverview";
import fullClanCallback from "../types/fullClanCallback";

const onClanCreation = (callback: fullClanCallback) => {
  (async () => {
    let index = 0;
    let cache: clanOverview[] = [];
    while (true) {
      const data = await getClans({ pageSize: Number.MAX_SAFE_INTEGER });

      for (const clan of data) {
        const foundCache = cache.find((e) => e.name == clan.name);

        if (!foundCache && index > 0) {
          callback(await getClan(clan.name));
          continue;
        }
      }
      cache = data;
      index++;
      await new Promise((e) => setTimeout(e, 20_000));
    }
  })();
};

export default onClanCreation;
