import { Column } from 'typeorm';
import { Entidade } from "src/entitdades-abstratas/entidade";

export class Pacote extends Entidade {
    @Column()
    data_postagem: Date;

    @Column()
    data_entrega: Date;

    @Column()
    codigo_operador_logistico: string;

    @Column()
    local_origem: string;

    @Column()
    local_destino: string;

    @Column()
    status: string;
}
