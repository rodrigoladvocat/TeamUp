import { CreateUserDto } from "../dto/create-user.dto";

export const id = '1';
export const invalidId = 'invalid';

export const validCreateUserDto: CreateUserDto = {
  age: 18,
  email: "fulano@gmail.com",
  password: "12345678",
  imgUrl: "TODO - put default image here",
  isManager: false,
  name: "fulano",
  role: "Sócio",
  telephone: "91234-1234",
  cpf: "123123123-12",
  street: "Rua Inexistente",
  city: "Recife",
  state: "Brasil",
  number: "123",
  zipCode: "123456-789"
};

export const validCreatedUserResponse = {
  id: id,
  ...validCreateUserDto,
};

export const invalidCreateUserDto: CreateUserDto = {
  email: 'NOT_VALID_example.email',
  password: '2short',
  name: 'test',
  ...validCreateUserDto
};
export const userElement = validCreatedUserResponse;
export const deletedUser = validCreatedUserResponse;

export const mockUserService = {
  create: jest.fn().mockResolvedValue(validCreatedUserResponse),
  findAll: jest.fn().mockResolvedValue([userElement]),
  findOne: jest.fn().mockResolvedValue(userElement),
  update: jest.fn().mockResolvedValue(null),
  remove: jest.fn().mockResolvedValue(null),
};

export const mockPrismaService = {
  user: {
    findUnique: jest.fn().mockResolvedValue(validCreatedUserResponse),
    findMany: jest.fn().mockResolvedValue([]),
    create: jest.fn().mockResolvedValue(validCreatedUserResponse),
    delete: jest.fn().mockResolvedValue(deletedUser),
  },
};
