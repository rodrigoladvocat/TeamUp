import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { OthersEvaluationService } from './others-evaluation.service';
import { CreateOthersevaluationDto } from './dto/create-others-evaluation.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OthersEvaluation, Prisma } from '@prisma/client';
import { SubmitOthersevaluationDto } from './dto/submit-others-evaluation.dto';

const applyIdValidation = new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST });
const applyBodyValidation = new ValidationPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST });

@ApiTags('Others-Evaluation Controller')
@Controller('others-evaluation')
export class OthersEvaluationController {
    constructor(private othersevaluationService: OthersEvaluationService) { }

    @Post()
    @ApiOperation({ summary: 'Create a others-evaluation' })
    @ApiResponse({ status: 201, description: 'The others-evaluation has been successfully created.' })
    @ApiResponse({ status: 400, description: 'Bad Request. Stopped by some validator.' })
    async create(@Body(applyBodyValidation) data: CreateOthersevaluationDto) {
        return await this.othersevaluationService.create(data);
    }


    @Post("/submit-evaluation/latest-cycle/:userId")
    @ApiOperation({ summary: 'Create many others-evaluation' })
    @ApiResponse({ status: 201, description: 'All others-evaluation have been successfully created.' })
    @ApiResponse({ status: 400, description: 'Bad Request. Stopped by some validator.' })
    async submitEvaluationToLatestCycle(
        @Body(applyBodyValidation) data: SubmitOthersevaluationDto[],
        @Param('userId', applyIdValidation) userId: number,
    ) {
        return await this.othersevaluationService.submitEvaluationToLatestCycle(data, userId);
    }


    @Post("/submit-evaluation/:cycleId/:userId")
    @ApiOperation({ summary: 'Create many others-evaluation' })
    @ApiResponse({ status: 201, description: 'All others-evaluation have been successfully created.' })
    @ApiResponse({ status: 400, description: 'Bad Request. Stopped by some validator.' })
    async submitEvaluation(
        @Body(applyBodyValidation) data: SubmitOthersevaluationDto[],
        @Param('cycleId', applyIdValidation) cycleId: number,
        @Param('userId', applyIdValidation) userId: number,
    ) {
        return await this.othersevaluationService.submitEvaluation(data, userId, cycleId);
    }


    @Get()
    @ApiOperation({ summary: 'Get all others-evaluations.' })
    @ApiResponse({ status: 200, description: 'Return all others-evaluations.' })
    async findAll() {
        return await this.othersevaluationService.findAll();
    }


    @Get('/latest-cycle/:userId')
    @ApiOperation({ summary: 'Get others evaluation by (userId, latest cycleId)' })
    @ApiResponse({ status: 200, description: 'Return user self evaluations of latest cycle.' })
    @ApiResponse({ status: 400, description: 'Bad Request. Stopped by some validator.' })
    async findUserEvalInTheLatestCycle(
        @Param('userId', applyIdValidation) userId: number
    ): Promise<OthersEvaluation[]> {
        return this.othersevaluationService.findUserEvalInTheLatestCycle(+userId);
    }


    @Get(':evaluatorId/:evaluatedId/:cycleId')
    @ApiOperation({ summary: 'Get a tuning-evaluations by (evaluatorId, evaluatedId, cycleId).' })
    @ApiResponse({ status: 200, description: 'Return a tuning-evaluations filtered by (evaluatorId, evaluatedId, cycleId).' })
    @ApiResponse({ status: 400, description: 'Bad Request. Stopped by some validator.' })
    @ApiResponse({ status: 404, description: 'Some row was not found.' }) // TODO - implementar essa verificação 404 dentro do serviço
    async findEvaluation(
        @Param('evaluatorId', applyIdValidation) evaluatorId: number,
        @Param('evaluatedId', applyIdValidation) evaluatedId: number,
        @Param('cycleId', applyIdValidation) cycleId: number
    ): Promise<OthersEvaluation> {
        return await this.othersevaluationService.findEvaluation(+evaluatorId, +evaluatedId, +cycleId);
    }


    @Get(':evaluatedId/:cycleId')
    @ApiOperation({ summary: 'Get a tuning-evaluations by (userId, cycleId).' })
    @ApiResponse({ status: 200, description: 'Return all tuning-evaluations filtered by (userId, cycleId).' })
    @ApiResponse({ status: 400, description: 'Bad Request. Stopped by some validator.' })
    @ApiResponse({ status: 404, description: 'Some row was not found.' }) // TODO - implementar essa verificação 404 dentro do serviço
    async findByUserInCyle(
        @Param('evaluatedId', applyIdValidation) evaluatedId: number,
        @Param('cycleId', applyIdValidation) cycleId: number
    ): Promise<OthersEvaluation[]> {
        return await this.othersevaluationService.findByUserInCycle(+evaluatedId, +cycleId);
    }

    @Get('others/evaluator-get/:evaluatorId/:cycleId')
    @ApiOperation({ summary: 'Get all evaluations made by an evaluator.' })
    async evaluatorGetsOthersEval(
        @Param('evaluatorId', applyIdValidation) evaluatorId: number,
        @Param('cycleId', applyIdValidation) cycleId: number
    ): Promise<OthersEvaluation[]> {
        return await this.othersevaluationService.evaluatorGetsOthersEval(+evaluatorId, +cycleId);
    }


    @Patch()
    @ApiOperation({ summary: 'Update a 360 evaluation.' })
    @ApiResponse({ status: 400, description: 'Bad Request. Stopped by some validator.' })
    @ApiResponse({ status: 404, description: 'Some row was not found.' }) // TODO - implementar essa verificação 404 dentro do serviço
    async update(@Body(applyBodyValidation) createOthersevaluationDto: CreateOthersevaluationDto): Promise<Prisma.BatchPayload> {
        return await this.othersevaluationService.update(createOthersevaluationDto);
    }
}
