import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('TeamUp API')
    .setDescription('The TeamUp API description')
    .setVersion('1.0')
    .addGlobalParameters({
      in: 'header',
      required: false,
      name: 'jwt',
      description: "User login token here",
      example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInVzZXJuYW1lIjoiRnVsYW5vIGRhIFNpbHZhIiwiaWF0IjoxNzE5MDQ1NTY2fQ.gGN0lIciMwnidczEWDukW_S9yqbc0uzFZjxLOtHX3Us"
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
