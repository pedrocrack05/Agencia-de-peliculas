import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreatePeoresPeliculaDto {
  @IsString()
  @IsNotEmpty()
  readonly titulo: string;

  @IsInt()
  readonly anoLanzamiento: number;

  @IsString()
  @IsNotEmpty()
  readonly genero: string;

  @IsString()
  readonly descripcion: string;

  // Considera añadir un campo para `director_id` si lo necesitas para crear una película.
  @IsInt()
  readonly directorId: number;
}
