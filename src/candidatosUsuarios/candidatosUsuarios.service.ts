import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CandidatosUsuarios } from './candidatosUsuarios.model';

@Injectable()
export class CandidatosUsuariosService {
  constructor(
    @InjectModel(CandidatosUsuarios)
    private candidatosUsuariosModel: typeof CandidatosUsuarios,
  ) {}

  async obterTodos(): Promise<CandidatosUsuarios[]> {
    return this.candidatosUsuariosModel.findAll();
  }

  async obterUm(id: number): Promise<CandidatosUsuarios> {
    return this.candidatosUsuariosModel.findByPk(id);
  }

  async criar(candidatosUsuarios: CandidatosUsuarios) {
    this.candidatosUsuariosModel.create(candidatosUsuarios);
  }

  async alterar(
    candidatosUsuarios: CandidatosUsuarios,
  ): Promise<[number, CandidatosUsuarios[]]> {
    console.log(candidatosUsuarios.id);
    return this.candidatosUsuariosModel.update(candidatosUsuarios, {
      where: {
        id: candidatosUsuarios.id,
      },
    });
  }

  async apagar(id: number) {
    const partido: CandidatosUsuarios = await this.obterUm(id);
    partido.destroy();
  }
}
