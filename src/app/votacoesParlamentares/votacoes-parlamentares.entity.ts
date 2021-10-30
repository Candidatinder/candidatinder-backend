import { ParlamentaresEntity } from './../parlamentares/parlamentares.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'votacoesParlamentares' })
export class VotacoesParlamentaresEntity {
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
    () => ParlamentaresEntity,
    (parlamentar: ParlamentaresEntity) =>
      parlamentar.votacoesParlamentaresEntity,
  )
  parlamentar: ParlamentaresEntity;
}
