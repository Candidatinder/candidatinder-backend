import { Injectable } from '@nestjs/common';
import { UsuariosEntity } from '../app/usuarios/usuarios.entity';
import { UsuariosService } from '../app/usuarios/usuarios.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user) {
    const payload = { sub: user.id, email: user.email };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateUsuario(email: string, password: string) {
    let usuario: UsuariosEntity;
    try {
      usuario = await this.usuarioService.findOneOrFail({ email });
    } catch (error) {
      return null;
    }

    const isPasswordValid = compareSync(password, usuario.password);
    if (!isPasswordValid) return null;

    return usuario;
  }
}
