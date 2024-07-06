import { Tuning } from "@prisma/client";

export const tunings: Tuning[] = [
  // ======== 1st cycle ========
  {
    id: 1,
    collaboratorUserId: 1,
    managerUserId: 7,
    cycleId: 1,
    
    grade: (4 + 3 + 5 + 4 + 3 + 4 + 5 + 3 + 4) / 9,
    ownershipMentalityGrade: 3,
    learningAgilityGrade: 4,
    resilienceAdversityGrade: 3,
    teamworkGrade: 5,
    outOfTheBoxThinkingBehavioralGrade: 4,
    deliveringQualityGrade: 4,
    meetingDeadlinesGrade: 5,
    doingMoreWithLessGrade: 3,
    outOfTheBoxThinkingExecutionGrade: 4,

    lastUpdated: new Date()
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

    lastUpdated: new Date()
},
{
    id: 3,
    collaboratorUserId: 3,
    managerUserId: 7,
    cycleId: 1,

    grade: (3 + 4 + 2 + 4 + 3 + 3 + 5 + 2 + 3) / 9,
    ownershipMentalityGrade: 4,
    learningAgilityGrade: 3,
    resilienceAdversityGrade: 4,
    teamworkGrade: 3,
    outOfTheBoxThinkingBehavioralGrade: 3,
    deliveringQualityGrade: 3,
    meetingDeadlinesGrade: 5,
    doingMoreWithLessGrade: 2,
    outOfTheBoxThinkingExecutionGrade: 3,

    lastUpdated: new Date()
},
{
    id: 4,
    collaboratorUserId: 4,
    managerUserId: 7,
    cycleId: 1,

    grade: (5 + 5 + 4 + 3 + 5 + 4 + 5 + 3 + 4) / 9,
    ownershipMentalityGrade: 5,
    learningAgilityGrade: 5,
    resilienceAdversityGrade: 4,
    teamworkGrade: 3,
    outOfTheBoxThinkingBehavioralGrade: 5,
    deliveringQualityGrade: 4,
    meetingDeadlinesGrade: 5,
    doingMoreWithLessGrade: 3,
    outOfTheBoxThinkingExecutionGrade: 4,

    lastUpdated: new Date()
},
{
    id: 5,
    collaboratorUserId: 5,
    managerUserId: 7,
    cycleId: 1,

    grade: (2 + 3 + 4 + 3 + 3 + 2 + 3 + 4 + 3) / 9,
    ownershipMentalityGrade: 3,
    learningAgilityGrade: 2,
    resilienceAdversityGrade: 3,
    teamworkGrade: 4,
    outOfTheBoxThinkingBehavioralGrade: 3,
    deliveringQualityGrade: 3,
    meetingDeadlinesGrade: 2,
    doingMoreWithLessGrade: 4,
    outOfTheBoxThinkingExecutionGrade: 3,

    lastUpdated: new Date()
},
{
    id: 6,
    collaboratorUserId: 6,
    managerUserId: 7,
    cycleId: 1,

    grade: (4 + 4 + 5 + 5 + 4 + 4 + 3 + 4 + 5) / 9,
    ownershipMentalityGrade: 4,
    learningAgilityGrade: 5,
    resilienceAdversityGrade: 4,
    teamworkGrade: 4,
    outOfTheBoxThinkingBehavioralGrade: 4,
    deliveringQualityGrade: 4,
    meetingDeadlinesGrade: 5,
    doingMoreWithLessGrade: 4,
    outOfTheBoxThinkingExecutionGrade: 3,

    lastUpdated: new Date()
},
{
    id: 7,
    collaboratorUserId: 8,
    managerUserId: 7,
    cycleId: 1,

    grade: (3 + 2 + 3 + 4 + 2 + 3 + 3 + 4 + 3) / 9,
    ownershipMentalityGrade: 3,
    learningAgilityGrade: 2,
    resilienceAdversityGrade: 3,
    teamworkGrade: 4,
    outOfTheBoxThinkingBehavioralGrade: 2,
    deliveringQualityGrade: 3,
    meetingDeadlinesGrade: 3,
    doingMoreWithLessGrade: 4,
    outOfTheBoxThinkingExecutionGrade: 3,

    lastUpdated: new Date()
},

  // ======== 2nd cycle ========
  {
    id: 8,
    collaboratorUserId: 1,
    managerUserId: 7,
    cycleId: 2,
    
    grade: (3 + 4 + 2 + 5 + 3 + 4 + 4 + 2 + 5) / 9,
    ownershipMentalityGrade: 4,
    learningAgilityGrade: 3,
    resilienceAdversityGrade: 5,
    teamworkGrade: 2,
    outOfTheBoxThinkingBehavioralGrade: 4,
    deliveringQualityGrade: 4,
    meetingDeadlinesGrade: 2,
    doingMoreWithLessGrade: 5,
    outOfTheBoxThinkingExecutionGrade: 3,

    lastUpdated: new Date()
},
{
    id: 9,
    collaboratorUserId: 2,
    managerUserId: 7,
    cycleId: 2,

    grade: (2 + 4 + 4 + 3 + 2 + 3 + 5 + 4 + 3) / 9,
    ownershipMentalityGrade: 4,
    learningAgilityGrade: 4,
    resilienceAdversityGrade: 3,
    teamworkGrade: 2,
    outOfTheBoxThinkingBehavioralGrade: 3,
    deliveringQualityGrade: 5,
    meetingDeadlinesGrade: 4,
    doingMoreWithLessGrade: 3,
    outOfTheBoxThinkingExecutionGrade: 2,

    lastUpdated: new Date()
},
{
    id: 10,
    collaboratorUserId: 3,
    managerUserId: 7,
    cycleId: 2,

    grade: (4 + 5 + 3 + 5 + 4 + 2 + 4 + 3 + 5) / 9,
    ownershipMentalityGrade: 5,
    learningAgilityGrade: 4,
    resilienceAdversityGrade: 5,
    teamworkGrade: 3,
    outOfTheBoxThinkingBehavioralGrade: 2,
    deliveringQualityGrade: 4,
    meetingDeadlinesGrade: 3,
    doingMoreWithLessGrade: 5,
    outOfTheBoxThinkingExecutionGrade: 4,

    lastUpdated: new Date()
},
{
    id: 11,
    collaboratorUserId: 4,
    managerUserId: 7,
    cycleId: 2,

    grade: (3 + 3 + 4 + 2 + 4 + 3 + 5 + 4 + 2) / 9,
    ownershipMentalityGrade: 3,
    learningAgilityGrade: 4,
    resilienceAdversityGrade: 2,
    teamworkGrade: 4,
    outOfTheBoxThinkingBehavioralGrade: 3,
    deliveringQualityGrade: 5,
    meetingDeadlinesGrade: 4,
    doingMoreWithLessGrade: 2,
    outOfTheBoxThinkingExecutionGrade: 3,

    lastUpdated: new Date()
},
{
    id: 12,
    collaboratorUserId: 5,
    managerUserId: 7,
    cycleId: 2,

    grade: (5 + 2 + 4 + 3 + 5 + 3 + 4 + 3 + 5) / 9,
    ownershipMentalityGrade: 2,
    learningAgilityGrade: 4,
    resilienceAdversityGrade: 3,
    teamworkGrade: 5,
    outOfTheBoxThinkingBehavioralGrade: 3,
    deliveringQualityGrade: 4,
    meetingDeadlinesGrade: 3,
    doingMoreWithLessGrade: 5,
    outOfTheBoxThinkingExecutionGrade: 4,

    lastUpdated: new Date()
},
{
    id: 13,
    collaboratorUserId: 6,
    managerUserId: 7,
    cycleId: 2,

    grade: (2 + 4 + 3 + 4 + 2 + 5 + 3 + 4 + 2) / 9,
    ownershipMentalityGrade: 4,
    learningAgilityGrade: 3,
    resilienceAdversityGrade: 4,
    teamworkGrade: 2,
    outOfTheBoxThinkingBehavioralGrade: 5,
    deliveringQualityGrade: 3,
    meetingDeadlinesGrade: 4,
    doingMoreWithLessGrade: 2,
    outOfTheBoxThinkingExecutionGrade: 4,

    lastUpdated: new Date()
},
{
    id: 14,
    collaboratorUserId: 8,
    managerUserId: 7,
    cycleId: 2,

    grade: (4 + 5 + 2 + 5 + 3 + 4 + 2 + 5 + 3) / 9,
    ownershipMentalityGrade: 5,
    learningAgilityGrade: 2,
    resilienceAdversityGrade: 5,
    teamworkGrade: 3,
    outOfTheBoxThinkingBehavioralGrade: 4,
    deliveringQualityGrade: 2,
    meetingDeadlinesGrade: 5,
    doingMoreWithLessGrade: 3,
    outOfTheBoxThinkingExecutionGrade: 4,

    lastUpdated: new Date()
}

  // Adicione mais afinações conforme necessário
];
