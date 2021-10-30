import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { PropostaDto } from './dto/proposta.dto';
import { PropostasEntity } from './propostas.entity';

@Injectable()
export class PropostasService {
  constructor(
    @InjectRepository(PropostasEntity)
    private readonly propostasRepository: Repository<PropostasEntity>,
  ) {}

  async findAll() {
    return await this.propostasRepository.find();
  }

  async findOneOrFail(
    conditions: FindConditions<PropostasEntity>,
    options?: FindOneOptions<PropostasEntity>,
  ) {
    try {
      return await this.propostasRepository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: PropostaDto) {
    const proposta = this.propostasRepository.create(data);
    return await this.propostasRepository.save(proposta);
  }

  async update(id: string, data: PropostaDto) {
    const proposta = await this.findOneOrFail({ id });
    this.propostasRepository.merge(proposta, data);
    return await this.propostasRepository.save(proposta);
  }

  async destroy(id: string) {
    await this.propostasRepository.findOneOrFail({ id });
    this.propostasRepository.softDelete({ id });
  }
}
