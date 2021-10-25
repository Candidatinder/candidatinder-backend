import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Proposta } from './propostas.model';

@Injectable()
export class PropostasService {
  constructor(
    @InjectModel(Proposta)
    private propostaModel: typeof Proposta,
  ) {}

  async obterTodos(): Promise<Proposta[]> {
    return this.propostaModel.findAll();
  }

  async obterUm(id: number): Promise<Proposta> {
    return this.propostaModel.findByPk(id);
  }

  async criar(proposta: Proposta) {
    this.propostaModel.create(proposta);
  }

  async alterar(proposta: Proposta): Promise<[number, Proposta[]]> {
    return this.propostaModel.update(proposta, {
      where: {
        id: proposta.id,
      },
    });
  }

  async apagar(id: number) {
    const proposta: Proposta = await this.obterUm(id);
    proposta.destroy();
  }
}
