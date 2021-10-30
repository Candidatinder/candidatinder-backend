import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { ParlamentaresUsuarioDto } from './dto/parlamentares-usuarios.dto';
import { ParlamentaresUsuarioEntity } from './parlamentares-usuarios.entity';

@Injectable()
export class ParlamentaresUsuarioService {
  constructor(
    @InjectRepository(ParlamentaresUsuarioEntity)
    private readonly parlamentaresUsuarioRepository: Repository<ParlamentaresUsuarioEntity>,
  ) {}

  async findAll() {
    return await this.parlamentaresUsuarioRepository.find();
  }

  async findOneOrFail(
    conditions: FindConditions<ParlamentaresUsuarioEntity>,
    options?: FindOneOptions<ParlamentaresUsuarioEntity>,
  ) {
    try {
      return await this.parlamentaresUsuarioRepository.findOneOrFail(
        conditions,
        options,
      );
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: ParlamentaresUsuarioDto) {
    const parlamentarUsuario = this.parlamentaresUsuarioRepository.create(data);
    return await this.parlamentaresUsuarioRepository.save(parlamentarUsuario);
  }

  async update(id: string, data: ParlamentaresUsuarioDto) {
    const parlamentarUsuario = await this.findOneOrFail({ id });
    this.parlamentaresUsuarioRepository.merge(parlamentarUsuario, data);
    return await this.parlamentaresUsuarioRepository.save(parlamentarUsuario);
  }

  async destroy(id: string) {
    await this.parlamentaresUsuarioRepository.findOneOrFail({ id });
    this.parlamentaresUsuarioRepository.softDelete({ id });
  }
}
