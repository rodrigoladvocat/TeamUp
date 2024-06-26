import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, isNotEmpty } from "class-validator";

export class CreateCycleDto {
    @ApiProperty()
    @IsNotEmpty()
    cycleName: string;

    @ApiProperty()
    @IsNotEmpty()
    finalDate: Date;
}
