import { GetTuningsByUserDto } from "@/dto/GetTuningsByUserDto";
import axios from "axios";

export async function getTuningsByUserId(userId: number, token: string): Promise<GetTuningsByUserDto[] | null> {
  try {
    const response = await axios.get(
      `http://localhost:3000/tuning/${userId}`,
      { headers: { 'jwt': token } }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null
  }
}
