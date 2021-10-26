import { Proposta } from './../propostas/propostas.model';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Usuario } from 'src/usuarios/usuarios.model';

@Table
export class VotacaoUsuario extends Model<VotacaoUsuario> {
  idVotacao: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  voto: string;
  @ForeignKey(() => Usuario)
  @Column
  idUsuario: number;

  @BelongsTo(() => Usuario)
  parlamentares: Usuario;

  @ForeignKey(() => Proposta)
  @Column
  idProposta: number;

  @BelongsTo(() => Proposta)
  proposta: Proposta;
}
