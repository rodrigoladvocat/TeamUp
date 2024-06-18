import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateOthersevaluationDto } from './dto/create-others-evaluation.dto';

@Injectable()
export class OthersevaluationService {
    constructor(private prisma: PrismaService) { }

    async create(createOthersevaluationDto: CreateOthersevaluationDto) {
        return await this.prisma.othersEvaluation.create({
            data: createOthersevaluationDto
        });
    }

    async findAll() {
        return await this.prisma.othersEvaluation.findMany({
            include: {
                evaluator: { select: { name: true } },
                evaluated: { select: { name: true } },
                cycle: true
            }
        });
    }

    // finding by the evaluatorId + evaluatedId + cycleId
    async findEvaluation(evaluatorUserId: number, evaluatedUserId: number, cycleId: number) {
        return await this.prisma.othersEvaluation.findFirst({
            where: {
                evaluatorUserId: evaluatorUserId,
                evaluatedUserId: evaluatedUserId,
                cycleId: cycleId
            }
        });
    }

    async update(createOthersevaluationDto: CreateOthersevaluationDto) {
        return await this.prisma.othersEvaluation.updateMany({
            where: {
                evaluatorUserId: createOthersevaluationDto.evaluatorUserId,
                evaluatedUserId: createOthersevaluationDto.evaluatedUserId,
                cycleId: createOthersevaluationDto.cycleId
            },
            data: createOthersevaluationDto
        });
    }

    async findByUserInCycle(evaluatedUserId: number, cycleId: number) {
        return await this.prisma.othersEvaluation.findMany({
            where: {
                evaluatedUserId: evaluatedUserId,
                cycleId: cycleId
            }
        });
    }
}
