/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {NestFactory} from '@nestjs/core';

import {AppModule} from './app/app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api/v1';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors({
    origin: ['http://localhost:4200', 'https://body-data-9f0aa4c2601f.herokuapp.com'],
  });
  const options = new DocumentBuilder()
    .setTitle('body-data')
    .setDescription('CRUD per body-data')
    .setVersion('1.0')
    .addTag('body-data')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
