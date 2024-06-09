import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { ApiTags } from '@nestjs/swagger';
import { get } from 'http';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    async create(@Body() data: UserDto) {
        return await this.userService.create(data);
    }

    @Get()
    async findAll() {
        return await this.userService.findAll();
    }

    @Get(':name')
    async getByName(@Param('name') name: string) {
        return await this.userService.getByName(name);
    }

    @Get(':role')
    async getByRole(@Param('role') role: string) {
        return await this.userService.getByRole(role);
    }
}

