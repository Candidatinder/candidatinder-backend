import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { VotacaoParlamentarDto } from './dto/votacoes-parlamentares.dto';
import { VotacoesParlamentaresEntity } from './votacoes-parlamentares.entity';

@Injectable()
export class VotacoesParlamentaresService {
  constructor(
    @InjectRepository(VotacoesParlamentaresEntity)
    private readonly votacoesParlamentaresRepository: Repository<VotacoesParlamentaresEntity>,
  ) {}

  async findAll() {
    return await this.votacoesParlamentaresRepository.find();
  }

  async findOneOrFail(
    conditions: FindConditions<VotacoesParlamentaresEntity>,
    options?: FindOneOptions<VotacoesParlamentaresEntity>,
  ) {
    try {
      return await this.votacoesParlamentaresRepository.findOneOrFail(
        conditions,
        options,
      );
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: VotacaoParlamentarDto) {
    const votacaoParlamentar =
      this.votacoesParlamentaresRepository.create(data);
    return await this.votacoesParlamentaresRepository.save(votacaoParlamentar);
  }

  async update(id: string, data: VotacaoParlamentarDto) {
    const votacaoParlamentar = await this.findOneOrFail({ id });
    this.votacoesParlamentaresRepository.merge(votacaoParlamentar, data);
    return await this.votacoesParlamentaresRepository.save(votacaoParlamentar);
  }

  async destroy(id: string) {
    await this.votacoesParlamentaresRepository.findOneOrFail({ id });
    this.votacoesParlamentaresRepository.softDelete({ id });
  }
}
