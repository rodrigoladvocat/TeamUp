import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateTuningDto } from './dto/create-tuning.dto';

@Injectable()
export class TuningService {
    constructor(private prisma: PrismaService) { }

    async create(createTuningDto: CreateTuningDto) {

        const grade = () => {
            let i = 0;
            let sum = 0;
            for (var exp in createTuningDto) {
                if (i > 2) {
                    sum += createTuningDto[exp];
                }
                i++;
            }

            return (sum / (i - 3));
        }

        const data = {
            ...createTuningDto,
            grade: grade()

        }

        return await this.prisma.tuning.create({
            data: data
        })
    }


    async findAll() {
        return await this.prisma.tuning.findMany();
    }


    async calculateCollaboratorsStageInLatestCycle() {
        const latestCycleFound = await this.prisma.cycle.findFirst({
            orderBy: {
                finalDate: 'desc',
            },
        });

        if (!latestCycleFound) {
            throw new HttpException('No cycles found.', HttpStatus.NO_CONTENT);
        }

        const collaborators = await this.prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                imgUrl: true,
            },
            where: {
                isManager: false,
            }
        });

        const selfEvaluations = await this.prisma.selfEvaluation.findMany({
            where: {
                cycleId: latestCycleFound.id
            },
            select: {
                userId: true,
                isFinalized: true
            }
        });


        const othersEvaluations = await this.prisma.othersEvaluation.findMany({
            where: {
                cycleId: latestCycleFound.id
            },
            select: {
                evaluatorUserId: true,
                isFinalized: true
            }
        });

        const inProgressUsers = new Set([
            ...selfEvaluations.filter(se => !se.isFinalized),
            ...othersEvaluations.filter(se => !se.isFinalized)
        ]);
        const finilizedUsers = new Set([
            ...selfEvaluations.filter(se => se.isFinalized),
            ...othersEvaluations.filter(se => se.isFinalized)
        ]);

        return collaborators.map(c => {
            let stage: "Não iniciado" | "Em andamento" | "Concluída" = "Não iniciado";

            if (inProgressUsers.has({ userId: c.id, isFinalized: false })) {
                stage = "Em andamento";
            }
            else if (finilizedUsers.has({ userId: c.id, isFinalized: true })) {
                stage = "Concluída";
            }

            return {
                ...c,
                stage
            }
        });

    }


    async findOne(userId: number, cycleId: number) {
        return await this.prisma.tuning.findFirst({
            where: { collaboratorUserId: userId, cycleId: cycleId },
            include: { evaluator: true, evaluated: true }
        });
    }


    async findByUser(userId: number) {
        return await this.prisma.tuning.findMany({
            where: { collaboratorUserId: userId },
            include: { evaluator: true, evaluated: true }
        });
    }

    async findByCycleId(cycleId: number) {
        return await this.prisma.tuning.findMany({
            where: { cycleId: cycleId },
            include: { evaluator: true, evaluated: true }
        });
    }
}
