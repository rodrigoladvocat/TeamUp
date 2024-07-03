import { api } from "@/services/apiService";

export async function getTuningByUserAndCycleId(userId: number, cycleId: number) {
    try {
        const response = await api.get(`/tuning/${userId}/${cycleId}`);
        console.log(response.data);
        if (typeof(response.data) === "string") { 
            return null;
        }
        return response.data;
    } catch (error) {
        console.log(error);
        return null
    }
}