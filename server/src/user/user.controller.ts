import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { ApiTags } from '@nestjs/swagger';
import { get } from 'http';
import { User } from '@prisma/client';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    async create(@Body() data: UserDto): Promise<User> {
        return await this.userService.create(data);
    }

    @Get()
    async findAll(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Get(':name')
    async getByName(@Param('name') name: string): Promise<User[]> {
        return await this.userService.getByName(name);
    }

    @Get('role/:role')
    async getByRole(@Param('role') role: string): Promise<User[]> {
        return await this.userService.getByRole(role);
    }

    @Get('collaborators/find')
    async getCollaborators(): Promise<User[]> {
        return await this.userService.getCollaborators();
    }

    // are there any features left?
}

