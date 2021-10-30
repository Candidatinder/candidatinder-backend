import { VotacoesParlamentaresModule } from './app/votacoesParlamentares/votacoes-parlamentares.module';
import { ParlamentaresModule } from './app/parlamentares/parlamentares.module';
import { PropostasModule } from './app/propostas/propostas.module';
import { PartidosModule } from './app/partidos/partidos.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsuariosModule } from './app/usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true,
    } as TypeOrmModuleOptions),
    UsuariosModule,
    AuthModule,
    PartidosModule,
    PropostasModule,
    ParlamentaresModule,
    VotacoesParlamentaresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
