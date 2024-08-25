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

  @IsInt()
  readonly directorId: number;
}
