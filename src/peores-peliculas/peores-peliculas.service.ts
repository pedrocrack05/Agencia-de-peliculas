import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PeoresPelicula } from './entities/peores-pelicula.entity';
import { CreatePeoresPeliculaDto } from './dto/create-peores-pelicula.dto';
import { Director } from 'src/directores/entities/directore.entity';

@Injectable()
export class PeoresPeliculasService {
  constructor(
    @InjectRepository(PeoresPelicula)
    private peliculaRepository: Repository<PeoresPelicula>,

    @InjectRepository(Director)  
    private directorRepository: Repository<Director>
  ) {}

  async create(createPeoresPeliculaDto: CreatePeoresPeliculaDto): Promise<PeoresPelicula> {
    const director = await this.directorRepository.findOneBy({ id: createPeoresPeliculaDto.directorId });
    
    if (!director) {
      throw new NotFoundException(`Director with ID ${createPeoresPeliculaDto.directorId} not found`);
    }

    // Crear la película
    const pelicula = this.peliculaRepository.create({
      ...createPeoresPeliculaDto,
      director: director,  // Aquí se asigna el director encontrado
    });

    return this.peliculaRepository.save(pelicula);
  }

  async findAll(): Promise<PeoresPelicula[]> {
    return this.peliculaRepository.find({ relations: ['director'] });
  }

  async findOne(id: number): Promise<PeoresPelicula> {
    const pelicula = await this.peliculaRepository.findOneBy({ id });
    if (!pelicula) {
      throw new NotFoundException(`Pelicula con ID ${id} no encontrada`);
    }
    return pelicula;
  }

  async update(id: number, updatePeoresPeliculaDto: CreatePeoresPeliculaDto): Promise<PeoresPelicula> {
    await this.peliculaRepository.update(id, updatePeoresPeliculaDto);
    const updatedPelicula = await this.peliculaRepository.findOneBy({ id });
    if (!updatedPelicula) {
      throw new NotFoundException(`Pelicula con ID ${id} no encontrada`);
    }
    return updatedPelicula;
  }

  async remove(id: number): Promise<void> {
    const result = await this.peliculaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Pelicula con ID ${id} no encontrada`);
    }
  }

  async findByDirector(directorId: number): Promise<PeoresPelicula[]>{
    return this.peliculaRepository.find({
      where: { director: { id: directorId}},
      relations: ['director']
    });
  }
}
