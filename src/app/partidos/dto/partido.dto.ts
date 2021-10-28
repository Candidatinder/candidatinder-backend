import { IsNotEmpty } from 'class-validator';

export class PartidoDto {
  @IsNotEmpty()
  siglaPartido: string;

  @IsNotEmpty()
  nomePartido: string;
}
