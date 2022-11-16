import { Pessoa } from 'src/entitdades-abstratas/pessoa';
import { Entity, Column } from 'typeorm';

@Entity()
export class Usuarios extends Pessoa {
  @Column()
  usuario: string;

  @Column({ unique: true })
  documento: string;

  @Column({ unique: true })
  email: string;

  @Column({ length: 60 })
  senha: string;
}
