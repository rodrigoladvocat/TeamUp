import { ApiProperty } from "@nestjs/swagger";

export class SelfevaluationDto {
    @ApiProperty()
    userId: number

    @ApiProperty()
    cycleId: number

    @ApiProperty()
    ownershipMentalityGrade: number

    @ApiProperty()
    ownershipMentalityComment: string

    @ApiProperty()
    learningAgilityGrade: number

    @ApiProperty()
    learningAgilityComment: string

    @ApiProperty()
    resilienceAdversityGrade: number

    @ApiProperty()
    resilienceAdversityComment: string

    @ApiProperty()
    teamworkGrade: number

    @ApiProperty()
    teamworkComment: string

    @ApiProperty()
    outOfTheBoxThinkingBehavioralGrade: number

    @ApiProperty()
    outOfTheBoxThinkingBehavioralComment: string

    @ApiProperty()
    deliveringQualityGrade: number

    @ApiProperty()
    deliveringQualityComment: string

    @ApiProperty()
    meetingDeadlinesGrade: number

    @ApiProperty()
    meetingDeadlinesComment: string

    @ApiProperty()
    doingMoreWithLessGrade: number

    @ApiProperty()
    doingMoreWithLessComment: string

    @ApiProperty()
    outOfTheBoxThinkingExecutionGrade: number

    @ApiProperty()
    outOfTheBoxThinkingExecutionComment: string
}

// no validation