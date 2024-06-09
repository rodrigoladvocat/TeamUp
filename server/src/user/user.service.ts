import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async create(data: any) {
        return await this.prisma.user.create({ data });
    }

    async findAll() {
        return await this.prisma.user.findMany();
    }

    async getByName(name: string) {
        return await this.prisma.user.findMany({
            where: { 
                name: {
                    contains: name
            } 
        }
        });
    }

    async getByRole(role: string) {
        return await this.prisma.user.findMany({
            where: { role } 
        });
    }
}
