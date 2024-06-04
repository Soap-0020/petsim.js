type SearchDetails = {
  page?: number;
  pageSize?: number;
  sort?: "DepositedDiamonds" | "Created" | "Points";
  sortOrder?: "asc" | "desc";
};

export default SearchDetails;
