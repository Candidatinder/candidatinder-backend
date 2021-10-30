import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParlamentaresController } from './parlamentares.controller';
import { ParlamentaresEntity } from './parlamentares.entity';
import { ParlamentaresService } from './parlamentares.service';

@Module({
  imports: [TypeOrmModule.forFeature([ParlamentaresEntity])],
  controllers: [ParlamentaresController],
  providers: [ParlamentaresService],
  exports: [ParlamentaresService],
})
export class ParlamentaresModule {}
