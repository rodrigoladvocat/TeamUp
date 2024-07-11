import { api } from "@/services/apiService";

export async function getCurrentCycle(token: string) {
    try {
        const response = await api.get(
            "/cycle/latest",
            { headers: { 'jwt': token } }
        );
        if (typeof (response.data) === "string") { // if no cycle was found
            return null;
        }
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }

}
