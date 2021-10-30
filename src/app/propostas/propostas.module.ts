import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropostasController } from './propostas.controller';
import { PropostasEntity } from './propostas.entity';
import { PropostasService } from './propostas.service';

@Module({
  imports: [TypeOrmModule.forFeature([PropostasEntity])],
  controllers: [PropostasController],
  providers: [PropostasService],
  exports: [PropostasService],
})
export class PropostasModule {}
