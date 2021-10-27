import { Usuario } from './usuarios.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario)
    private usuarioModel: typeof Usuario,
  ) {}

  async obterTodos(): Promise<Usuario[]> {
    return this.usuarioModel.findAll();
  }

  async obterUm(id: number): Promise<Usuario> {
    return this.usuarioModel.findByPk(id);
  }

  async obterPorEmail(email): Promise<Usuario> {
    try {
      return this.usuarioModel.findOne({
        where: {
          email,
        },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async criar(usuario: Usuario) {
    this.usuarioModel.create(usuario);
  }

  async alterar(usuario: Usuario): Promise<[number, Usuario[]]> {
    return this.usuarioModel.update(usuario, {
      where: {
        id: usuario.id,
      },
    });
  }

  async apagar(id: number) {
    const usuario: Usuario = await this.obterUm(id);
    usuario.destroy();
  }
}
