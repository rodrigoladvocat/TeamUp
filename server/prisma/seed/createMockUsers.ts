import { User } from '@prisma/client';

export const users: User[] = [
    {
        id: 1,
        name: "Maria Beatriz dos Santos",
        email: "MariaB.TU@gmail.com",
        password: "12345678",
        imgUrl: "https://s3-alpha-sig.figma.com/img/ddaf/d214/680dadd2835dc69a669d8ce023421b1c?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WXu-EW~Uae8rPDAaUK19ZVVRz823xraFRDASL-uT99M92CrFBQIIapC3f24rNXcwixMUxInM-X-6Tr500zLi8TRTLkCUv83H9AWfs1xx5GghBPCA4cni9JapTMGo5u131YExoNE5FXX~nae-QYqQzHo6cEunv7KoRp4FQLoQjbCAWtuvRHGJ3CclJEhdB4XXO~IWtY6Z2Mb4dVIvhjhNX5zeu337ZIhOzafWz1yt25FGaodtbGUnhSE7i7FNy4rIrIhAoal07CsE2IBmkBv0RkDclqQRY5A5DpRaa69ZlvHq1Da2mi-4wWx~cZwcPlsBJB-eOSUY1p7BTHZuRWsNHQ__",
        isManager: false,
        role: "Designer de produto",
        age: 30,
        telephone: "1234567890",
        cpf: "12345678901",
        street: "Rua Inexistente",
        number: "123",
        city: "Recife",
        state: "PE",
        zipCode: "12345-123",
        bio: 'Apaixonada por criar interfaces intuitivas e esteticamente agradáveis, com foco na experiência do usuário.',
        admissionDate: new Date('2023-07-01')
    },
    {
        id: 2,
        name: "José dos Santos Lima",
        email: "JoseSL.TU@gmail.com",
        password: "12345678",
        imgUrl: "https://s3-alpha-sig.figma.com/img/f636/9a8c/c4ef6096356ce87103545b2eb053f139?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Se9Y3GBQQWdAckFhEjKL5O7a1lGLIiUdwwbiMhCwz7feHnphP~UfKYbhSHfeAdknUhzaKVE~Pzm0lJgvX9dFXRy3BrEuCWDoXp51YsmYZ-IQkM2NC8BFQwqwHDX6uOMu4bpi5aqnOA2cHNXOxejmEgj-igIe68nf-187OgsvpbVc2LvpfB1CHmar0-mlHHGnUZyDppgtdy5Kyv-4HjNDKd1hi7eWjiTHtFPXR9yO3ujOr7MpHGAvyif3BCNFor-zY~h6N8EKnWh6VLy08fBLY1KqY7k6W2rsvIZNmaXx17UCBPl4vYWWz~UQ1Ltwf4LDfj0ACntPsT7tkMT~14~D3A__",
        isManager: false,
        role: "Designer de produto",
        age: 30,
        telephone: "1234567890",
        cpf: "12345678902",
        street: "Rua Inexistente",
        number: "123",
        city: "Recife",
        state: "PE",
        zipCode: "12345-123",
        bio: 'Designer de produto com 10 anos de experiência. Sou apaixonado por criar interfaces intuitivas e atraentes que facilitem a vida das pessoas.',
        admissionDate: new Date('2023-07-01')
    },
    {
        id: 3,
        name: "Pedro Henrique Batista",
        email: "PedroHB.TU@gmail.com",
        password: "12345678",
        imgUrl: "https://s3-alpha-sig.figma.com/img/f89d/b836/41bb906adb1604f260e8fe4b09ed6652?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AZw7O-fSmYh-gwfmri1Ok61SmCtpqF48sxUEPVYUSmX~xMKjoNPzHcihJL9wtYk8Qkn1hgNf1kp9mzspsce7PTbaoJ20YXMw2U3O06eB2x~h8j10pwq3i0-LhNaIl0YLDDr2iEhtmdWAAUcsVunUtcReCTtqqi5aSYEVITepej~LUuuBQFhcVB8C0KA2e6sN-aTLszac0rw3unrjMn32OU3OPxHJD8ZS3OL17tGIZ8aIuj6h0ipLy6opdALmV~z2~RfoB438kRk7EqXZy7le4V9qcoXARJlSc4Qv8o5cVBJzbTbecoRSaxeTo1P3~9tAH~GWlvO8letenO6q~T9Agg__",
        isManager: false,
        role: "Desenvolvedor Fullstack",
        age: 30,
        telephone: "1234567890",
        cpf: "12345678903",
        street: "Rua Inexistente",
        number: "123",
        city: "Recife",
        state: "PE",
        zipCode: "12345-123",
        bio: 'Desenvolvedor Fullstack experiente e apaixonado por tecnologia. Adoro criar soluções inovadoras e eficientes que tragam resultados para os negócios.',
        admissionDate: new Date('2023-07-01')
    },
    {
        id: 4,
        name: "Joana Maria Ferreira",
        email: "JoanaMF.TU@gmail.com",
        password: "12345678",
        imgUrl: "https://s3-alpha-sig.figma.com/img/770e/2f07/333357ca47ffeb635ae17332d2a5fc4b?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kKG4P8rhA9RSHtdUhIHE1iVkQbo3VOt3kfDWjdUkw8oydlW-1q068OK1m2nFpmpZY05PjUjQ2dAxPlM1BiapKKfQqjTCDMDtrR7Yv4LdpqLDzq~eLUTpKXGynFeYXBvypvQvJEp2425EAoKg~aColwFm6g8JffVtnXaq2C2EClATdRALbRffkvNEE8frgHLwKUkEUsM1rrI63La25Nv6G9NekeYK5sJgXh4RlFoaYxm4kFZ28b-D0doKDsPUEmneN~dVnz-0Meyn0QO1OTGBWWnloYyk2rQVic2C4jzEx1met90KjWsj836V9bJkpbYEaGr0GgD8mqEs8wEhMeSNOw__",
        isManager: false,
        role: "Designer de produto",
        age: 30,
        telephone: "1234567890",
        cpf: "12345678904",
        street: "Rua Inexistente",
        number: "123",
        city: "Recife",
        state: "PE",
        zipCode: "12345-123",
        bio: 'Designer de produto criativa e inovadora com foco em experiência do usuário. Adoro trabalhar com equipes multidisciplinares para criar produtos incríveis.',
        admissionDate: new Date('2023-07-01')
    },
    {
        id: 5,
        name: "Pedro Almeida",
        email: "PedroA.TU@gmail.com",
        password: "12345678",
        imgUrl: "https://s3-alpha-sig.figma.com/img/c77b/5367/3ddf1e131c74d76bfc7f3e4cefdc4331?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QGFh5uYDzL8NOgCz3G3V9LI0lpMkoXUOKD7fwXjhmTjIZJIZNqdJV9GlIwGRyMB6VU05nIk4VNb1vEYUR44oetDaFdc45PTEPwAyjcrB63N~AX62NQKVWDC0TtKPnsir8getZYIZT5qgTm-ZaIT39T4I74ucq2174pEOEXc5oxSh8mL4bChYPoaTiibaY5Ts6herFdgyWCUoZeaexRvSQnsEn5rth4ypuucnZNEIN6vuQm4JsrBu-omStjgO3~FJV67cFmPsG5CxCWv1ijLQv2ub16zBbXJwEFB6wfPjE4lMqPUnQrEArB5~XSdQRAKJdAuYM3YP6lYD2Z8nMAA99Q__",
        isManager: false,
        role: "Designer de produto",
        age: 30,
        telephone: "1234567890",
        cpf: "12345678905",
        street: "Rua Inexistente",
        number: "123",
        city: "Recife",
        state: "PE",
        zipCode: "12345-123",
        bio: 'Sou Pedro Almeida, Designer de Produtos na Visagio, com mais de cinco anos de experiência. Crio soluções intuitivas e atraentes, liderando projetos do início ao fim. Sou apaixonado por novas tecnologias e tendências de design.',
        admissionDate: new Date('2023-07-01')
    },
    {
        id: 6,
        name: "Camila Pantaleão",
        email: "CamilaP.TU@gmail.com",
        password: "12345678",
        imgUrl: "https://s3-alpha-sig.figma.com/img/1e7b/6c22/cca82997814c60a83a9e7f1534f7b2fa?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mFdelLviSU0lKer1kGkiRRaQCQ31R6-btWIJpT51NeZshhGILN3KxOfL2E3PBIEAVeu7uFhDg8NUIbUASQWaCIUzoBBHtPFnBjBKphmwn5k9YONsaeiz3Tk6Oax-HdYbIP~Bd33GgsZVgoUVPFdnz3YwLpZqZUJ2BFEKtPpt3ONwysYw4fos31ns2sAJxs00Fw8a6hWmRY0OmzlTpJRPyy5tXCpQkq6pj-0OnscPhDsCOhDGzcpj~6a8M1u2LcTs0ocVbe2oYYvKOs1G9lpLsZBGHwPgJxnSlwx3avOnvwu~fMMQOXvVHViB45aGJ4KKLoFyfb3WfTTpy7BY8vCjkw__",
        isManager: false,
        role: "Negócios",
        age: 30,
        telephone: "1234567890",
        cpf: "12345678906",
        street: "Rua Inexistente",
        number: "123",
        city: "Recife",
        state: "PE",
        zipCode: "12345-123",
        bio: 'Especialista em negócios com foco em estratégia e crescimento. Adoro ajudar empresas a alcançar seus objetivos e alcançar o sucesso.',
        admissionDate: new Date('2023-07-01')
    },
    {
        id: 7,
        name: "Henrique Diaz",
        email: "manager@gmail.com",
        password: "12345678",
        imgUrl: "https://s3-alpha-sig.figma.com/img/f10f/f2ba/190f25a6e4ed4e3bcf8ef86c9f874d55?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V1YCSMZxMiVYx11nM00lHp1huxAxn6BjCLEU2CC6-g2wQ4yBi3j9KINtOCuC5VvI7IKd8w30ECOFXReZDCYLwyeCTmDj2k-9754A~D38690399ahSoFQQCT5q7dtvsbF5rORbUvblhyBNzGeRemn36xRspeWvHq02pIgJyguzjQVvRO2PRkTO-rqjQdggKw4qnviyeq~nbHtTcaB0HvN9Oko4e3ET4O8Nd6qTni~6EfQ~XnYeBAfn4DTq7ZHI0RwlzoYBb-SEuHarq9ApRaNmGX2VkkGJ4Qdlq3ZoProYvu2HFMmEoZ~QDyasZcdcJydf9Vla01CUNmqE5hIa~jrqA__",
        isManager: true,
        role: "Sócio",
        age: 30,
        telephone: "1234567890",
        cpf: "12345678907",
        street: "Rua Inexistente",
        number: "123",
        city: "Recife",
        state: "PE",
        zipCode: "12345-123",
        bio: 'Adoro construir times de alta performance e criar produtos inovadores que impactam o mundo.',
        admissionDate: new Date('2023-07-01')
    },
    {
        id: 8,
        name: "Dev de Teste",
        email: "dev@gmail.com",
        password: "12345678",
        imgUrl: "https://avatars.githubusercontent.com/u/51039620?s…00&u=d7e9365da48a5874e02bd4bb68a7223e17379df7&v=4",
        isManager: false,
        role: 'Dev',
        age: 30,
        telephone: "1234567890",
        cpf: "12345678908",
        street: "Rua Inexistente",
        number: "123",
        city: "Recife",
        state: "PE",
        zipCode: "12345-123",
        bio: 'Quero garantir que os produtos sejam confiáveis ​​e atendam às expectativas dos usuários.',
        admissionDate: new Date('2023-07-01')
    },
    // Adicione mais usuários conforme necessário
]
