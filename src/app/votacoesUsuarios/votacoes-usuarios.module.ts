import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VotacoesUsuariosController } from './votacoes-usuarios.controller';
import { VotacoesUsuariosEntity } from './votacoes-usuarios.entity';
import { VotacoesUsuariosService } from './votacoes-usuarios.service';

@Module({
  imports: [TypeOrmModule.forFeature([VotacoesUsuariosEntity])],
  controllers: [VotacoesUsuariosController],
  providers: [VotacoesUsuariosService],
  exports: [VotacoesUsuariosService],
})
export class VotacoesUsuariosModule {}
