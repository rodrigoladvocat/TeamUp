import { api } from "@/services/apiService";

export async function evaluatorGetsOthersEval(userId: number, cycleId: number) {
    try{
        const response = await api.get("/others-evaluation/others/evaluator-get/" + userId + "/" + cycleId);
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.log(error);
        return -1;
    }
}