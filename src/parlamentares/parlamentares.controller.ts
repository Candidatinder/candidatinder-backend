import { ParlamentaresService } from './parlamentares.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Parlamentares } from './parlamentares.model';

@Controller('parlamentares')
export class ParlamentaresController {
  constructor(private parlamentaresService: ParlamentaresService) {}

  @Get()
  async obterTodos(): Promise<Parlamentares[]> {
    return this.parlamentaresService.obterTodos();
  }
  @Get(':id')
  async obterUm(@Param() params): Promise<Parlamentares> {
    return this.parlamentaresService.obterUm(params.id);
  }
  @Post()
  async criar(@Body() parlamentares: Parlamentares) {
    this.parlamentaresService.criar(parlamentares);
  }
  @Put()
  async atualizar(
    @Body() parlamentares: Parlamentares,
  ): Promise<[number, Parlamentares[]]> {
    return this.parlamentaresService.alterar(parlamentares);
  }
  @Delete(':id')
  async apagar(@Param() params) {
    this.parlamentaresService.apagar(params.id);
  }
}
