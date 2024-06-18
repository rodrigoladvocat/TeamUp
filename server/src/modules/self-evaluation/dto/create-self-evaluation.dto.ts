import { ApiProperty } from "@nestjs/swagger";
import {
    IsNotEmpty,
    IsNumber,
    MinLength,
    MaxLength,
    IsString,
    IsOptional,
    Max,
    Min,
} from 'class-validator';

export class CreateSelfEvaluationDto {
    @ApiProperty({
        description: 'User id',
        example: 1
    })
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @ApiProperty({
        description: 'Cycle id',
        example: 1
    })
    @IsNotEmpty()
    @IsNumber()
    cycleId: number;

    @ApiProperty({
        description: 'Grade for Ownership Mentality (1-5)',
        minimum: 1,
        maximum: 5,
        example: 4
    })
    @IsNotEmpty()
    @IsNumber({ allowNaN: false, allowInfinity: false })
    @Min(0)
    @Max(5)
    ownershipMentalityGrade: number;

    @ApiProperty({
        description: 'Comment on Ownership Mentality',
        maxLength: 255,
        example: 'vazio'
    })
    @IsNotEmpty()
    @IsString()
    ownershipMentalityComment: string;

    @ApiProperty({
        description: 'Grade for Learning Agility (1-5)',
        minimum: 1,
        maximum: 5,
        example: 4
    })
    @IsNotEmpty()
    @IsNumber({ allowNaN: false, allowInfinity: false })
    @Min(0)
    @Max(5)
    learningAgilityGrade: number;

    @ApiProperty({
        description: 'Comment on Learning Agility',
        maxLength: 255
    })
    @IsNotEmpty()
    @IsString()
    learningAgilityComment: string;

    @ApiProperty({
        description: 'Grade for Resilience to Adversity (1-5)',
        minimum: 1,
        maximum: 5,
        example: 4
    })
    @IsNotEmpty()
    @IsNumber({ allowNaN: false, allowInfinity: false })
    @Min(0)
    @Max(5)
    resilienceAdversityGrade: number;

    @ApiProperty({
        description: 'Comment on Resilience to Adversity',
        maxLength: 255,
        example: 'vazio'
    })
    @IsNotEmpty()
    @IsString()
    resilienceAdversityComment: string;

    @ApiProperty({
        description: 'Grade for Teamwork (1-5)',
        minimum: 1,
        maximum: 5,
        example: 4
    })
    @IsNotEmpty()
    @IsNumber({ allowNaN: false, allowInfinity: false })
    @Min(0)
    @Max(5)
    teamworkGrade: number;

    @ApiProperty({
        description: 'Comment on Teamwork',
        maxLength: 255,
        example: 'vazio'
    })
    @IsNotEmpty()
    @IsString()
    teamworkComment: string;

    @ApiProperty({
        description: 'Grade for Out-of-the-Box Thinking (Behavioral Aspect) (1-5)',
        minimum: 1,
        maximum: 5,
        example: 4
    })
    @IsNotEmpty()
    @IsNumber({ allowNaN: false, allowInfinity: false })
    @Min(0)
    @Max(5)
    outOfTheBoxThinkingBehavioralGrade: number;

    @ApiProperty({
        description: 'Comment on Out-of-the-Box Thinking (Behavioral)',
        maxLength: 255,
        example: 'vazio'
    })
    @IsNotEmpty()
    @IsString()
    outOfTheBoxThinkingBehavioralComment: string;

    @ApiProperty({
        description: 'Grade for Delivering Quality (1-5)',
        minimum: 1,
        maximum: 5,
        example: 4
    })
    @IsNotEmpty()
    @IsNumber({ allowNaN: false, allowInfinity: false })
    @Min(0)
    @Max(5)
    deliveringQualityGrade: number;

    @ApiProperty({
        description: 'Comment on Delivering Quality',
        maxLength: 255,
        example: 'vazio'
    })
    @IsNotEmpty()
    @IsString()
    deliveringQualityComment: string;

    @ApiProperty({
        description: 'Grade for Meeting Dealines (1-5)',
        minimum: 1,
        maximum: 5,
        example: 4
    })
    @IsNotEmpty()
    @IsNumber({ allowNaN: false, allowInfinity: false })
    @Min(0)
    @Max(5)
    meetingDeadlinesGrade: number;

    @ApiProperty({
        description: 'Comment on Meeting Deadlines',
        maxLength: 255,
        example: 'vazio'
    })
    @IsNotEmpty()
    @IsString()
    meetingDeadlinesComment: string;

    @ApiProperty({
        description: 'Grade for Doing More with Less (1-5)',
        minimum: 1,
        maximum: 5,
        example: 4
    })
    @IsNotEmpty()
    @IsNumber({ allowNaN: false, allowInfinity: false })
    @Min(0)
    @Max(5)
    doingMoreWithLessGrade: number;

    @ApiProperty({
        description: 'Comment on Doing More with Less',
        maxLength: 255,
        example: 'vazio'
    })
    @IsNotEmpty()
    @IsString()
    doingMoreWithLessComment: string;

    @ApiProperty({
        description: 'Grade for Out-of-the-Box Thinking (Execution Aspect) (1-5)',
        minimum: 1,
        maximum: 5,
        example: 4
    })
    @IsNotEmpty()
    @IsNumber({ allowNaN: false, allowInfinity: false })
    @Min(0)
    @Max(5)
    outOfTheBoxThinkingExecutionGrade: number;

    @ApiProperty({
        description: 'Comment on Out-of-the-Box Thinking (Execution)',
        maxLength: 255,
        example: 'vazio'
    })
    @IsNotEmpty()
    @IsString()
    outOfTheBoxThinkingExecutionComment: string;
}
