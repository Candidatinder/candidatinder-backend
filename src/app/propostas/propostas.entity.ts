import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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
}
