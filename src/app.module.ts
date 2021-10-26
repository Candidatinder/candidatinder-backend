import { VotacoesParlamentaresService } from './votacoesParlamentares/votacoesParlamentares.service';
import { VotacoesParlamentaresController } from './votacoesParlamentares/votacoeaParlamentares.controller';
import { UsuariosService } from './usuarios/usuarios.service';
import { UsuariosController } from './usuarios/usuarios.controller';
import { ParlamentaresService } from './parlamentares/parlamentares.service';
import { ParlamentaresController } from './parlamentares/parlamentares.controller';
import { Parlamentares } from './parlamentares/parlamentares.model';
import { Proposta } from './propostas/propostas.model';
import { PropostasService } from './propostas/propostas.service';
import { PropostasController } from './propostas/propostas.controller';
import { PartidosService } from './partidos/partidos.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PartidosController } from './partidos/partidos.controller';
import { Partido } from './partidos/partidos.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Usuario } from './usuarios/usuarios.model';
import { VotacaoParlamentar } from './votacoesParlamentares/votacoesParlamentares.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: 'candidatinder',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([
      Partido,
      Proposta,
      Parlamentares,
      Usuario,
      VotacaoParlamentar,
    ]),
  ],
  controllers: [
    AppController,
    PartidosController,
    PropostasController,
    ParlamentaresController,
    UsuariosController,
    VotacoesParlamentaresController,
  ],
  providers: [
    AppService,
    PartidosService,
    PropostasService,
    ParlamentaresService,
    UsuariosService,
    VotacoesParlamentaresService,
  ],
})
export class AppModule {}
