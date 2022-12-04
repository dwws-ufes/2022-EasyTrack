import { Column } from 'typeorm';
import { Entidade } from "src/entitdades-abstratas/entidade";

export class RegistroMovimentacoes extends Entidade {
    @Column()
    data_movimentacao: Date;

    @Column()
    local_origem: string;

    @Column()
    local_destino: string;

    @Column()
    status: string;
}
