import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { hash as bcryptHash, compare as bcryptCompare } from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
    constructor(
        private prisma: PrismaService,
        private readonly jwtService: JwtService
    ) { }

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


    async getCollaboratorsByName(name: string): Promise<User[]> {
        return await this.prisma.user.findMany({
            where: {
                isManager: false,
                name: {
                    contains: name
                }
            }
        });
    }

    async getCollaborators(): Promise<User[]> {
        return await this.prisma.user.findMany({
            where: {
                isManager: false
            }
        });
    }


    async getAllCollaboratorsEmails(): Promise<{ email: string }[]> {
        const found = this.prisma.user.findMany({
            where: {
                isManager: false
            },
            select: {
                email: true,
                name: true
            }
        });

        return found;
    }


    async login({ email, password }: LoginUserDto): Promise<{ user: User; token: string }> {

        const found = await this.prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (!found) {
            throw new UnauthorizedException("E-mail ou senha inválidos.");
        }

        const isCorrectPassword = await bcryptCompare(password, found.password);

        if (!isCorrectPassword) {
            throw new UnauthorizedException("E-mail ou senha inválidos.");
        }

        const payload = { userId: found.id, userName: found.name, email: found.email };
        const token = this.jwtService.sign(payload);

        return {
            user: { ...found, password: "***" },
            token: token
        };
    };
}
