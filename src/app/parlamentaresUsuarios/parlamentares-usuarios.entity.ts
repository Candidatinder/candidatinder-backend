import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { ParlamentaresEntity } from '../parlamentares/parlamentares.entity';
import { UsuariosEntity } from '../usuarios/usuarios.entity';

@Entity({ name: 'parlamentaresUsuario' })
export class ParlamentaresUsuarioEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  ordemAfinidade: number;

  @Column()
  quantidadeMatchs: number;

  @Column()
  quantidadeParticipantes: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  @ManyToOne(
    () => UsuariosEntity,
    (usuario: UsuariosEntity) => usuario.votacoesUsuariosEntity,
  )
  usuario: UsuariosEntity;

  @ManyToOne(
    () => ParlamentaresEntity,
    (parlamentar: ParlamentaresEntity) =>
      parlamentar.votacoesParlamentaresEntity,
  )
  parlamentar: ParlamentaresEntity;
}
