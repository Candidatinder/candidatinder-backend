import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VotacoesParlamentaresController } from './votacoes-parlamentares.controller';
import { VotacoesParlamentaresEntity } from './votacoes-parlamentares.entity';
import { VotacoesParlamentaresService } from './votacoes-parlamentares.service';

@Module({
  imports: [TypeOrmModule.forFeature([VotacoesParlamentaresEntity])],
  controllers: [VotacoesParlamentaresController],
  providers: [VotacoesParlamentaresService],
  exports: [VotacoesParlamentaresService],
})
export class VotacoesParlamentaresModule {}
