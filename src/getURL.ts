import apiError from "./errors/apiError";
import JsonData from "./types/jsonData";

const getURL = async (path: string) => {
  const data = await fetch(`https://ps99.biggamesapi.io/api/${path}`);
  const json: JsonData = await data.json();

  if (json.error) throw new apiError(json.error);
  if (json.data) return json.data;
  throw new Error("Unknown Error");
};

export default getURL;
