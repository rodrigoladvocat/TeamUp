import { api } from "@/services/apiService";

export async function getAutoEval(userId: number, token: string, cycleId: number) {
    try {
        const response = await api.get(
            "self-evaluation/" + userId + "/" + cycleId,
            { headers: { 'jwt': token } }
        );
        if (typeof (response.data) === "string") { // if no self-evaluation was found
            return null;
        }
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}
