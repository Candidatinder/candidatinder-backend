import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: 'candidatinder',
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
