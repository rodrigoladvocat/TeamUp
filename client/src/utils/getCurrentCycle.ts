import { api } from "@/services/apiService";

export async function getCurrentCycle(){
    try {
        const response = await api.get("/cycle/latest");
        if (typeof(response.data) === "string") { // if no cycle was found
            return null;
        }
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
    
}