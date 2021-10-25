import { Table, Model, Column, DataType, HasOne } from 'sequelize-typescript';

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
}
