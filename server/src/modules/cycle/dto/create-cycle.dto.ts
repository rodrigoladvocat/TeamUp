import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCycleDto {
    @ApiProperty()
    @IsNotEmpty()
    finalDate: Date;
}
