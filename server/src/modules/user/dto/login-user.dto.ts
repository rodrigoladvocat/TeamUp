import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class LoginUserDto {
  @ApiProperty({
    description: "The user's email address for login.",
    example: 'fulano@gmail.com',
    required: true,
  })
  // @IsEmail() // Before uncommenting the validation. TODO: need create a filter to map english error messages to portuguese ("Email ou senha inválidos")
  // @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: "The user's password for login.",
    minLength: 8,
    example: '12345678',
    required: true,
  })
  // @IsString()
  // @IsNotEmpty()
  // @MinLength(8)
  password: string;
}
