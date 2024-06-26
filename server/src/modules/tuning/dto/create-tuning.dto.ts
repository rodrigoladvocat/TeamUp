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

export class CreateTuningDto {
    @ApiProperty({ description: 'User (collaborator) id', example: 1 })
    @IsNotEmpty()
    @IsNumber()
    collaboratorUserId: number

    @ApiProperty({ description: 'User (manager) id', example: 2 })
    @IsNotEmpty()
    @IsNumber()
    managerUserId: number

    @ApiProperty({ description: 'Cycle id', example: 1 })
    @IsNotEmpty()
    @IsNumber()
    cycleId: number

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

}
