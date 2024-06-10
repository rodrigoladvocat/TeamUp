import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { OthersevaluationService } from './othersevaluation.service';
import { OthersevaluationDto } from './dto/othersevaluation.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('othersevaluation')
@Controller('othersevaluation')
export class OthersevaluationController {
    constructor(private othersevaluationService: OthersevaluationService) {}

    @Post()
    async create(@Body() data: OthersevaluationDto){
        return await this.othersevaluationService.create(data);
    }

    @Get()
    async findAll(){
        return await this.othersevaluationService.findAll();
    }

    @Get(':evaluatorId/:evaluatedId/:cycleId')
    async findEvaluation(@Param('evaluatorId') evaluatorId: number, @Param('evaluatedId') evaluatedId: number, @Param('cycleId') cycleId: number){
        return await this.othersevaluationService.findEvaluation(+evaluatorId, +evaluatedId, +cycleId);
    }

    @Patch()
    async update(@Body() data: OthersevaluationDto){
        return await this.othersevaluationService.update(data);
    }
}