import { VotacaoUsuario } from './votacoesUsuarios.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class VotacoesUsuariosService {
  constructor(
    @InjectModel(VotacaoUsuario)
    private usuarioModel: typeof VotacaoUsuario,
  ) {}

  async obterTodos(): Promise<VotacaoUsuario[]> {
    return this.usuarioModel.findAll();
  }

  async obterUm(id: number): Promise<VotacaoUsuario> {
    return this.usuarioModel.findByPk(id);
  }

  async criar(usuario: VotacaoUsuario) {
    this.usuarioModel.create(usuario);
  }

  async alterar(usuario: VotacaoUsuario): Promise<[number, VotacaoUsuario[]]> {
    return this.usuarioModel.update(usuario, {
      where: {
        id: usuario.id,
      },
    });
  }

  async apagar(id: number) {
    const usuario: VotacaoUsuario = await this.obterUm(id);
    usuario.destroy();
  }
}
