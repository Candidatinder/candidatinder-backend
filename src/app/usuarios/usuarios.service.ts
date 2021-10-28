import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuariosEntity } from './usuarios.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(UsuariosEntity)
    private readonly usuariosRepository: Repository<UsuariosEntity>,
  ) {}

  async findAll() {
    return await this.usuariosRepository.find({
      select: ['id', 'nome', 'email', 'estado', 'anoNascimento'],
    });
  }

  async findOneOrFail(
    conditions: FindConditions<UsuariosEntity>,
    options?: FindOneOptions<UsuariosEntity>,
  ) {
    try {
      return await this.usuariosRepository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: CreateUsuarioDto) {
    const usuario = this.usuariosRepository.create(data);
    return await this.usuariosRepository.save(usuario);
  }

  async update(id: string, data: UpdateUsuarioDto) {
    const usuario = await this.findOneOrFail({ id });
    this.usuariosRepository.merge(usuario, data);
    return await this.usuariosRepository.save(usuario);
  }

  async destroy(id: string) {
    await this.usuariosRepository.findOneOrFail({ id });
    this.usuariosRepository.softDelete({ id });
  }
}
