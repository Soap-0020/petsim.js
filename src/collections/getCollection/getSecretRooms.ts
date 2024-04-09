import getCollection from "../getCollection";
import secretRooms from "../../types/collections/secretRooms";

const getSecretRooms = async (): Promise<secretRooms[]> => {
  const data = await getCollection("SecretRooms");

  return data.map((secretRoom: any) => {
    return {
      category: "SecretRooms",
      collection: "SecretRooms",
      configName: secretRoom.configName,
      instanceId: secretRoom.configData.InstanceId,
      name: secretRoom.configData.DisplayName,
      rawData: secretRoom,
      zone: secretRoom.configData.RequiredZone,
    } satisfies secretRooms;
  }) satisfies secretRooms[];
};

export default getSecretRooms;
