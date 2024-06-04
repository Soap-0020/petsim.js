import RapData from "../rapData";

type RapCallback = (
  afterItem: RapData,
  beforeItem: RapData,
  newRapData: RapData[]
) => any;

export default RapCallback;
