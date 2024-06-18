import { User } from "@prisma/client";

export const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123",
    imgUrl: "https://example.com/john.jpg",
    isManager: false,
    role: "Developer",
    age: 30,
    telephone: "1234567890",
    cpf: "123.456.789-00",
    street: "Main St",
    number: "123",
    city: "New York",
    state: "NY",
    zipCode: "10001"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "password123",
    imgUrl: "https://example.com/jane.jpg",
    isManager: true,
    role: "Manager",
    age: 35,
    telephone: "0987654321",
    cpf: "987.654.321-00",
    street: "Broadway",
    number: "456",
    city: "New York",
    state: "NY",
    zipCode: "10002"
  }
  // Adicione mais usuários conforme necessário
];
