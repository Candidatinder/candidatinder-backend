import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table
export class Partido extends Model<Partido> {
  idPartido: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  siglaPartido: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nomePartido: string;
}
