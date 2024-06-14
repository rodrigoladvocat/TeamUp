import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const { password: unprotectedPassword } = createUserDto;

        // TODO: secure password
        const encriptedPassword = unprotectedPassword;

        const newUser = await this.prisma.user.create({
            data: {
                ...createUserDto,
                password: encriptedPassword,
            }
        });

        return newUser;
    }


    async findAll(): Promise<User[]> {
        return await this.prisma.user.findMany();
    }


    async getById(id: number): Promise<User> {
        const found = await this.prisma.user.findUnique({
            where: {
                id: id
            }
        });

        if (!found) {
            throw new NotFoundException("User not found.");
        }

        return found;
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
            where: {
                isManager: false
            }
        });
    }
}
