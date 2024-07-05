import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { CycleService } from './cycle.service';
import { Cycle } from '@prisma/client';
import { CreateCycleDto } from './dto/create-cycle.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


const applyIdValidation = new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST });
const applyBodyValidation = new ValidationPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST });

@ApiTags('Cycle Controller')
@Controller('cycle')
export class CycleController {
    constructor(private cycleService: CycleService) { }

    @Post()
    @ApiOperation({ summary: 'Create cycle' })
    @ApiResponse({ status: 201, description: 'The cycle has been successfully created.' })
    @ApiResponse({ status: 400, description: 'Bad Request. Stopped by some validator.' })
    async create(@Body(applyBodyValidation) createCycleDto: CreateCycleDto): Promise<Cycle> {
        return await this.cycleService.create(createCycleDto);
    }

    @Get('latest')
    @ApiOperation({ summary: 'Get latest cycle' })
    @ApiResponse({ status: 200, description: 'Return cycle by filterind latest final date.' })
    @ApiResponse({ status: 204, description: 'No cycles found. Cycle table must be Empty.' })
    async getLatest(): Promise<Cycle> {
        return await this.cycleService.getLatest();
    }

    @Get('last')
    @ApiOperation({ summary: 'Get last cycle' })
    @ApiResponse({ status: 200, description: 'Return cycle by filtering the second to last final date.' })
    @ApiResponse({ status: 204, description: 'No cycles found. Cycle table must have one or less cycles.' })
    async getSTlast(): Promise<Cycle> {
        return await this.cycleService.getLast();
    }


    @Get()
    @ApiOperation({ summary: 'Get all cycles' })
    @ApiResponse({ status: 200, description: 'Return array of cycles.' })
    async findAll(): Promise<Cycle[]> {
        return await this.cycleService.findAll();
    }


    @Get('id/:id')
    @ApiOperation({ summary: 'Get cycle by id' })
    @ApiResponse({ status: 200, description: 'Return cycle by id.' })
    async getById(@Param('id', applyIdValidation) id: number): Promise<Cycle> {
        return await this.cycleService.getById(+id);
    }

    @Patch('emailSent/:id')
    @ApiOperation({ summary: 'Update email sent' })
    @ApiResponse({ status: 200, description: 'Email sent updated.' })
    async updateEmailSent(@Param('id', applyIdValidation) id: number): Promise<Cycle> {
        return await this.cycleService.updateEmailSent(+id);
    }

    // are there any features left?
}
