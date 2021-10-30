import { PartidosEntity } from './../../partidos/partidos.entity';
import { IsNotEmpty } from 'class-validator';

export class ParlamentarDto {
  @IsNotEmpty()
  nomeParlamentar: string;

  @IsNotEmpty()
  estadoParlamentar: string;

  idParlamentarEleito: number;

  partido: PartidosEntity;
}
