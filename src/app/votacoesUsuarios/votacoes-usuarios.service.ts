import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { VotacaoUsuarioDto } from './dto/votacoes-usuarios.dto';
import { VotacoesUsuariosEntity } from './votacoes-usuarios.entity';

@Injectable()
export class VotacoesUsuariosService {
  constructor(
    @InjectRepository(VotacoesUsuariosEntity)
    private readonly votacoesUsuariosRepository: Repository<VotacoesUsuariosEntity>,
  ) {}

  async findAll() {
    return await this.votacoesUsuariosRepository.find();
  }

  async findOneOrFail(
    conditions: FindConditions<VotacoesUsuariosEntity>,
    options?: FindOneOptions<VotacoesUsuariosEntity>,
  ) {
    try {
      return await this.votacoesUsuariosRepository.findOneOrFail(
        conditions,
        options,
      );
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: VotacaoUsuarioDto) {
    const votacaoUsuario = this.votacoesUsuariosRepository.create(data);
    return await this.votacoesUsuariosRepository.save(votacaoUsuario);
  }

  async update(id: string, data: VotacaoUsuarioDto) {
    const votacaoUsuario = await this.findOneOrFail({ id });
    this.votacoesUsuariosRepository.merge(votacaoUsuario, data);
    return await this.votacoesUsuariosRepository.save(votacaoUsuario);
  }

  async destroy(id: string) {
    await this.votacoesUsuariosRepository.findOneOrFail({ id });
    this.votacoesUsuariosRepository.softDelete({ id });
  }
}
