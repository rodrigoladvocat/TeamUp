import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { hash as bcryptHash } from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const { password: unprotectedPassword, email, cpf } = createUserDto;

        const userAlreadyExists = await this.prisma.user.findMany({
            where: {
                OR: [
                    { email: email },
                    { cpf: cpf }
                ]
            }
        });

        if (userAlreadyExists.length > 0) {
            throw new ConflictException('Email is already in use.');
        }

        const hashedPassword = await bcryptHash(unprotectedPassword, 7);

        const newUser = await this.prisma.user.create({
            data: {
                ...createUserDto,
                password: hashedPassword,
            }
        });

        return { ...newUser, password: "***" };
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
