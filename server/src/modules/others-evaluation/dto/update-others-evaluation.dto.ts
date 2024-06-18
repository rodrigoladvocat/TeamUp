import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';
import { CreateOthersevaluationDto } from './create-others-evaluation.dto';

export class UpdateOthersevaluationDto extends PartialType(CreateOthersevaluationDto) { }
