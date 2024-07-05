import { api } from "@/services/apiService";

export type Cycle =
 {
    id: number;
    cycleName: string;
  };

export async function getCycles(): Promise<Cycle[]> {
  try {
    const response = await api.get<Cycle[]>('/cycle/');
    return response.data;
  } 
  catch (error) {
    console.log(error);
    return [];
  }
}
