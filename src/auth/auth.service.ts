import { UsuariosService } from './../usuarios/usuarios.service';
import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/usuarios/usuarios.model';
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

  async validateUser(email: string, password: string) {
    let user: Usuario;
    try {
      user = await this.usuarioService.obterPorEmail(email);
    } catch (error) {
      return null;
    }

    if (password != user.password) {
      return null;
    }

    return user;
  }
}
