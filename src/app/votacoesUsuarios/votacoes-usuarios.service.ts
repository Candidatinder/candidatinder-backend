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
    // aqui vai ser feito o match:
    // 1. separar todas as votacoes de candidatos do mesmo estado da mesma proposta;
    // 2. caso ainda não tenha, preencher a tabela parlamentaresUsuarios com todos os deputados do mesmo estado;
    // e colocar 0 para os valores;
    // 2. para cada deputado, verificar se a votacao da proposta foi a mesma do usuario;
    // 3. caso afirmativo, somar +1 quatidadeMatchs;
    // 4. independente, somar +1 quantidadeParticipacoes;
    // 5. caso seja uma alteracao de voto, nao mexer na quantidade de Participacoes, soh na de Matchs
    return await this.votacoesUsuariosRepository.save(votacaoUsuario);
  }

  async destroy(id: string) {
    await this.votacoesUsuariosRepository.findOneOrFail({ id });
    this.votacoesUsuariosRepository.softDelete({ id });
  }
}
