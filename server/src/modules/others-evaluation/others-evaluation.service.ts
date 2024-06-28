import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateOthersevaluationDto } from './dto/create-others-evaluation.dto';
import { UpdateOthersevaluationDto } from './dto/update-others-evaluation.dto';

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


    async findEvaluation(evaluatorUserId: number, evaluatedUserId: number, cycleId: number) {
        return await this.prisma.othersEvaluation.findFirst({
            where: {
                evaluatorUserId: evaluatorUserId,
                evaluatedUserId: evaluatedUserId,
                cycleId: cycleId
            }
        });
    }


    async update(updateOthersevaluationDto: UpdateOthersevaluationDto) {
        return await this.prisma.othersEvaluation.updateMany({
            where: {
                evaluatorUserId: updateOthersevaluationDto.evaluatorUserId,
                evaluatedUserId: updateOthersevaluationDto.evaluatedUserId,
                cycleId: updateOthersevaluationDto.cycleId
            },
            data: { ...updateOthersevaluationDto, lastUpdated: new Date() }
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
