type ClanSearchDetails = {
  page?: number;
  pageSize?: number;
  sort?: "DepositedDiamonds" | "Created" | "Points";
  sortOrder?: "asc" | "desc";
};

export default ClanSearchDetails;
