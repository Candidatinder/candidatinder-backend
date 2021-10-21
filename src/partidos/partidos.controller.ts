import { Controller, Get } from '@nestjs/common';

@Controller('partidos')
export class PartidosController {
  @Get()
  obterTodos(): string {
    return 'retorna todos os partidos';
  }
}
