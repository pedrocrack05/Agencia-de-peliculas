import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DirectoresModule } from './directores/directores.module';
import { PeoresPeliculasModule } from './peores-peliculas/peores-peliculas.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ ConfigModule.forRoot({ isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_URL,
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      
    }),
    DirectoresModule,PeoresPeliculasModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
