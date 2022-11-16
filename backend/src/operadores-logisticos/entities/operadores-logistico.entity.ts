import { Column } from 'typeorm';
import { Entidade } from "src/entitdades-abstratas/entidade";

export class OperadoresLogistico extends Entidade {
    @Column()
    documento: string;

    @Column()
    razao_social: string;

    @Column()
    nome_fantasia: string;
}
