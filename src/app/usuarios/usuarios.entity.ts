import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { hashSync } from 'bcrypt';
import { VotacoesUsuariosEntity } from '../votacoesUsuarios/votacoes-usuarios.entity';
import { ParlamentaresUsuarioEntity } from '../parlamentaresUsuarios/parlamentares-usuarios.entity';

@Entity({ name: 'usuarios' })
export class UsuariosEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  estado: string;

  @Column({ name: 'ano_nascimento' })
  anoNascimento: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }

  @OneToMany(
    () => VotacoesUsuariosEntity,
    (votacoesUsuariosEntity: VotacoesUsuariosEntity) =>
      votacoesUsuariosEntity.usuario,
  )
  votacoesUsuariosEntity: VotacoesUsuariosEntity[];

  @OneToMany(
    () => ParlamentaresUsuarioEntity,
    (parlamentaresUsuarioEntity: ParlamentaresUsuarioEntity) =>
      parlamentaresUsuarioEntity.usuario,
  )
  parlamentaresUsuarioEntity: ParlamentaresUsuarioEntity[];
}
