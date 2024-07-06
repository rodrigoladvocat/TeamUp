import { OthersEvaluation } from "@prisma/client";

export const othersEvaluations: OthersEvaluation[] = [
  {
    id: 1,
    evaluatorUserId: 1,
    evaluatedUserId: 2,
    cycleId: 1,
    grade: 4,
    comment: "Strong performance overall",
    lastUpdated: new Date(),
    isFinalized: false
  },
  {
    id: 2,
    evaluatorUserId: 2,
    evaluatedUserId: 1,
    cycleId: 1,
    grade: 5,
    comment: "Excellent work!",
    lastUpdated: new Date(),
    isFinalized: false
  },
  {
    id: 3,
    evaluatorUserId: 8,
    evaluatedUserId: 4,
    cycleId: 1,
    grade: 3,
    comment: "Could be better.",
    lastUpdated: new Date(),
    isFinalized: false
  },
  {
    id: 4,
    evaluatorUserId: 8,
    evaluatedUserId: 2,
    cycleId: 2,
    grade: 5,
    comment: "Excellent!",
    lastUpdated: new Date(),
    isFinalized: true
  },
  {
    id: 5,
    evaluatorUserId: 2,
    evaluatedUserId: 1,
    cycleId: 2,
    grade: 5,
    comment: "Excellent work!",
    lastUpdated: new Date(),
    isFinalized: false
  },
  {
    id: 6,
    evaluatorUserId: 8,
    evaluatedUserId: 4,
    cycleId: 2,
    grade: 2,
    comment: "Could be better.",
    lastUpdated: new Date(),
    isFinalized: false
  },
  {
    id: 7,
    evaluatorUserId: 2,
    evaluatedUserId: 8,
    cycleId: 3,
    grade: 4,
    comment: "Good.",
    lastUpdated: new Date(),
    isFinalized: false
  },
  {
    id: 8,
    evaluatorUserId: 3,
    evaluatedUserId: 8,
    cycleId: 3,
    grade: 5,
    comment: "Excellent.",
    lastUpdated: new Date(),
    isFinalized: false
  },
  {
    id: 9,
    evaluatorUserId: 4,
    evaluatedUserId: 8,
    cycleId: 3,
    grade: 3,
    comment: "Could be better.",
    lastUpdated: new Date(),
    isFinalized: false
  },

  // Adicione mais avaliações conforme necessário
];
