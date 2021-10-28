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
import { PartidoDto } from './dto/partido.dto';
import { PartidosService } from './partidos.service';

@Controller('api/v1/partidos')
export class PartidosController {
  constructor(private readonly partidosService: PartidosService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async index() {
    return await this.partidosService.findAll();
  }

  @Post()
  async store(@Body() body: PartidoDto) {
    return await this.partidosService.store(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.partidosService.findOneOrFail({ id });
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: PartidoDto,
  ) {
    return await this.partidosService.update(id, body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.partidosService.destroy(id);
  }
}
