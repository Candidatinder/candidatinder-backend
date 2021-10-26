import { UsuariosService } from './usuarios.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Usuario } from './usuarios.model';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Get()
  async obterTodos(): Promise<Usuario[]> {
    return this.usuariosService.obterTodos();
  }
  @Get(':id')
  async obterUm(@Param() params): Promise<Usuario> {
    return this.usuariosService.obterUm(params.id);
  }
  @Post()
  async criar(@Body() usuario: Usuario) {
    this.usuariosService.criar(usuario);
  }
  @Put()
  async atualizar(@Body() usuario: Usuario): Promise<[number, Usuario[]]> {
    return this.usuariosService.alterar(usuario);
  }
  @Delete(':id')
  async apagar(@Param() params) {
    this.usuariosService.apagar(params.id);
  }
}
