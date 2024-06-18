import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsBoolean, MinLength, IsNumber, IsPhoneNumber, Length, IsPostalCode } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ description: 'Username.', example: 'Fulano da Silva' })
    @IsNotEmpty()
    @IsString()
    name: string

    @ApiProperty({ description: 'email', example: 'fulano@gmail.com' })
    @IsNotEmpty()
    @IsEmail()
    email: string

    @ApiProperty({ description: 'User pass with length >= 8', example: '12345678' })
    @IsNotEmpty()
    @MinLength(8)
    password: string

    @ApiProperty({ description: 'URL of user profile image.', example: 'TODO - put default image' })
    @IsNotEmpty()
    imgUrl: string

    @ApiProperty({ description: 'Boolean flag. false means isCollaborator.', example: true })
    @IsNotEmpty()
    @IsBoolean()
    isManager: boolean

    @ApiProperty({ description: 'User role.', example: 'Sócio' })
    @IsNotEmpty()
    @IsString()
    role: string

    @ApiProperty({ description: 'User age', example: 20 })
    @IsNotEmpty()
    @IsNumber()
    age: number

    @ApiProperty({ description: 'User phone', example: '08191234-1234' })
    @IsNotEmpty()
    @IsPhoneNumber('BR')
    telephone: string

    @ApiProperty({ description: 'User cpf', example: 'Some name' })
    @IsNotEmpty()
    @Length(11, 11)
    cpf: string

    @ApiProperty({ description: 'User street address', example: 'Rua Inexistente' })
    @IsNotEmpty()
    @IsString()
    street: string

    @ApiProperty({ description: 'User street number address', example: '28' })
    @IsNotEmpty()
    @IsString()
    number: string

    @ApiProperty({ description: 'User city address', example: 'Recife' })
    @IsNotEmpty()
    @IsString()
    city: string

    @ApiProperty({ description: 'User state address', example: 'Brasil' })
    @IsNotEmpty()
    @IsString()
    state: string

    @ApiProperty({ description: 'User zipCode address', example: '12123-123' })
    @IsNotEmpty()
    @IsPostalCode('BR')
    zipCode: string
}
