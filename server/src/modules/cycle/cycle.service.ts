import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Cycle } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { CreateCycleDto } from './dto/create-cycle.dto';

@Injectable()
export class CycleService {
  constructor(private prisma: PrismaService) {}

  async create(createCycleDto: CreateCycleDto): Promise<Cycle> {
    const initialDate = new Date();
    const finalDate = new Date(createCycleDto.finalDate); // createCycleDto.finalDate is a string
    const cycleName = createCycleDto.cycleName;

    if (finalDate <= initialDate) {
      // now two dates are being compared
      throw new BadRequestException(
        'The end date must be later than the start date.',
      );
    }

    return await this.prisma.cycle.create({
      data: {
        // initialDate and lastUpdated are set to the current date automatically
        cycleName: cycleName,
        initialDate: initialDate,
        finalDate: createCycleDto.finalDate,
        lastUpdated: initialDate,
      },
    });
  }

  async getLatest(): Promise<Cycle> {
    const found = await this.prisma.cycle.findFirst({
      orderBy: {
        id: 'desc',
      },
    });

    if (!found) {
      throw new HttpException('No cycles found.', HttpStatus.NO_CONTENT);
    }

    return found;
  }

  async getLast(): Promise<Cycle> {
    const found = await this.prisma.cycle.findFirst({
      orderBy: {
        id: 'desc',
      },
      skip: 1,
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
        id: id,
      },
    });

    if (!found) {
      throw new NotFoundException('Cycle not found.');
    }

    return found;
  }

  async updateEmailSent(id: number): Promise<Cycle> {
    const found = await this.prisma.cycle.findUnique({
      where: {
        id: id,
      },
    });

    if (!found) {
      throw new NotFoundException('Cycle not found.');
    }

    return await this.prisma.cycle.update({
      where: {
        id: id,
      },
      data: {
        emailSent: true,
      },
    });
  }
}
