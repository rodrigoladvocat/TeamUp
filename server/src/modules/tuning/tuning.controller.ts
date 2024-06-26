import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post, ValidationPipe } from '@nestjs/common';
import { TuningService } from './tuning.service';
import { CreateTuningDto } from './dto/create-tuning.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Tuning } from '@prisma/client';

const applyIdValidation = new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST });
const applyBodyValidation = new ValidationPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST });

@ApiTags('Tuning Controller')
@Controller('tuning')
export class TuningController {
    constructor(private readonly tuningService: TuningService) { }

    @Post()
    @ApiOperation({ summary: 'Create a tuning-evaluation' })
    @ApiResponse({ status: 201, description: 'The tuning-evaluation has been successfully created.' })
    @ApiResponse({ status: 400, description: 'Bad Request. Stopped by some validator.' })
    async create(@Body(applyBodyValidation) createTuningDto: CreateTuningDto) {
        return this.tuningService.create(createTuningDto);
    }


    @Get()
    @ApiOperation({ summary: 'Get all tuning-evaluations.' })
    @ApiResponse({ status: 200, description: 'Return all tuning-evaluations.' })
    async findAll() {
        return this.tuningService.findAll();
    }


    @Get(':userId/:cycleId')
    @ApiOperation({ summary: 'Get tuning-evaluations by (userId, cycleId).' })
    @ApiResponse({ status: 200, description: 'Return a tuning-evaluations filtered by (userId, cycleId).' })
    @ApiResponse({ status: 400, description: 'Bad Request. Stopped by some validator.' })
    @ApiResponse({ status: 404, description: 'Some row was not found.' }) // TODO - implementar essa verificação 404 dentro do serviço
    async findOne(
        @Param('userId', applyIdValidation) userId: number,
        @Param('cycleId', applyIdValidation) cycleId: number
    ): Promise<Tuning> {
        return this.tuningService.findOne(+userId, +cycleId);
    }

    @Get('gettuning/cycle/:cycleId')
    @ApiOperation({ summary: 'Get tuning-evaluations by cycleId.' })
    @ApiResponse({ status: 200, description: 'Return all tuning-evaluations filtered by cycleId.' })
    @ApiResponse({ status: 400, description: 'Bad Request. Stopped by some validator.' })
    async findByCycle(@Param('cycleId', applyIdValidation) cycleId: number): Promise<Tuning[]> {
        return this.tuningService.findByCycleId(+cycleId);
    }


    @Get(':userId')
    @ApiOperation({ summary: 'Get tuning-evaluations by (userId, cycleId).' })
    @ApiResponse({ status: 200, description: 'Return all tuning-evaluations filtered by userId.' })
    @ApiResponse({ status: 400, description: 'Bad Request. Stopped by some validator.' })
    @ApiResponse({ status: 404, description: 'Some row was not found.' }) // TODO - implementar essa verificação 404 dentro do serviço
    async findByUser(@Param('userId', applyIdValidation) userId: number): Promise<Tuning[]> {
        return this.tuningService.findByUser(+userId);
    }
}
