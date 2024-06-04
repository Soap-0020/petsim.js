import SecretRooms from "../../types/collections/secretRooms";
import fetchCollection from "../fetchCollection";

const getSecretRooms = async (): Promise<SecretRooms[]> => {
  const data = await fetchCollection("SecretRooms");

  return data.map((secretRoom: any) => {
    return {
      category: "SecretRooms",
      collection: "SecretRooms",
      configName: secretRoom.configName,
      instanceId: secretRoom.configData.InstanceId,
      name: secretRoom.configData.DisplayName,
      rawData: secretRoom,
      zone: secretRoom.configData.RequiredZone,
    } satisfies SecretRooms;
  }) satisfies SecretRooms[];
};

export default getSecretRooms;
