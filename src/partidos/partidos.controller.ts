import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('partidos')
export class PartidosController {
  @Get()
  obterTodos(): string {
    return 'retorna todos os partidos';
  }
  @Get(':id')
  obterUm(@Param() params): string {
    return `Retorna os dados do partido ${params.id}`;
  }
  @Post()
  criar(@Body() partido): string {
    return 'Partido criado';
  }
  @Put()
  atualizar(@Body() partido): string {
    return 'Partido atualizado';
  }
  @Delete(':id')
  apagar(@Param() params): string {
    return `apaga o partido ${params.id}`;
  }
}
