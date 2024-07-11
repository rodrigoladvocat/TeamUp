import axios from "axios";

export async function getLastCycle(token: string) {
    try {
        const response = await axios.get(
            "http://localhost:3000/cycle/last",
            { headers: { 'jwt': token } }
        );
        if (typeof (response.data) === "string") { // if no cycle was found
            return null;
        }
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }

}
