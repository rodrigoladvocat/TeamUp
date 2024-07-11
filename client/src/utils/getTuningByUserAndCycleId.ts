import { api } from "@/services/apiService";

export async function getTuningByUserAndCycleId(userId: number, cycleId: number, token: string) {
    try {
        const response = await api.get(
            `/tuning/${userId}/${cycleId}`,
            { headers: { 'jwt': token } }
        );
        console.log(response.data);
        if (typeof (response.data) === "string") {
            return null;
        }
        return response.data;
    } catch (error) {
        console.log(error);
        return null
    }
}
