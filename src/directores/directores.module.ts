import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirectoresController } from './directores.controller';
import { DirectoresService } from './directores.service';
import { Director } from './entities/directore.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Director])],
  controllers: [DirectoresController],
  providers: [DirectoresService],
})
export class DirectoresModule {}
