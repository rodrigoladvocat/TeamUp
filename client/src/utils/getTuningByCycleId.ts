import { GetTunningByCycleDto } from "@/dto/GetTunningByCycleDto";
import axios from "axios";

export async function getTuningByCycleId(cycleId: number, token: string): Promise<GetTunningByCycleDto[] | null> {
    try {
        const response = await axios.get(
            `http://localhost:3000/tuning/gettuning/cycle/${cycleId}`,
            { headers: { 'jwt': token } }
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return null
    }
}
