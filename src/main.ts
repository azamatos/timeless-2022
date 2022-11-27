import { NestFactory } from '@nestjs/core';

// swagger
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// project imports
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('REST API with JWT token')
    .setDescription('Rest API documentation')
    .setVersion('1.0.0')
    .addBearerAuth(
      {
        description: `Please enter the token`,
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header',
      },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/swagger', app, document);

  await app.listen(3000);
}
bootstrap();
