import { Entity, Column } from 'typeorm';
import { Entidade } from "src/entitdades-abstratas/entidade";

@Entity()
export class Etiqueta extends Entidade {
    @Column()
    nome: string;

    @Column()
    cor: string;

    @Column()
    codigo: string;
}
