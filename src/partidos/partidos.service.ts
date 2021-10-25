import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Partido } from './partidos.model';

@Injectable()
export class PartidosService {
  constructor(
    @InjectModel(Partido)
    private partidoModel: typeof Partido,
  ) {}

  async obterTodos(): Promise<Partido[]> {
    return this.partidoModel.findAll();
  }

  async obterUm(id: number): Promise<Partido> {
    return this.partidoModel.findByPk(id);
  }

  async criar(partido: Partido) {
    this.partidoModel.create(partido);
  }

  async alterar(partido: Partido): Promise<[number, Partido[]]> {
    console.log(partido.id);
    return this.partidoModel.update(partido, {
      where: {
        id: partido.id,
      },
    });
  }

  async apagar(id: number) {
    const partido: Partido = await this.obterUm(id);
    partido.destroy();
  }
}
