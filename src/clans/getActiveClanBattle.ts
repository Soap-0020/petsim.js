import apiError from "../errors/apiError";
import activeClanBattle from "../types/clans/activeClanBattle";
import jsonData from "../types/jsonData";

const getActiveClanBattle = async () => {
  const data = await fetch(`https://biggamesapi.io/api/activeClanBattle`);
  const json = (await data.json()) as jsonData;

  if (json.data) {
    const formattedJson: activeClanBattle = {
      category: "GuildBattles",
      configName: json.data.configName,
      finishTime: json.data.configData.FinishTime,
      startTime: json.data.configData.StartTime,
      name: json.data.configData.Title,
      rewards: {
        bronze: json.data.configData.Rewards.Bronze.map((reward: any) => ({
          id: reward._data.id,
        })),
        silver: json.data.configData.Rewards.Silver.map((reward: any) => ({
          id: reward._data.id,
        })),
        gold: json.data.configData.Rewards.Gold.map((reward: any) => ({
          id: reward._data.id,
        })),
      },
    };

    return formattedJson;
  } else if (json.error) throw new apiError(json.error.message);
  throw new Error("Unknown Error");
};

export default getActiveClanBattle;
