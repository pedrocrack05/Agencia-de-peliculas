import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Director } from './entities/directore.entity';
import { CreateDirectorDto } from './dto/create-directore.dto';

@Injectable()
export class DirectoresService {
  constructor(
    @InjectRepository(Director)
    private directorRepository: Repository<Director>,
  ) {}

  async create(createDirectorDto: CreateDirectorDto): Promise<Director> {
    const director = this.directorRepository.create(createDirectorDto);
    return this.directorRepository.save(director);
  }

  async findAll(): Promise<Director[]> {
    return this.directorRepository.find({} );
  }

  async findOne(id: number): Promise<Director> {
    const director = await this.directorRepository.findOneBy({ id });
    if (!director) {
      throw new NotFoundException(`Director con ID ${id} no encontrado`);
    }
    return director;
  }

  async update(id: number, updateDirectorDto: CreateDirectorDto): Promise<Director> {
    await this.directorRepository.update(id, updateDirectorDto);
    const updatedDirector = await this.directorRepository.findOneBy({ id });
    if (!updatedDirector) {
      throw new NotFoundException(`Director con ID ${id} no encontrado`);
    }
    return updatedDirector;
  }

  async remove(id: number): Promise<void> {
    const result = await this.directorRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Director con ID ${id} no encontrado`);
    }
  }
}
