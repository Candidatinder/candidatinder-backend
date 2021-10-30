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
import { ParlamentarDto } from './dto/parlamentares.dto';
import { ParlamentaresService } from './parlamentares.service';

@Controller('api/v1/parlamentares')
@UseGuards(AuthGuard('jwt'))
export class ParlamentaresController {
  constructor(private readonly parlamentaresService: ParlamentaresService) {}

  @Get()
  async index() {
    return await this.parlamentaresService.findAll();
  }

  @Post()
  async store(@Body() body: ParlamentarDto) {
    return await this.parlamentaresService.store(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.parlamentaresService.findOneOrFail({ id });
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: ParlamentarDto,
  ) {
    return await this.parlamentaresService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.parlamentaresService.destroy(id);
  }
}
