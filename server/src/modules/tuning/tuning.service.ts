import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateTuningDto } from './dto/create-tuning.dto';

@Injectable()
export class TuningService {
    constructor(private prisma: PrismaService) { }

    async create(createTuningDto: CreateTuningDto) {
        return await this.prisma.tuning.create({
            data: createTuningDto
        })
    }


    async findAll() {
        return await this.prisma.tuning.findMany();
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
}
