import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  ParseIntPipe,
  ValidationPipe,
  HttpStatus,
  HttpCode
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { LoginUserDto } from './dto/login-user.dto';

const applyIdValidation = new ParseIntPipe({
  errorHttpStatusCode: HttpStatus.BAD_REQUEST,
});
const applyBodyValidation = new ValidationPipe({
  errorHttpStatusCode: HttpStatus.BAD_REQUEST,
});

@ApiTags('User Controller')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  @ApiResponse({
    status: 409,
    description: 'Repeated data. Email is already in use.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Stopped by some validator.',
  })
  async create(
    @Body(applyBodyValidation) createUserDto: CreateUserDto,
  ): Promise<User> {
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
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Stopped by some validator.',
  })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async getById(@Param('id', applyIdValidation) id: string): Promise<User> {
    return await this.userService.getById(+id);
  }

  @Get('name/:name')
  @ApiOperation({ summary: 'Get user by name' })
  @ApiResponse({
    status: 200,
    description: 'Return array of user filtered by name.',
  })
  async getByName(@Param('name') name: string): Promise<User[]> {
    return await this.userService.getByName(name);
  }

  @Get('role/:role')
  @ApiOperation({ summary: 'Get user by role' })
  @ApiResponse({
    status: 200,
    description: 'Return array of user filtered by role.',
  })
  async getByRole(@Param('role') role: string): Promise<User[]> {
    return await this.userService.getByRole(role);
  }

  @Get('collaborators/find/:name')
  @ApiOperation({ summary: 'Get collaborators by name' })
  @ApiResponse({
    status: 200,
    description: 'Return array of collaborators filtered by name',
  })
  async getCollaboratorsByName(@Param('name') name: string): Promise<User[]> {
    return await this.userService.getCollaboratorsByName(name);
  }

  @Get('collaborators/find/')
  @ApiOperation({ summary: 'Get collaborators by name' })
  @ApiResponse({
    status: 200,
    description: 'Return array of collaborators filtered by name',
  })
  async getCollaborators(): Promise<User[]> {
    return await this.userService.getCollaborators();
  }


  @Post('login')
  @ApiOperation({ summary: 'Authenticate user.' })
  @ApiResponse({
    status: 200,
    description: 'Return user data and token'
  })
  @ApiResponse({ status: 401, description: "Email or password doesn't match." })
  @HttpCode(200)
  async login(
    @Body(applyBodyValidation) credentials: LoginUserDto
  ): Promise<{ user: User; token: string }> {
    return await this.userService.login(credentials);
  }
}
