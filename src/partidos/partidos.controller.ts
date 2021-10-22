import { PartidosService } from './partidos.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Partido } from './partidos.model';

@Controller('partidos')
export class PartidosController {
  constructor(private partidosService: PartidosService) {}

  @Get()
  async obterTodos(): Promise<Partido[]> {
    return this.partidosService.obterTodos();
  }
  @Get(':id')
  async obterUm(@Param() params): Promise<Partido> {
    return this.partidosService.obterUm(params.id);
  }
  @Post()
  async criar(@Body() partido: Partido) {
    this.partidosService.criar(partido);
  }
  @Put()
  async atualizar(@Body() partido: Partido): Promise<[number, Partido[]]> {
    return this.partidosService.alterar(partido);
  }
  @Delete(':id')
  async apagar(@Param() params) {
    this.partidosService.apagar(params.id);
  }
}
