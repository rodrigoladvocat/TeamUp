import { ApiProperty } from "@nestjs/swagger"

export class TuningDto {
    @ApiProperty()
    collaboratorUserId: number
    
    @ApiProperty()
    managerUserId: number
    
    @ApiProperty()
    cycleId: number

    @ApiProperty()
    grade: number
}