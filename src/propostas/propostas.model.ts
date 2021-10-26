import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { VotacaoParlamentar } from 'src/votacoesParlamentares/votacoesParlamentares.model';

@Table
export class Proposta extends Model<Proposta> {
  idProposta: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  codigoProposta: string;
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  dataProposta: Date;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  link1Proposta: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  link2Proposta: string;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  popularidade: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nomeProposta: string;
  @HasMany(() => VotacaoParlamentar)
  parlamentares: VotacaoParlamentar[];
}
