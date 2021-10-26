import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Usuario extends Model<Usuario> {
  idUsuario: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  login: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  estado: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  idade: number;
}
