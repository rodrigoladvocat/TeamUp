import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { IsDateAfterNow } from "../validators/IsDateAfterNow";

export class CreateCycleDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsDateAfterNow()
    finalDate: Date;
}
