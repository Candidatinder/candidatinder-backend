import { JwtStrategy } from './strategies/jwt.strategy';
import { localStrategy } from './strategies/local.strategy';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { Usuario } from 'src/usuarios/usuarios.model';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PassportModule,
    UsuariosModule,
    JwtModule.register({
      privateKey: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '60s' },
    }),
    Usuario,
  ],
  providers: [AuthService, localStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
