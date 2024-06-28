import { CreateUserDto } from '../dto/create-user.dto';

export const id = '1';
export const invalidId = 'invalid';

export const validCreateUserDto: CreateUserDto = {
  age: 18,
  email: 'fulano@gmail.com',
  password: '12345678',
  imgUrl: 'TODO - put default image here',
  isManager: false,
  name: 'fulano',
  role: 'Sócio',
  telephone: '91234-1234',
  cpf: '123123123-12',
  street: 'Rua Inexistente',
  city: 'Recife',
  state: 'Brasil',
  number: '123',
  zipCode: '123456-789',
  bio: 'Sou João Silva, Designer de Produtos na Visagio, com mais de cinco anos de experiência. Crio soluções intuitivas e atraentes, liderando projetos do início ao fim. Sou apaixonado por novas tecnologias e tendências de design.',
  admissionDate: new Date('2023-07-01'),
};

export const validCreatedUserResponse = {
  id: id,
  ...validCreateUserDto,
};

export const invalidCreateUserDto: CreateUserDto = {
  email: 'NOT_VALID_example.email',
  password: '2short',
  name: 'test',
  ...validCreateUserDto,
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
