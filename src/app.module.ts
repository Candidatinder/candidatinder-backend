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
    SequelizeModule.forFeature([Partido]),
  ],
  controllers: [AppController, PartidosController],
  providers: [AppService, PartidosService],
})
export class AppModule {}
