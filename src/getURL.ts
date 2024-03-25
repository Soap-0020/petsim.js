import apiError from "./errors/apiError";
import unknownError from "./errors/unknownError";
import jsonData from "./types/jsonData";

const getURL = async (url: string) => {
  const data = await fetch(url);
  const json: jsonData = await data.json();

  if (json.error) throw new apiError(json.error.message);
  if (json.data) return json.data;
  throw new unknownError();
};

export default getURL;
