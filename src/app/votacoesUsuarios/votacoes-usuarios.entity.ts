import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PropostasEntity } from '../propostas/propostas.entity';
import { UsuariosEntity } from '../usuarios/usuarios.entity';

@Entity({ name: 'votacoesUsuarios' })
export class VotacoesUsuariosEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  voto: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  @ManyToOne(
    () => PropostasEntity,
    (proposta: PropostasEntity) => proposta.votacoesParlamentaresEntity,
  )
  proposta: PropostasEntity;

  @ManyToOne(
    () => UsuariosEntity,
    (usuario: UsuariosEntity) => usuario.votacoesUsuariosEntity,
  )
  usuario: UsuariosEntity;
}
