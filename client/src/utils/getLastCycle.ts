import axios from "axios";

export async function getLastCycle(){
    try {
        const response = await axios.get("http://localhost:3000/cycle/last");
        if (typeof(response.data) === "string") { // if no cycle was found
            return null;
        }
        console.log(response.data);
        return response.data; // response.data.id;
    } catch (error) {
        console.log(error);
        return null;
    }
    
}