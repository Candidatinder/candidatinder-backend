import { Proposta } from './../propostas/propostas.model';
import { Parlamentares } from './../parlamentares/parlamentares.model';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

@Table
export class VotacaoParlamentar extends Model<VotacaoParlamentar> {
  idVotacao: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  voto: string;
  @ForeignKey(() => Parlamentares)
  @Column
  idParlamentar: number;

  @BelongsTo(() => Parlamentares)
  parlamentares: Parlamentares;

  @ForeignKey(() => Proposta)
  @Column
  idProposta: number;

  @BelongsTo(() => Proposta)
  proposta: Proposta;
}
