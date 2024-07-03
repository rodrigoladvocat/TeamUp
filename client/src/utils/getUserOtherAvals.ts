import { api } from "@/services/apiService";

export async function getUserOtherAvals(userId: number, cycleId: number) {
  try {
    const response = await api.get(
      "/others-evaluation/" + userId + "/" + cycleId
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
