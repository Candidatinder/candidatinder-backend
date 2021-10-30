import { ParlamentaresUsuarioEntity } from './../parlamentaresUsuarios/parlamentares-usuarios.entity';
import { VotacoesParlamentaresEntity } from './../votacoesParlamentares/votacoes-parlamentares.entity';
import { PartidosEntity } from './../partidos/partidos.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
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

  @OneToMany(
    () => VotacoesParlamentaresEntity,
    (votacoesParlamentaresEntity: VotacoesParlamentaresEntity) =>
      votacoesParlamentaresEntity.parlamentar,
  )
  votacoesParlamentaresEntity: VotacoesParlamentaresEntity[];

  @OneToMany(
    () => ParlamentaresUsuarioEntity,
    (parlamentaresUsuarioEntity: ParlamentaresUsuarioEntity) =>
      parlamentaresUsuarioEntity.parlamentar,
  )
  parlamentaresUsuarioEntity: ParlamentaresUsuarioEntity[];
}
