import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeoresPeliculasController } from './peores-peliculas.controller';
import { PeoresPeliculasService } from './peores-peliculas.service';
import { PeoresPelicula } from './entities/peores-pelicula.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PeoresPelicula])],
  controllers: [PeoresPeliculasController],
  providers: [PeoresPeliculasService],
})
export class PeoresPeliculasModule {}
