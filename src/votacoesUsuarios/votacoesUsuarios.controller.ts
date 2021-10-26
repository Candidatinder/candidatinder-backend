import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VotacoesUsuariosService } from './votacoesUsuarios.service';
import { VotacaoUsuario } from './votacoesUsuarios.model';

@Controller('votacoesUsuarios')
export class VotacoesUsuariosController {
  constructor(private votacoesUsuariosService: VotacoesUsuariosService) {}

  @Get()
  async obterTodos(): Promise<VotacaoUsuario[]> {
    return this.votacoesUsuariosService.obterTodos();
  }
  @Get(':id')
  async obterUm(@Param() params): Promise<VotacaoUsuario> {
    return this.votacoesUsuariosService.obterUm(params.id);
  }
  @Post()
  async criar(@Body() usuario: VotacaoUsuario) {
    this.votacoesUsuariosService.criar(usuario);
  }
  @Put()
  async atualizar(
    @Body() usuario: VotacaoUsuario,
  ): Promise<[number, VotacaoUsuario[]]> {
    return this.votacoesUsuariosService.alterar(usuario);
  }
  @Delete(':id')
  async apagar(@Param() params) {
    this.votacoesUsuariosService.apagar(params.id);
  }
}
