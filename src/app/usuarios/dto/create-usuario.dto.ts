import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { MessagesHelper } from '../../../helpers/messages.helper';
import { RegExHelper } from '../../../helpers/regex.helper';

export class CreateUsuarioDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  estado: string;

  anoNascimento: number;

  @IsNotEmpty()
  @Matches(RegExHelper.password, { message: MessagesHelper.PASSWORD_VALID })
  password: string;
}
