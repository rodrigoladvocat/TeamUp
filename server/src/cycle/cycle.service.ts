import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Cycle } from '@prisma/client';
import { PrismaService } from '../database/prisma.service';
import { CreateCycleDto } from './dto/create-cycle.dto';

@Injectable()
export class CycleService {
    constructor(private prisma: PrismaService) { }

    async create(createCycleDto: CreateCycleDto): Promise<Cycle> {
        const initialDate = new Date();
        const finalDate = createCycleDto.finalDate;

        if (finalDate <= initialDate) {
            throw new BadRequestException('The end date must be later than the start date.');
        }

        return await this.prisma.cycle.create({
            data: {
                // initialDate and lastUpdated are set to the current date automatically
                initialDate: new Date(),
                finalDate: createCycleDto.finalDate,
                lastUpdated: new Date(),
            }
        });
    }


    async getLatest(): Promise<Cycle> {
        const found = await this.prisma.cycle.findFirst({
            orderBy: {
                finalDate: 'desc'
            }
        });

        if (!found) {
            throw new HttpException('No cycles found.', HttpStatus.NO_CONTENT);
        }

        return found;
    }


    async findAll(): Promise<Cycle[]> {
        return await this.prisma.cycle.findMany();
    }


    async getById(id: number): Promise<Cycle> {
        const found = await this.prisma.cycle.findUnique({
            where: {
                id: id
            }
        });

        if (!found) {
            throw new NotFoundException("Cycle not found.");
        }

        return found;
    }
}
