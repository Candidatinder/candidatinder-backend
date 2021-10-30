import { IsNotEmpty } from 'class-validator';

export class PropostaDto {
  @IsNotEmpty()
  codigoProposta: string;

  @IsNotEmpty()
  dataProposta: Date;

  @IsNotEmpty()
  link1Proposta: string;

  @IsNotEmpty()
  link2Proposta: string;

  @IsNotEmpty()
  popularidade: number;

  @IsNotEmpty()
  nomeProposta: string;
}
