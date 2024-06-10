import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CycleService } from './cycle.service';
import { Cycle } from '@prisma/client';
import { CycleDto } from './dto/cycle.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cycle')
@Controller('cycle')
export class CycleController {
    constructor(private cycleService: CycleService) {}

    @Post()
    async create(@Body() data: CycleDto): Promise<Cycle> {
        return await this.cycleService.create(data);
    }

    @Get('latest')
    async getLatest(): Promise<Cycle> {
        return await this.cycleService.getLatest();
    }

    @Get()
    async findAll(): Promise<Cycle[]> {
        return await this.cycleService.findAll();
    }

    @Get('id/:id')
    async getById(@Param('id') id: number): Promise<Cycle> {
        return await this.cycleService.getById(+id);
    }

    // are there any features left?
}
