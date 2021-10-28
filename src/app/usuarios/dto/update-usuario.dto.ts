import { IsNotEmpty } from 'class-validator';

export class UpdateUsuarioDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  estado: string;

  @IsNotEmpty()
  anoNascimento: number;
}
