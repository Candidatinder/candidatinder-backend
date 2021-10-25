import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Parlamentares } from './parlamentares.model';

@Injectable()
export class ParlamentaresService {
  constructor(
    @InjectModel(Parlamentares)
    private parlamentaresModel: typeof Parlamentares,
  ) {}

  async obterTodos(): Promise<Parlamentares[]> {
    return this.parlamentaresModel.findAll();
  }

  async obterUm(id: number): Promise<Parlamentares> {
    return this.parlamentaresModel.findByPk(id);
  }

  async criar(parlamentares: Parlamentares) {
    this.parlamentaresModel.create(parlamentares);
  }

  async alterar(
    parlamentares: Parlamentares,
  ): Promise<[number, Parlamentares[]]> {
    console.log(parlamentares.id);
    return this.parlamentaresModel.update(parlamentares, {
      where: {
        id: parlamentares.id,
      },
    });
  }

  async apagar(id: number) {
    const partido: Parlamentares = await this.obterUm(id);
    partido.destroy();
  }
}
