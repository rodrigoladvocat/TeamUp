import { Tuning } from "@prisma/client";

export const tunings: Tuning[] = [
  {
    id: 1,
    collaboratorUserId: 1,
    managerUserId: 7,
    cycleId: 1,

    grade: (5 + 4 + 3 + 5 + 4 + 5 + 4 + 3 + 4) / 9,
    ownershipMentalityGrade: 5,
    learningAgilityGrade: 4,
    resilienceAdversityGrade: 3,
    teamworkGrade: 5,
    outOfTheBoxThinkingBehavioralGrade: 4,
    deliveringQualityGrade: 5,
    meetingDeadlinesGrade: 4,
    doingMoreWithLessGrade: 3,
    outOfTheBoxThinkingExecutionGrade: 4,

    lastUpdated: new Date(),
  },
  {
    id: 2,
    collaboratorUserId: 2,
    managerUserId: 7,
    cycleId: 1,

    grade: (5 + 2 + 3 + 2 + 4 + 5 + 4 + 3 + 4) / 9,
    ownershipMentalityGrade: 2,
    learningAgilityGrade: 4,
    resilienceAdversityGrade: 2,
    teamworkGrade: 5,
    outOfTheBoxThinkingBehavioralGrade: 4,
    deliveringQualityGrade: 5,
    meetingDeadlinesGrade: 4,
    doingMoreWithLessGrade: 3,
    outOfTheBoxThinkingExecutionGrade: 4,

    lastUpdated: new Date(),
  },
  // Adicione mais afinações conforme necessário
];
