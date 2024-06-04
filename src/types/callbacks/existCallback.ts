import ExistData from "../existData";

type ExistCallback = (
  afterItem: ExistData,
  beforeItem: ExistData,
  newExistData: ExistData[]
) => any;

export default ExistCallback;
