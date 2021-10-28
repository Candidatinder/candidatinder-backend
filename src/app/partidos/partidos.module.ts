import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartidosController } from './partidos.controller';
import { PartidosEntity } from './partidos.entity';
import { PartidosService } from './partidos.service';

@Module({
  imports: [TypeOrmModule.forFeature([PartidosEntity])],
  controllers: [PartidosController],
  providers: [PartidosService],
  exports: [PartidosService],
})
export class PartidosModule {}
