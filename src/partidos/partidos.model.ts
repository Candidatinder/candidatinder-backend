import { Parlamentares } from './../parlamentares/parlamentares.model';
import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';

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
  @HasMany(() => Parlamentares)
  parlamentares: Parlamentares[];
}
