import { PropostasService } from './propostas.service';
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
import { Proposta } from './propostas.model';
import { AuthGuard } from '@nestjs/passport';

@Controller('propostas')
@UseGuards(AuthGuard('jwt'))
export class PropostasController {
  constructor(private propostasService: PropostasService) {}

  @Get()
  async obterTodos(): Promise<Proposta[]> {
    return this.propostasService.obterTodos();
  }
  @Get(':id')
  async obterUm(@Param() params): Promise<Proposta> {
    return this.propostasService.obterUm(params.id);
  }
  @Post()
  async criar(@Body() proposta: Proposta) {
    this.propostasService.criar(proposta);
  }
  @Put()
  async atualizar(@Body() proposta: Proposta): Promise<[number, Proposta[]]> {
    return this.propostasService.alterar(proposta);
  }
  @Delete(':id')
  async apagar(@Param() params) {
    this.propostasService.apagar(params.id);
  }
}
