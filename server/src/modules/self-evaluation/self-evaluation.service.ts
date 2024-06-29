import { Injectable } from '@nestjs/common';
import { Prisma, SelfEvaluation } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { CreateSelfEvaluationDto } from './dto/create-self-evaluation.dto';
import { UpdateSelfEvaluationDto } from './dto/update-self-evaluation.dto';

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
            include: {
                user: {
                    select: {
                        name: true
                    }
                },
                cycle: true
            },
        });
    }


    async findByUser(userId: number): Promise<SelfEvaluation[]> {
        return await this.prisma.selfEvaluation.findMany({
            where: { userId: userId },
            include: {
                user: {
                    select: {
                        name: true
                    }
                },
                cycle: true
            }
        });
    }


    async createSelfEvaluation(createSelfEvaluationDto: CreateSelfEvaluationDto) {
        const found = await this.prisma.selfEvaluation.findFirst({
            where: {
                userId: createSelfEvaluationDto.userId,
                cycleId: createSelfEvaluationDto.cycleId
            }
        });

        // prevents from creating a new self evaluation if it already exists
        if (found){
            return await this.prisma.selfEvaluation.updateMany({
                where: {
                    userId: createSelfEvaluationDto.userId,
                    cycleId: createSelfEvaluationDto.cycleId
                },
                data: createSelfEvaluationDto
            })
        }
        
        return await this.prisma.selfEvaluation.create({
            data: createSelfEvaluationDto
        }
        );
    }


    async updateSelfEvaluation(updateSelfEvaluationDto: UpdateSelfEvaluationDto): Promise<Prisma.BatchPayload> {
        return await this.prisma.selfEvaluation.updateMany({
            where: {
                userId: updateSelfEvaluationDto.userId,
                cycleId: updateSelfEvaluationDto.cycleId
            },
            data: { ...updateSelfEvaluationDto, lastUpdated: new Date() }
        })
    }
}
