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
        description: 'Overall grade for the experience of working toghether.',
        minimum: 1,
        maximum: 5,
        example: 4
    })
    @IsNotEmpty()
    @IsNumber({ allowNaN: false, allowInfinity: false })
    @Min(0)
    @Max(5)
    grade: number
}
