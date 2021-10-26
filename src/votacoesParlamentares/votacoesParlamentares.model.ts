import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class VotacaoParlamentar extends Model<VotacaoParlamentar> {
  idVotacao: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  voto: string;
}
