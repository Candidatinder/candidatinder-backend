import { CandidatosUsuariosService } from './candidatosUsuarios.service';
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
import { CandidatosUsuarios } from './candidatosUsuarios.model';
import { AuthGuard } from '@nestjs/passport';

@Controller('candidatosUsuarios')
@UseGuards(AuthGuard('jwt'))
export class CandidatosUsuariosController {
  constructor(private candidatosUsuariosService: CandidatosUsuariosService) {}

  @Get()
  async obterTodos(): Promise<CandidatosUsuarios[]> {
    return this.candidatosUsuariosService.obterTodos();
  }
  @Get(':id')
  async obterUm(@Param() params): Promise<CandidatosUsuarios> {
    return this.candidatosUsuariosService.obterUm(params.id);
  }
  @Post()
  async criar(@Body() candidatosUsuarios: CandidatosUsuarios) {
    this.candidatosUsuariosService.criar(candidatosUsuarios);
  }
  @Put()
  async atualizar(
    @Body() candidatosUsuarios: CandidatosUsuarios,
  ): Promise<[number, CandidatosUsuarios[]]> {
    return this.candidatosUsuariosService.alterar(candidatosUsuarios);
  }
  @Delete(':id')
  async apagar(@Param() params) {
    this.candidatosUsuariosService.apagar(params.id);
  }
}
