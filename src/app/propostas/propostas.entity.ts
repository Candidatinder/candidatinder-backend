import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';
import { VotacoesParlamentaresEntity } from '../votacoesParlamentares/votacoes-parlamentares.entity';
import { VotacoesUsuariosEntity } from '../votacoesUsuarios/votacoes-usuarios.entity';

@Entity({ name: 'propostas' })
export class PropostasEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  codigoProposta: string;

  @Column()
  dataProposta: Date;

  @Column()
  link1Proposta: string;

  @Column()
  link2Proposta: string;

  @Column()
  popularidade: number;

  @Column()
  nomeProposta: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  @OneToMany(
    () => VotacoesParlamentaresEntity,
    (votacoesParlamentaresEntity: VotacoesParlamentaresEntity) =>
      votacoesParlamentaresEntity.proposta,
  )
  votacoesParlamentaresEntity: VotacoesParlamentaresEntity[];

  @OneToMany(
    () => VotacoesUsuariosEntity,
    (votacoesUsuariosEntity: VotacoesUsuariosEntity) =>
      votacoesUsuariosEntity.proposta,
  )
  votacoesUsuariosEntity: VotacoesUsuariosEntity[];
}
