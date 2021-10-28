import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { PartidoDto } from './dto/partido.dto';
import { PartidosEntity } from './partidos.entity';

@Injectable()
export class PartidosService {
  constructor(
    @InjectRepository(PartidosEntity)
    private readonly partidosRepository: Repository<PartidosEntity>,
  ) {}

  async findAll() {
    return await this.partidosRepository.find();
  }

  async findOneOrFail(
    conditions: FindConditions<PartidosEntity>,
    options?: FindOneOptions<PartidosEntity>,
  ) {
    try {
      return await this.partidosRepository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: PartidoDto) {
    const partido = this.partidosRepository.create(data);
    return await this.partidosRepository.save(partido);
  }

  async update(id: string, data: PartidoDto) {
    const partido = await this.findOneOrFail({ id });
    this.partidosRepository.merge(partido, data);
    return await this.partidosRepository.save(partido);
  }

  async destroy(id: string) {
    await this.partidosRepository.findOneOrFail({ id });
    this.partidosRepository.softDelete({ id });
  }
}
