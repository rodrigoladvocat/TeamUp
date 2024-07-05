import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateOthersevaluationDto } from './dto/create-others-evaluation.dto';
import { UpdateOthersevaluationDto } from './dto/update-others-evaluation.dto';
import { OthersEvaluation } from '@prisma/client';
import { SubmitOthersevaluationDto } from './dto/submit-others-evaluation.dto';

@Injectable()
export class OthersEvaluationService {
    constructor(private prisma: PrismaService) { }

    async create(createOthersevaluationDto: CreateOthersevaluationDto) {
        return await this.prisma.othersEvaluation.create({
            data: createOthersevaluationDto
        });
    }


    async submitEvaluation(createOthersevaluationDto: SubmitOthersevaluationDto[], userId: number, cycleId: number) {

        const upsertPromises = createOthersevaluationDto.map(async (row) => {
            // return this.prisma.othersEvaluation.upsert({
            //     where: {
            //             evaluatorUserId: userId,
            //             evaluatedUserId: row.evaluatedUserId,
            //             cycleId: cycleId,
            //     },
            //     update: {
            //         grade: row.grade,
            //         comment: row.comment,
            //         lastUpdated: new Date(),
            //         isFinalized: row.isFinalized
            //     },
            //     create: {
            //         ...row,
            //         evaluatorUserId: userId,
            //         cycleId: cycleId,
            //         lastUpdated: new Date(),
            //     }
            // });

            const found = await this.prisma.othersEvaluation.findFirst({
                where: {
                    evaluatorUserId: userId,
                    evaluatedUserId: row.evaluatedUserId,
                    cycleId: cycleId
                }
            });

            if (found) {
                return this.prisma.othersEvaluation.updateMany({
                    where: {
                        evaluatorUserId: userId,
                        evaluatedUserId: row.evaluatedUserId,
                        cycleId: cycleId,
                    },
                    data: {
                        grade: row.grade,
                        comment: row.comment,
                        lastUpdated: new Date(),
                        isFinalized: row.isFinalized
                    }
                });
            }
            else {
                return this.prisma.othersEvaluation.create({
                    data: {
                        ...row,
                        evaluatorUserId: userId,
                        cycleId: cycleId,
                        lastUpdated: new Date(),
                    }
                });
            };
        });

        const createdOrUpdated = await Promise.all(upsertPromises);
        return createdOrUpdated;
    }


    async submitEvaluationToLatestCycle(createOthersevaluationDto: SubmitOthersevaluationDto[], userId: number) {

        const latestCycleFound = await this.prisma.cycle.findFirst({
            orderBy: {
                finalDate: 'desc',
            },
        });

        if (!latestCycleFound) {
            throw new HttpException('No cycles found.', HttpStatus.NO_CONTENT);
        }

        const upsertPromises = createOthersevaluationDto.map(async (row) => {
            // return this.prisma.othersEvaluation.upsert({
            //     where: {
            //         evaluatorUserId_evaluatedUserId_cycleId: {
            //             evaluatorUserId: userId,
            //             evaluatedUserId: row.evaluatedUserId,
            //             cycleId: latestCycleFound.id,
            //         },
            //     },
            //     update: {
            //         grade: row.grade,
            //         comment: row.comment,
            //         lastUpdated: new Date(),
            //         isFinalized: row.isFinalized
            //     },
            //     create: {
            //         ...row,
            //         evaluatorUserId: userId,
            //         cycleId: latestCycleFound.id,
            //         lastUpdated: new Date(),
            //     }
            // });

            const found = await this.prisma.othersEvaluation.findFirst({
                where: {
                    evaluatorUserId: userId,
                    evaluatedUserId: row.evaluatedUserId,
                    cycleId: latestCycleFound.id
                }
            });

            if (found) {
                return this.prisma.othersEvaluation.updateMany({
                    where: {
                        evaluatorUserId: userId,
                        evaluatedUserId: row.evaluatedUserId,
                        cycleId: latestCycleFound.id,
                    },
                    data: {
                        grade: row.grade,
                        comment: row.comment,
                        lastUpdated: new Date(),
                        isFinalized: row.isFinalized
                    }
                });
            }
            else {
                return this.prisma.othersEvaluation.create({
                    data: {
                        ...row,
                        evaluatorUserId: userId,
                        cycleId: latestCycleFound.id,
                        lastUpdated: new Date(),
                    }
                });
            };
        });

        const createdOrUpdated = await Promise.all(upsertPromises);
        return createdOrUpdated;
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

    async evaluatorGetsAllEval(evaluatorId: number) {
        return await this.prisma.othersEvaluation.findMany({
            where: { evaluatorUserId: evaluatorId }
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


    async evaluatorGetsOthersEval(evaluatorUserId: number, cycleId: number) {
        return await this.prisma.othersEvaluation.findMany({
            where: { evaluatorUserId: evaluatorUserId, cycleId: cycleId }
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


    async findUserEvalInTheLatestCycle(userId: number): Promise<OthersEvaluation[]> {
        const latestCycleFound = await this.prisma.cycle.findFirst({
            orderBy: {
                finalDate: 'desc',
            },
        });

        if (!latestCycleFound) {
            throw new HttpException('No cycles found.', HttpStatus.NO_CONTENT);
        }

        const found = await this.prisma.othersEvaluation.findMany({
            where: {
                evaluatorUserId: userId,
                cycleId: latestCycleFound.id
            },
        });

        return found;
    }
}
