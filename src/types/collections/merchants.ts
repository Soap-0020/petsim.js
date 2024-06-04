type Merchants = {
  configName: string;
  category: "Merchants";
  priceMultiplier: number;
  name: string;
  stockByRespectLevel: number[][];
  machineName: string;
  slotRespectiveLevels: number[];
  refreshRate: number;
  collection: "Merchants";
  isStatic: boolean;
  hideRespect: boolean;
  hideNotification: boolean;
  rawData: any;
};

export default Merchants;
