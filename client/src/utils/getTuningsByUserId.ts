import { GetTuningsByUserDto } from "@/dto/GetTuningsByUserDto";
import axios from "axios";

export async function getTuningsByUserId(userId: number): Promise<GetTuningsByUserDto[] | null> {
  try {
    const response = await axios.get(`http://localhost:3000/tuning/${userId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null
  }
}
