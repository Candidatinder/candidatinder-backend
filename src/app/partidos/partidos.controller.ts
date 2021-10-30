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
@UseGuards(AuthGuard('jwt'))
export class PartidosController {
  constructor(private readonly partidosService: PartidosService) {}

  @Get()
  async index() {
    return await this.partidosService.findAll();
  }

  @Post()
  async store(@Body() body: PartidoDto) {
    return await this.partidosService.store(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.partidosService.findOneOrFail({ id });
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: PartidoDto,
  ) {
    return await this.partidosService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.partidosService.destroy(id);
  }
}
