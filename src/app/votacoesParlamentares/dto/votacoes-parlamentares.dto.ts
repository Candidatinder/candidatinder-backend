import { IsNotEmpty } from 'class-validator';

export class VotacaoParlamentarDto {
  @IsNotEmpty()
  voto: string;
}
