import { GetTunningByCycleDto } from "@/dto/GetTunningByCycleDto";
import axios from "axios";

export async function getTuningByCycleId(cycleId: number): Promise<GetTunningByCycleDto[] | null> {
    try {
        const response = await axios.get(`http://localhost:3000/tuning/gettuning/cycle/${cycleId}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return null
    }
}
