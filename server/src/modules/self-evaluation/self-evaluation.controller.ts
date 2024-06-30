import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { SelfEvaluationService } from './self-evaluation.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Prisma, SelfEvaluation } from '@prisma/client';
import { CreateSelfEvaluationDto } from './dto/create-self-evaluation.dto';
import { UpdateSelfEvaluationDto } from './dto/update-self-evaluation.dto';


const applyIdValidation = new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST });
const applyBodyValidation = new ValidationPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST });

@ApiTags('Self-Evaluation Controller')
@Controller('self-evaluation')
export class SelfEvaluationController {
    constructor(private selfevaluationService: SelfEvaluationService) { }

    @Get()
    @ApiOperation({ summary: 'Get all self evaluations' })
    @ApiResponse({ status: 200, description: 'Return all self evaluations.' })
    async findAll(): Promise<SelfEvaluation[]> {
        return this.selfevaluationService.findAll();
    }


    @Get('/latest-cycle/:userId')
    @ApiOperation({ summary: 'Get self evaluation by (userId, latest cycleId)' })
    @ApiResponse({ status: 200, description: 'Return user self evaluations of latest cycle.' })
    @ApiResponse({ status: 400, description: 'Bad Request. Stopped by some validator.' })
    async findUserEvalInTheLatestCycle(
        @Param('userId') userId: number,
    ): Promise<SelfEvaluation> {
        return this.selfevaluationService.findUserEvalInTheLatestCycle(+userId);
    }


    @Get(':userId/:cycleId')
    @ApiOperation({ summary: 'Get self evaluation by (userId, cycleId)' })
    @ApiResponse({ status: 200, description: 'Return user self evaluations of a specific cycle.' })
    @ApiResponse({ status: 400, description: 'Bad Request. Stopped by some validator.' })
    @ApiResponse({ status: 404, description: 'Some row was not found.' }) // TODO - implementar essa verificação 404 dentro do serviço
    async findUserEval(
        @Param('userId', applyIdValidation) userId: number,
        @Param('cycleId', applyIdValidation) cycleId: number
    ): Promise<SelfEvaluation> {
        return this.selfevaluationService.findUserEval(+userId, +cycleId);
    }


    @Get(':userId')
    @ApiOperation({ summary: 'Get by user.' })
    @ApiResponse({ status: 200, description: 'Return all self evaluations filtered by user.' })
    @ApiResponse({ status: 400, description: 'Bad Request. Stopped by some validator.' })
    @ApiResponse({ status: 404, description: 'Some row was not found.' }) // TODO - implementar essa verificação 404 dentro do serviço
    async findByUser(@Param('userId', applyIdValidation) userId: number): Promise<SelfEvaluation[]> {
        return this.selfevaluationService.findByUser(+userId);
    }


    @Post()
    @ApiOperation({ summary: 'Create a self evaluation.' })
    @ApiResponse({ status: 201, description: 'The self-evaluation has been successfully created.' })
    @ApiResponse({ status: 409, description: 'Repeated data. At least one unique propertie is already in use.' })
    @ApiResponse({ status: 400, description: 'Bad Request. Stopped by some validator.' })
    async createSelfEvaluation(
        @Body(applyBodyValidation) createSelfEvaluationDto: CreateSelfEvaluationDto
    ) {
        return this.selfevaluationService.createSelfEvaluation(createSelfEvaluationDto);
    }


    @Patch()
    @ApiOperation({ summary: 'Update a self evaluation.' })
    @ApiResponse({ status: 200, description: 'Return the updated self evaluation.' })
    @ApiResponse({ status: 400, description: 'Bad Request. Stopped by some validator.' })
    @ApiResponse({ status: 404, description: 'Some row was not found.' }) // TODO - implementar essa verificação 404 dentro do serviço
    async updateSelfEvaluation(
        @Body(applyBodyValidation) updateSelfEvaluationDto: UpdateSelfEvaluationDto
    ): Promise<Prisma.BatchPayload> {
        return this.selfevaluationService.updateSelfEvaluation(updateSelfEvaluationDto)
    }
}
