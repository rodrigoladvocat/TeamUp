import { api } from "@/services/apiService";

export async function getUserOtherAvals(userId: number, cycleId: number, token: string) {
  try {
    const response = await api.get(
      "/others-evaluation/" + userId + "/" + cycleId,
      { headers: { 'jwt': token } }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
