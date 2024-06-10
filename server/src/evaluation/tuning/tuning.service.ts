import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TuningDto } from './dto/tuning.dto';

@Injectable()
export class TuningService {
    constructor(private prisma: PrismaService) {}

    async create(data: TuningDto) {
        return await this.prisma.tuning.create({
            data
    })}

    async findAll() {
        return await this.prisma.tuning.findMany();
    }

    async findOne(userId: number, cycleId: number) {
        return await this.prisma.tuning.findFirst({
            where: { collaboratorUserId: userId, cycleId: cycleId },
            include: { evaluator: true, evaluated: true }
        });
    }

    // get tunings by user through all cycles
    async findByUser(userId: number) {
        return await this.prisma.tuning.findMany({
            where: { collaboratorUserId: userId },
            include: { evaluator: true, evaluated: true }
        });
    }
}
