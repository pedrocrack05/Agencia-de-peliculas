import { IsString, IsDate, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateDirectorDto {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsNotEmpty()
  @IsDateString()
  readonly fechaNacimiento: string;

  @IsString()
  @IsNotEmpty()
  readonly nacionalidad: string;

  @IsString()
  readonly biografia: string;
}

