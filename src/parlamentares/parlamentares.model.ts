import { Partido } from './../partidos/partidos.model';
import { VotacaoParlamentar } from './../votacoesparlamentares/votacoesparlamentares.model';
import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';

@Table
export class Parlamentares extends Model<Parlamentares> {
  idParlamentar: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nomeParlamentar: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  estadoParlamentar: string;
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  idParlamentarEleito: number;
  @ForeignKey(() => Partido)
  @Column
  idPartido: number;

  @BelongsTo(() => Partido)
  partido: Partido;
  @HasMany(() => VotacaoParlamentar)
  parlamentares: VotacaoParlamentar[];
}
