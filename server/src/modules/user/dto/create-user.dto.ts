import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsBoolean,
  MinLength,
  IsNumber,
  IsPhoneNumber,
  Length,
  IsPostalCode,
} from 'class-validator';

export class CreateUserDto {

  @ApiProperty({ description: 'Username.', example: 'Fulano da Silva' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'email', example: 'fulano@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User pass with length >= 8',
    example: '12345678',
  })
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty({
    description: 'URL of user profile image.',
    example: 'https://s3-alpha-sig.figma.com/img/c77b/5367/3ddf1e131c74d76bfc7f3e4cefdc4331?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l4O0pKtpwtOnn7e3dRCGdHogQGO0lD00zuGfXgLXa7Y5MFYncWsct8twUxOY0jfgjuC~~-GTz5QBnruZRSb-RjHl7V-ACinksCy0Ou0AdiXdSXDXEMwY7~bZHM2ZDn1XHHhwhkP7r9jqQtYKNjACi-F-qKwpRoarFdSOcdM-aAE0NhimVG8kziAyIBVqb8atHZCSBugUv8KrTQJGGvhzlh0KciywurX1x7m6Dd~iZWSMvik2W709eFnDJYvvyU1Odbpfh6yRv~DLd0lrIQwUDA7yAluhdqeALWEADVDlS0EBGrDl5DBqBRmgEJRbdB39j5qxtHkmoXvzXo5MlXs70g__',
  })
  @IsNotEmpty()
  imgUrl: string;

  @ApiProperty({
    description: 'Boolean flag. false means isCollaborator.',
    example: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  isManager: boolean;

  @ApiProperty({ description: 'User role.', example: 'Sócio' })
  @IsNotEmpty()
  @IsString()
  role: string;

  @ApiProperty({ description: 'User age', example: 20 })
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @ApiProperty({ description: 'User phone', example: '08191234-1234' })
  @IsNotEmpty()
  @IsPhoneNumber('BR')
  telephone: string;

  @ApiProperty({ description: 'User cpf', example: '12312312312' })
  @IsNotEmpty()
  @Length(11, 11)
  cpf: string;

  @ApiProperty({
    description: 'User street address',
    example: 'Rua Inexistente',
  })
  @IsNotEmpty()
  @IsString()
  street: string;

  @ApiProperty({ description: 'User street number address', example: '28' })
  @IsNotEmpty()
  @IsString()
  number: string;

  @ApiProperty({ description: 'User city address', example: 'Recife' })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({ description: 'User state address', example: 'Brasil' })
  @IsNotEmpty()
  @IsString()
  state: string;

  @ApiProperty({ description: 'User zipCode address', example: '12123-123' })
  @IsNotEmpty()
  @IsPostalCode('BR')
  zipCode: string;
}
