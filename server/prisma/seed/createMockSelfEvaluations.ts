import { SelfEvaluation } from "@prisma/client";

export const selfEvaluations: SelfEvaluation[] = [
  {
    id: 1,
    userId: 1,
    cycleId: 1,
    ownershipMentalityGrade: 5,
    ownershipMentalityComment: "Excellent ownership mentality",
    learningAgilityGrade: 4,
    learningAgilityComment: "Good learning agility",
    resilienceAdversityGrade: 3,
    resilienceAdversityComment: "Average resilience",
    teamworkGrade: 5,
    teamworkComment: "Great team player",
    outOfTheBoxThinkingBehavioralGrade: 4,
    outOfTheBoxThinkingBehavioralComment: "Creative thinker",
    deliveringQualityGrade: 5,
    deliveringQualityComment: "High quality delivery",
    meetingDeadlinesGrade: 4,
    meetingDeadlinesComment: "Meets deadlines consistently",
    doingMoreWithLessGrade: 3,
    doingMoreWithLessComment: "Efficient with resources",
    outOfTheBoxThinkingExecutionGrade: 4,
    outOfTheBoxThinkingExecutionComment: "Innovative execution",

    lastUpdated: new Date()
  }
  // Adicione mais autoavaliações conforme necessário
];
