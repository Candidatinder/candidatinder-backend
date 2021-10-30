import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParlamentaresUsuariosController } from './parlamentares-usuarios.controller';
import { ParlamentaresUsuarioEntity } from './parlamentares-usuarios.entity';
import { ParlamentaresUsuarioService } from './parlamentares-usuarios.service';

@Module({
  imports: [TypeOrmModule.forFeature([ParlamentaresUsuarioEntity])],
  controllers: [ParlamentaresUsuariosController],
  providers: [ParlamentaresUsuarioService],
  exports: [ParlamentaresUsuarioService],
})
export class ParlamentaresUsuariosModule {}
