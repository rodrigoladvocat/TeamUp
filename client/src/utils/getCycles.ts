import { api } from "@/services/apiService";

export type Cycle =
  {
    id: number;
    cycleName: string;
  };

export async function getCycles(token: string): Promise<Cycle[]> {
  try {
    const response = await api.get<Cycle[]>(
      '/cycle/',
      { headers: { 'jwt': token } }
    );
    return response.data;
  }
  catch (error) {
    console.log(error);
    return [];
  }
}
