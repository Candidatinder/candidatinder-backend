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
    SequelizeModule.forFeature([Partido, Proposta, Parlamentares]),
  ],
  controllers: [
    AppController,
    PartidosController,
    PropostasController,
    ParlamentaresController,
  ],
  providers: [
    AppService,
    PartidosService,
    PropostasService,
    ParlamentaresService,
  ],
})
export class AppModule {}
