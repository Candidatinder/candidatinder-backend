import { IsNotEmpty } from 'class-validator';

export class ParlamentaresUsuarioDto {
  @IsNotEmpty()
  ordemAfinidade: number;

  @IsNotEmpty()
  quantidadeMatchs: number;

  @IsNotEmpty()
  quantidadeParticipacoes: number;
}
