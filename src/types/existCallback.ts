import existData from "./existData";

type existCallback = (
  afterItem: existData,
  beforeItem: existData,
  newExistData: existData[]
) => any;

export default existCallback;
