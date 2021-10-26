import { Parlamentares } from './../parlamentares/parlamentares.model';
import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Usuario } from 'src/usuarios/usuarios.model';

@Table
export class CandidatosUsuarios extends Model<CandidatosUsuarios> {
  idCandidatoUsuario: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ordemAfinidade: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantidadeMatchs: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantidadeParticipacoes: number;
  @ForeignKey(() => Usuario)
  @Column
  idUsuario: number;

  @BelongsTo(() => Usuario)
  usuario: Usuario;
  @ForeignKey(() => Parlamentares)
  @Column
  idParlamentar: number;

  @BelongsTo(() => Parlamentares)
  parlamentares: Parlamentares;
}
