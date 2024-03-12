const getImageURL = (imageId: string | number) => {
  return `https://biggamesapi.io/image/${imageId
    .toString()
    .replace("rbxassetid://", "")}`;
};

export default getImageURL;
