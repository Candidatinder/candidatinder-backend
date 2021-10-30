import { PartidosEntity } from './../partidos/partidos.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'parlamentares' })
export class ParlamentaresEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nomeParlamentar: string;

  @Column()
  estadoParlamentar: string;

  @Column({ nullable: true })
  idParlamentarEleito: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  @ManyToOne(
    () => PartidosEntity,
    (partido: PartidosEntity) => partido.parlamentaresEntity,
  )
  partido: PartidosEntity;
}
