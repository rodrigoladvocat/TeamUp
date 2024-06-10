import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { SelfevaluationService } from './selfevaluation.service';
import { ApiTags } from '@nestjs/swagger';
import { SelfEvaluation } from '@prisma/client';
import { SelfevaluationDto } from './dto/selfevaluation.dto';

@ApiTags('selfevaluation')
@Controller('selfevaluation')
export class SelfevaluationController {
    constructor(private selfevaluationService: SelfevaluationService) {}

    @Get()
    async findAll(): Promise<SelfEvaluation[]> {
        return this.selfevaluationService.findAll();
    }

    // getting the user evaluation by userId and cycleId
    @Get(':userId/:cycleId')
    async findUserEval(@Param('userId') userId: number, @Param('cycleId')cycleId: number): Promise<SelfEvaluation> {
        return this.selfevaluationService.findUserEval(+userId, +cycleId);
    }

    @Post()
    async createSelfEvaluation(@Body() data: SelfevaluationDto): Promise<SelfEvaluation> {
        return this.selfevaluationService.createSelfEvaluation(data);
    }

    @Patch()
    async updateSelfEvaluation(@Body() data: SelfevaluationDto){
        return this.selfevaluationService.updateSelfEvaluation(data)
    }
}
