import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { ParlamentarDto } from './dto/parlamentares.dto';
import { ParlamentaresEntity } from './parlamentares.entity';

@Injectable()
export class ParlamentaresService {
  constructor(
    @InjectRepository(ParlamentaresEntity)
    private readonly parlamentaresRepository: Repository<ParlamentaresEntity>,
  ) {}

  async findAll() {
    return await this.parlamentaresRepository.find();
  }

  async findOneOrFail(
    conditions: FindConditions<ParlamentaresEntity>,
    options?: FindOneOptions<ParlamentaresEntity>,
  ) {
    try {
      return await this.parlamentaresRepository.findOneOrFail(
        conditions,
        options,
      );
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: ParlamentarDto) {
    const parlamentar = this.parlamentaresRepository.create(data);
    return await this.parlamentaresRepository.save(parlamentar);
  }

  async update(id: string, data: ParlamentarDto) {
    const parlamentar = await this.parlamentaresRepository.findOneOrFail({
      id,
    });
    this.parlamentaresRepository.merge(parlamentar, data);
    return await this.parlamentaresRepository.save(parlamentar);
  }

  async destroy(id: string) {
    await this.parlamentaresRepository.findOneOrFail({ id });
    this.parlamentaresRepository.softDelete({ id });
  }
}
