import { Injectable } from '@nestjs/common';
import { Cycle } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CycleDto } from './dto/cycle.dto';

@Injectable()
export class CycleService {
    constructor(private prisma: PrismaService) {}

    async create(data: CycleDto): Promise<Cycle> {
        // maybe throw an error if the final date is before the initial date
        return await this.prisma.cycle.create({
            data: {
                // initialDate and lastUpdated are set to the current date automatically
                initialDate: new Date(),
                finalDate: data.finalDate,
                lastUpdated: new Date(),
            }
        });
    }

    async getLatest(): Promise<Cycle> {
        return await this.prisma.cycle.findFirst({
            orderBy: {
                finalDate: 'desc'
            }
        });
    }

    async findAll(): Promise<Cycle[]> {
        return await this.prisma.cycle.findMany();
    }

    async getById(id: number): Promise<Cycle> {
        return await this.prisma.cycle.findUnique({
            where: {
                id: id
            }
        });
    }
}
