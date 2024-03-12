import apiError from "../errors/apiError";
import jsonData from "../types/jsonData";

const getCollections = async (): Promise<String[]> => {
  const data = await fetch("https://biggamesapi.io/api/collections");
  const json = (await data.json()) as jsonData;

  if (json.data) return json.data;
  else if (json.error) throw new apiError(json.error.message);
  throw new Error("Unknown Error");
};

export default getCollections;
