import { Injectable } from '@nestjs/common';
import { Prisma, SelfEvaluation } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { SelfevaluationDto } from './dto/create-selfevaluation.dto';

@Injectable()
export class SelfevaluationService {

    constructor(private prisma: PrismaService) { }

    async findAll(): Promise<SelfEvaluation[]> {
        return await this.prisma.selfEvaluation.findMany();
    }

    async findUserEval(userId: number, cycleId: number): Promise<SelfEvaluation> {
        return await this.prisma.selfEvaluation.findFirst({
            where: {
                userId: userId,
                cycleId: cycleId
            },
            include: { user: { select: { name: true } }, cycle: true },
        });
    }

    async findByUser(userId: number): Promise<SelfEvaluation[]> {
        return await this.prisma.selfEvaluation.findMany({
            where: { userId: userId },
            include: { user: { select: { name: true } }, cycle: true }
        });
    }

    async createSelfEvaluation(data: SelfevaluationDto): Promise<SelfEvaluation> {
        return await this.prisma.selfEvaluation.create({
            data
        }
        );
    }

    async updateSelfEvaluation(data: SelfevaluationDto) {
        return await this.prisma.selfEvaluation.updateMany({
            where: { userId: data.userId, cycleId: data.cycleId },
            data: data
        })
    }
}
