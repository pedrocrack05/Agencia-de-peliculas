import { PartialType } from '@nestjs/mapped-types';
import { CreateDirectorDto } from './create-directore.dto';

export class UpdateDirectoreDto extends PartialType(CreateDirectorDto) {}
