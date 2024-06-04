import apiError from "./errors/apiError";
import JsonData from "./types/jsonData";

const getURL = async (url: string) => {
  const data = await fetch(url);
  const json: JsonData = await data.json();

  if (json.error) throw new apiError(json.error);
  if (json.data) return json.data;
  throw new Error("Unknown Error");
};

export default getURL;
