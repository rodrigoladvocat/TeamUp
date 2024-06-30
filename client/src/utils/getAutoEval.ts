import { api } from "@/services/apiService";

export async function getAutoEval(userId: number, cycleId: number) {
    try{
        const response = await api.get("self-evaluation/" + userId + "/" + cycleId);
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.log(error);
        return -1;
    }
}