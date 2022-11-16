import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { RegistroUsuarioModule } from './registro-usuario/registro-usuario.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EsqueceuSenhaModule } from './esqueceu-senha/esqueceu-senha.module';
import { MudaSenhaModule } from './muda-senha/muda-senha.module';
import { MailerModule } from './mailer/mailer.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { UtilsModule } from './utils/utils.module';
import { PacotesModule } from './pacotes/pacotes.module';
import { EtiquetasModule } from './etiquetas/etiquetas.module';
import { ConfiguracoesModule } from './configuracoes/configuracoes.module';
import { OperadoresLogisticosModule } from './operadores-logisticos/operadores-logisticos.module';
import { RegistroMovimentacoesModule } from './registro-movimentacoes/registro-movimentacoes.module';
import * as Yup from 'yup';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.dev', '.env.stage', '.env.prod'],
      validationSchema: Yup.object({
        TYPEORM_HOST: Yup.string().required(),
        TYPEORM_PORT: Yup.number().default(3306),
        TYPEORM_USERNAME: Yup.string().required(),
        TYPEORM_PASSWORD: Yup.string().required(),
        TYPEORM_DATABASE: Yup.string().required(),
      }),
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: config.get<number>('THROTTLE_TTL'),
        limit: config.get<number>('THROTTLE_LIMIT'),
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('TYPEORM_HOST'),
        port: config.get<number>('TYPEORM_PORT'),
        username: config.get<string>('TYPEORM_USERNAME'),
        password: config.get<string>('TYPEORM_PASSWORD'),
        database: config.get<string>('TYPEORM_DATABASE'),
        synchronize: true,
        entities: ['dist/**/*.entity.js'],
        migrations: ['dist/migrations/**/*.js'],
        subscribers: ['dist/subscriber/**/*.js'],
        cli: {
          migrationsDir: config.get<string>('TYPEORM_MIGRATIONS_DIR'),
          subscribersDir: config.get<string>('TYPEORM_SUBSCRIBERS_DIR'),
        },
      }),
    }),
    LoginModule,
    RegistroUsuarioModule,
    UsuariosModule,
    EsqueceuSenhaModule,
    MudaSenhaModule,
    MailerModule,
    UtilsModule,
    PacotesModule,
    EtiquetasModule,
    ConfiguracoesModule,
    OperadoresLogisticosModule,
    RegistroMovimentacoesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
