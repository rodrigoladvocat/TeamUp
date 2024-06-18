import { ApiProperty } from "@nestjs/swagger";

export class OthersevaluationDto {
    @ApiProperty()
    evaluatorUserId: number;
    @ApiProperty()
    evaluatedUserId: number;
    @ApiProperty()
    cycleId: number;
    
    @ApiProperty()
    grade: number;
    @ApiProperty()
    comment: string;
}

// no validation