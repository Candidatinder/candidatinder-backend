import { VotacoesParlamentaresService } from './votacoesParlamentares.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { VotacaoParlamentar } from './votacoesParlamentares.model';
import { AuthGuard } from '@nestjs/passport';

@Controller('votacoesParlamentares')
@UseGuards(AuthGuard('jwt'))
export class VotacoesParlamentaresController {
  constructor(
    private votacoesParlamentaresService: VotacoesParlamentaresService,
  ) {}

  @Get()
  async obterTodos(): Promise<VotacaoParlamentar[]> {
    return this.votacoesParlamentaresService.obterTodos();
  }
  @Get(':id')
  async obterUm(@Param() params): Promise<VotacaoParlamentar> {
    return this.votacoesParlamentaresService.obterUm(params.id);
  }
  @Post()
  async criar(@Body() usuario: VotacaoParlamentar) {
    this.votacoesParlamentaresService.criar(usuario);
  }
  @Put()
  async atualizar(
    @Body() usuario: VotacaoParlamentar,
  ): Promise<[number, VotacaoParlamentar[]]> {
    return this.votacoesParlamentaresService.alterar(usuario);
  }
  @Delete(':id')
  async apagar(@Param() params) {
    this.votacoesParlamentaresService.apagar(params.id);
  }
}
