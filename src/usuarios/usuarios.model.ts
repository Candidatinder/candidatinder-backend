import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { CandidatosUsuarios } from 'src/candidatosUsuarios/candidatosUsuarios.model';
import { VotacaoUsuario } from 'src/votacoesUsuarios/votacoesUsuarios.model';

@Table
export class Usuario extends Model<Usuario> {
  idUsuario: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;
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
  @HasMany(() => VotacaoUsuario)
  votacaoUsuario: VotacaoUsuario[];
  @HasMany(() => CandidatosUsuarios)
  candidatosUsuarios: CandidatosUsuarios[];
}
