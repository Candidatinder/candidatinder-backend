import { ParlamentaresEntity } from './../parlamentares/parlamentares.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'partidos' })
export class PartidosEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  siglaPartido: string;

  @Column()
  nomePartido: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  @OneToMany(
    () => ParlamentaresEntity,
    (parlamentaresEntity: ParlamentaresEntity) => parlamentaresEntity.partido,
  )
  parlamentaresEntity: ParlamentaresEntity[];
}
