import { api } from "@/services/apiService";

export async function getOthersEvalByUID(userId: number, token: string) {
    try {
        const response = await api.get(
            "/others-evaluation/" + userId,
            { headers: { 'jwt': token } }
        );
        return response.data;
    }
    catch (error) {
        console.log(error);
        return [];
    }
}
