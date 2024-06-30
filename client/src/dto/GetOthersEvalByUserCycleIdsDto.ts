export interface GetOthersEvalByUserCycleIdsDto {
  id: number
  evaluatorUserId: number
  evaluatedUserId: number
  cycleId: number
  grade: number
  comment: string
  lastUpdated: string
  isFinalized: boolean
}
