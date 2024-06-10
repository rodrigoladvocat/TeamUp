import { ApiProperty } from "@nestjs/swagger";

export class CycleDto {
    @ApiProperty()
    finalDate: Date;
}