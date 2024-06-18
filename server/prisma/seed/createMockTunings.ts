import { Tuning } from "@prisma/client";

export const tunings: Tuning[] = [
  {
    collaboratorUserId: 1,
    managerUserId: 2,
    cycleId: 1,
    id: 1,
    grade: 3
  },
  {
    collaboratorUserId: 2,
    managerUserId: 1,
    cycleId: 1,
    id: 2,
    grade: 3
  }
  // Adicione mais afinações conforme necessário
];
