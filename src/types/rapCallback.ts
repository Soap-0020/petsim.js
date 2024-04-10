import rapData from "./rapData";

type rapCallback = (
  afterItem: rapData,
  beforeItem: rapData,
  newRapData: rapData[]
) => any;

export default rapCallback;
