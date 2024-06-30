import { api } from "@/services/apiService";

export async function getCurrentCycle(){
    try {
        const response = await api.get("/cycle/latest");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return -1;
    }
    
}