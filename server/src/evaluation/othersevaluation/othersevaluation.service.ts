import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { OthersevaluationDto } from './dto/othersevaluation.dto';

@Injectable()
export class OthersevaluationService {
    constructor(private prisma: PrismaService) {}

    async create(data: OthersevaluationDto){
        return await this.prisma.othersEvaluation.create({
            data
        });
    }

    async findAll(){
        return await this.prisma.othersEvaluation.findMany({
            include: {
                evaluator: {select: {name: true}},
                evaluated: {select: {name: true}},
                cycle: true
            }
        });
    }

    // finding by the evaluatorId + evaluatedId + cycleId
    async findEvaluation(evaluatorUserId: number, evaluatedUserId: number, cycleId: number){
        return await this.prisma.othersEvaluation.findFirst({
            where: {
                evaluatorUserId: evaluatorUserId,
                evaluatedUserId: evaluatedUserId,
                cycleId: cycleId
            }
        });
    }

    async update(data: OthersevaluationDto){
        return await this.prisma.othersEvaluation.updateMany({
            where: {
                evaluatorUserId: data.evaluatorUserId,
                evaluatedUserId: data.evaluatedUserId,
                cycleId: data.cycleId
            },
            data
        });
    }
}
