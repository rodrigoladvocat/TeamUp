import { Controller, Post, Get, Body, Param, ParseIntPipe, ValidationPipe, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';


const applyIdValidation = new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST });
const applyBodyValidation = new ValidationPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST });

@ApiTags('User Controller')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    @ApiOperation({ summary: 'Create user' })
    @ApiResponse({ status: 201, description: 'The user has been successfully created.' })
    @ApiResponse({ status: 409, description: 'Repeated data. Email is already in use.' })
    @ApiResponse({ status: 400, description: 'Bad Request. Stopped by some validator.' })
    async create(@Body(applyBodyValidation) createUserDto: CreateUserDto): Promise<User> {
        return await this.userService.create(createUserDto);
    }


    @Get()
    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, description: 'Return all users.' })
    async findAll(): Promise<User[]> {
        return await this.userService.findAll();
    }


    @Get(':id')
    @ApiOperation({ summary: 'Get user by id' })
    @ApiResponse({ status: 200, description: 'Return the user.' })
    @ApiResponse({ status: 400, description: 'Bad Request. Stopped by some validator.' })
    @ApiResponse({ status: 404, description: 'User not found.' })
    async getById(@Param('id', applyIdValidation) id: string): Promise<User> {
        return await this.userService.getById(+id);
    }


    @Get(':name')
    @ApiOperation({ summary: 'Get user by name' })
    @ApiResponse({ status: 200, description: 'Return array of user filtered by name.' })
    async getByName(@Param('name') name: string): Promise<User[]> {
        return await this.userService.getByName(name);
    }


    @Get('role/:role')
    @ApiOperation({ summary: 'Get user by role' })
    @ApiResponse({ status: 200, description: 'Return array of user filtered by role.' })
    async getByRole(@Param('role') role: string): Promise<User[]> {
        return await this.userService.getByRole(role);
    }


    @Get('collaborators/find')
    @ApiOperation({ summary: 'Get all users that are collaborators' })
    @ApiResponse({ status: 200, description: 'Return all users that are collaborators.' })
    async getCollaborators(): Promise<User[]> {
        return await this.userService.getCollaborators();
    }

    // are there any features left?
}

