import axios from "axios";

export async function getLastCycle(){
    try {
        const response = await axios.get("http://localhost:3000/cycle/last");
        console.log(response.data.id);
        return response.data.id;
    } catch (error) {
        console.log(error);
        return -1;
    }
    
}