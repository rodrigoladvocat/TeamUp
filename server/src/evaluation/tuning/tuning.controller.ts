import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TuningService } from './tuning.service';
import { TuningDto } from './dto/tuning.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tuning')
@Controller('tuning')
export class TuningController {
    constructor(private readonly tuningService: TuningService) {}

    @Post()
    async create(@Body() data: TuningDto) {
        return this.tuningService.create(data);
    }

    @Get()
    async findAll() {
        return this.tuningService.findAll();
    }

    @Get(':userId/:cycleId')
    async findOne(@Param('userId') userId: number, @Param('cycleId') cycleId: number) {
        return this.tuningService.findOne(+userId, +cycleId);
    }

    @Get(':userId')
    async findByUser(@Param('userId') userId: number) {
        return this.tuningService.findByUser(+userId);
    }
}
