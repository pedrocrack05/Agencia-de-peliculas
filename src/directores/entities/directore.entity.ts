import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PeoresPelicula } from '../../peores-peliculas/entities/peores-pelicula.entity';

@Entity('directores')
export class Director {
  @PrimaryGeneratedColumn({ name: 'idDirector' })
  id: number;

  @Column()
  nombre: string;

  @Column({ name: 'fechaNacimiento', type: 'date' })
  fechaNacimiento: Date;

  @Column()
  nacionalidad: string;

  @Column()
  biografia: string;

  @OneToMany(() => PeoresPelicula, pelicula => pelicula.director)
  peliculas: PeoresPelicula[];
}
