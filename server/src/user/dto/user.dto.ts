import { ApiProperty } from "@nestjs/swagger"

export class UserDto {
    @ApiProperty()
    name: string
    
    @ApiProperty()
    email: string

    @ApiProperty()
    password:  string
    
    @ApiProperty()
    imgUrl: string

    @ApiProperty()
    isManager: boolean

    @ApiProperty()
    role: string

    @ApiProperty()
    age: number

    @ApiProperty()
    telephone: string

    @ApiProperty()
    cpf: string

    @ApiProperty()
    street: string

    @ApiProperty()
    number: string

    @ApiProperty()
    city: string

    @ApiProperty()
    state: string

    @ApiProperty()
    zipCode: string
}

// no validation