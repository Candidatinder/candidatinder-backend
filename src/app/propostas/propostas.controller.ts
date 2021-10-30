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
import { PropostaDto } from './dto/proposta.dto';
import { PropostasService } from './propostas.service';

@Controller('api/v1/propostas')
@UseGuards(AuthGuard('jwt'))
export class PropostasController {
  constructor(private readonly propostasService: PropostasService) {}

  @Get()
  async index() {
    return await this.propostasService.findAll();
  }

  @Post()
  async store(@Body() body: PropostaDto) {
    return await this.propostasService.store(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.propostasService.findOneOrFail({ id });
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: PropostaDto,
  ) {
    return await this.propostasService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.propostasService.destroy(id);
  }
}
