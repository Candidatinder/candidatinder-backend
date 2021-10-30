import { IsNotEmpty } from 'class-validator';

export class VotacaoUsuarioDto {
  @IsNotEmpty()
  voto: string;
}
