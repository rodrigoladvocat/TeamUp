import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { UserDto } from './dto/user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async create(data: UserDto): Promise<User> {
        return await this.prisma.user.create({ data });
    }

    async findAll(): Promise<User[]>{
        return await this.prisma.user.findMany();
    }

    async getByName(name: string): Promise<User[]> {
        return await this.prisma.user.findMany({
            where: { 
                name: {
                    contains: name
            } 
        }
        });
    }

    async getByRole(role: string): Promise<User[]> {
        return await this.prisma.user.findMany({
            where: { role }
        });
    }

    async getCollaborators(): Promise<User[]> {
        return await this.prisma.user.findMany({
            where: { role: {not: "Manager"}}
        });
    }
}
