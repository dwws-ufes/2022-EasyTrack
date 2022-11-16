import { Column } from 'typeorm';
import { Entidade } from './entidade';

export class Pessoa extends Entidade {
    @Column()
    nome: string;

    @Column()
    sobrenome: string;

    @Column()
    documento: string;
}