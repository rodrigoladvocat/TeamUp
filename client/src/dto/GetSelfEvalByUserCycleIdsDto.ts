export interface GetSelffEvalByUserCycleIdsDto {
  id: number
  userId: number
  cycleId: number
  ownershipMentalityGrade: number //
  ownershipMentalityComment: string
  learningAgilityGrade: number //
  learningAgilityComment: string
  resilienceAdversityGrade: number //
  resilienceAdversityComment: string
  teamworkGrade: number //
  teamworkComment: string 
  outOfTheBoxThinkingBehavioralGrade: number //
  outOfTheBoxThinkingBehavioralComment: string
  deliveringQualityGrade: number //
  deliveringQualityComment: string
  meetingDeadlinesGrade: number //
  meetingDeadlinesComment: string
  doingMoreWithLessGrade: number //
  doingMoreWithLessComment: string
  outOfTheBoxThinkingExecutionGrade: number //
  outOfTheBoxThinkingExecutionComment: string
  lastUpdated: string
  isFinalized: boolean
  // user: User
  // cycle: Cycle
}

export interface User {
  name: string
}

export interface Cycle {
  id: number
  cycleName: string
  initialDate: string
  finalDate: string
  lastUpdated: string
}
