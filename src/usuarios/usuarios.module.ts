import { UsuariosController } from './usuarios.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from './usuarios.model';
import { UsuariosService } from './usuarios.service';
import { Module } from '@nestjs/common';
@Module({
  imports: [SequelizeModule.forFeature([Usuario])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
