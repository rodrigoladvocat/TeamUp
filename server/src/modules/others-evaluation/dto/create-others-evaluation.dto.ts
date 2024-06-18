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

export class CreateOthersevaluationDto {
    @ApiProperty({ description: 'User id', example: 1 })
    @IsNotEmpty()
    @IsNumber()
    evaluatorUserId: number;

    @ApiProperty({ description: 'User id', example: 2 })
    @IsNotEmpty()
    @IsNumber()
    evaluatedUserId: number;

    @ApiProperty({ description: 'Cycle id', example: 1 })
    @IsNotEmpty()
    @IsNumber()
    cycleId: number;

    @ApiProperty({
        description: 'Overall grade for the experience of working toghether.',
        minimum: 1,
        maximum: 5,
        example: 4
    })
    @IsNotEmpty()
    @IsNumber({ allowNaN: false, allowInfinity: false })
    @Min(0)
    @Max(5)
    grade: number;

    @ApiProperty({
        description: 'An comment describing an aspect or something about the experience of working toghether.',
        maxLength: 255,
        example: 'vazio'
    })
    @IsNotEmpty()
    @IsString()
    comment: string;
}
