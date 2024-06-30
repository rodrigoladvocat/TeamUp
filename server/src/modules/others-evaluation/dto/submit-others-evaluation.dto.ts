import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  Max,
  Min,
  IsBoolean,
} from 'class-validator';

export class SubmitOthersevaluationDto {
  @ApiProperty({ description: 'User id', example: 2 })
  @IsNotEmpty()
  @IsNumber()
  evaluatedUserId: number;

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
    description: 'An comment describing an aspect or something about the experience of working together.',
    maxLength: 255,
    example: 'vazio'
  })
  @IsNotEmpty()
  @IsString()
  comment: string;

  @ApiProperty({
    description: 'Stores if the evaluation is finalized',
    example: false
  })
  @IsOptional()
  @IsBoolean()
  isFinalized: boolean;
}
