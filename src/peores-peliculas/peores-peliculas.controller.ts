import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PeoresPeliculasService } from './peores-peliculas.service';
import { CreatePeoresPeliculaDto } from './dto/create-peores-pelicula.dto';
import { PeoresPelicula } from './entities/peores-pelicula.entity';

@Controller('peores-peliculas')
export class PeoresPeliculasController {
  constructor(private readonly peoresPeliculasService: PeoresPeliculasService) {}

  @Post()
  create(@Body() createPeoresPeliculaDto: CreatePeoresPeliculaDto): Promise<PeoresPelicula> {
    return this.peoresPeliculasService.create(createPeoresPeliculaDto);
  }

  @Get()
  findAll(): Promise<PeoresPelicula[]> {
    return this.peoresPeliculasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<PeoresPelicula> {
    return this.peoresPeliculasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatePeoresPeliculaDto: CreatePeoresPeliculaDto): Promise<PeoresPelicula> {
    return this.peoresPeliculasService.update(id, updatePeoresPeliculaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.peoresPeliculasService.remove(id);
  }

  @Get('director/:directorId')
  findByDirector(@Param('directorId') directorId: number): Promise<PeoresPelicula[]> {
    return this.peoresPeliculasService.findByDirector(directorId);
  }
}

