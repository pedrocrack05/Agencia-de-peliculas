import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Director } from 'src/directores/entities/directore.entity';

@Entity('peoresPeliculas')
export class PeoresPelicula {
  @PrimaryGeneratedColumn({ name: 'idPelicula' })
  id: number;

  @Column()
  titulo: string;

  @Column({ name: 'anoLanzamiento' })
  anoLanzamiento: number;

  @Column()
  genero: string;

  @Column()
  descripcion: string;

  @ManyToOne(() => Director, director => director.peliculas)
  director: Director;
}
