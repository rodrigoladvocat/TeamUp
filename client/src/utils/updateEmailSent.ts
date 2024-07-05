import { api } from "@/services/apiService";

export function updateEmailSent(cycleId: number): Promise<void> {
  return api.patch(`/cycle/emailSent/${cycleId}`);
}