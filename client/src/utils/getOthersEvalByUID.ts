import { api } from "@/services/apiService";

export async function getOthersEvalByUID(userId: number) {
    try{
        const response = await api.get("/others-evaluation/" + userId );
        return response.data;
    }
    catch (error) {
        console.log(error);
        return [];
    }
}