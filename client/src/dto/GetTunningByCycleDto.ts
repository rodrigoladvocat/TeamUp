export interface GetTunningByCycleDto {
  id: number
  collaboratorUserId: number
  managerUserId: number
  cycleId: number
  ownershipMentalityGrade: number
  learningAgilityGrade: number
  resilienceAdversityGrade: number
  teamworkGrade: number
  outOfTheBoxThinkingBehavioralGrade: number
  deliveringQualityGrade: number
  meetingDeadlinesGrade: number
  doingMoreWithLessGrade: number
  outOfTheBoxThinkingExecutionGrade: number
  grade: number
  lastUpdated: string
  evaluator: Evaluator
  evaluated: Evaluated
}

export interface Evaluator {
  id: number
  name: string
  email: string
  password: string
  imgUrl: string
  isManager: boolean
  role: string
  age: number
  telephone: string
  cpf: string
  street: string
  number: string
  city: string
  state: string
  zipCode: string
  bio: string
  admissionDate: string
}

export interface Evaluated {
  id: number
  name: string
  email: string
  password: string
  imgUrl: string
  isManager: boolean
  role: string
  age: number
  telephone: string
  cpf: string
  street: string
  number: string
  city: string
  state: string
  zipCode: string
  bio: string
  admissionDate: string
}
