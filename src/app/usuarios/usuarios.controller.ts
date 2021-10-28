import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuariosService } from './usuarios.service';

@Controller('api/v1/usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async index() {
    return await this.usuariosService.findAll();
  }

  @Post()
  async store(@Body() body: CreateUsuarioDto) {
    return await this.usuariosService.store(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.usuariosService.findOneOrFail({ id });
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateUsuarioDto,
  ) {
    return await this.usuariosService.update(id, body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.usuariosService.destroy(id);
  }
}
