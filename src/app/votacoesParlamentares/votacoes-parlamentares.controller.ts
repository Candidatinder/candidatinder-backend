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
import { VotacaoParlamentarDto } from './dto/votacoes-parlamentares.dto';
import { VotacoesParlamentaresService } from './votacoes-parlamentares.service';

@Controller('api/v1/votacoesparlamentares')
@UseGuards(AuthGuard('jwt'))
export class VotacoesParlamentaresController {
  constructor(
    private readonly votacoesparlamentaresService: VotacoesParlamentaresService,
  ) {}

  @Get()
  async index() {
    return await this.votacoesparlamentaresService.findAll();
  }

  @Post()
  async store(@Body() body: VotacaoParlamentarDto) {
    return await this.votacoesparlamentaresService.store(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.votacoesparlamentaresService.findOneOrFail({ id });
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: VotacaoParlamentarDto,
  ) {
    return await this.votacoesparlamentaresService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.votacoesparlamentaresService.destroy(id);
  }
}
