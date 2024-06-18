import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';
import { CreateTuningDto } from "./create-tuning.dto";


export class UpdateTuningDto extends PartialType(CreateTuningDto) { }
