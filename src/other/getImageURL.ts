const getImageURL = (imageId: string | number): string => {
  return `https://biggamesapi.io/image/${imageId
    .toString()
    .replace("rbxassetid://", "")}`;
};

export default getImageURL;
