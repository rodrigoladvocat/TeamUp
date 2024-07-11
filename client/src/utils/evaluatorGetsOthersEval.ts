import { api } from "@/services/apiService";

export async function evaluatorGetsOthersEval(userId: number, token: string, cycleId: number) {
    try {
        const response = await api.get(
            "/others-evaluation/others/evaluator-get/" + userId + "/" + cycleId,
            { headers: { 'jwt': token } }
        );
        return response.data;
    }
    catch (error) {
        console.log(error);
        return [];
    }
}
