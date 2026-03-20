import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prisma = app.get(PrismaService);
  app.getHttpAdapter().getInstance().set('trust proxy', true);

  app.setGlobalPrefix('v1');
  app.enableCors({
    origin: process.env.API_CORS_ORIGIN?.split(',').map((origin) => origin.trim()).filter(Boolean) ?? ['http://localhost:3000'],
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.useGlobalFilters(new HttpExceptionFilter());
  await prisma.enableShutdownHooks(app);

  const host = process.env.API_HOST ?? '0.0.0.0';
  const port = Number(process.env.API_PORT ?? 4000);
  const publicUrl = process.env.API_PUBLIC_URL ?? `http://localhost:${port}/v1`;
  await app.listen(port, host);
  console.log(`API listening on ${publicUrl}`);
}

bootstrap();
