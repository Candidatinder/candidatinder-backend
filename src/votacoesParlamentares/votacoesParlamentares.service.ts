import { VotacaoParlamentar } from './votacoesParlamentares.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class VotacoesParlamentaresService {
  constructor(
    @InjectModel(VotacaoParlamentar)
    private usuarioModel: typeof VotacaoParlamentar,
  ) {}

  async obterTodos(): Promise<VotacaoParlamentar[]> {
    return this.usuarioModel.findAll();
  }

  async obterUm(id: number): Promise<VotacaoParlamentar> {
    return this.usuarioModel.findByPk(id);
  }

  async criar(usuario: VotacaoParlamentar) {
    this.usuarioModel.create(usuario);
  }

  async alterar(
    usuario: VotacaoParlamentar,
  ): Promise<[number, VotacaoParlamentar[]]> {
    return this.usuarioModel.update(usuario, {
      where: {
        id: usuario.id,
      },
    });
  }

  async apagar(id: number) {
    const usuario: VotacaoParlamentar = await this.obterUm(id);
    usuario.destroy();
  }
}
