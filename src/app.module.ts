import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PartidosController } from './partidos/partidos.controller';

@Module({
  imports: [],
  controllers: [AppController, PartidosController],
  providers: [AppService],
})
export class AppModule {}
