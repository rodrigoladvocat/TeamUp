import { OthersEvaluation } from "@prisma/client";

export const othersEvaluations: OthersEvaluation[] = [
  {
    id: 1,
    evaluatorUserId: 1,
    evaluatedUserId: 2,
    cycleId: 1,
    grade: 4,
    comment: "Strong performance overall",
  },
  {
    id: 2,
    evaluatorUserId: 2,
    evaluatedUserId: 1,
    cycleId: 1,
    grade: 5,
    comment: "Excellent work!"
  }
  // Adicione mais avaliações conforme necessário
];
