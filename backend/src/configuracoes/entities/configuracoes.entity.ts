import { Entidade } from 'src/entitdades-abstratas/entidade';
import { Entity, Column } from 'typeorm';

@Entity()
export class Configuracoes extends Entidade {
    @Column()
    update_automatico: boolean;

    @Column()
    tipo_ordenacao_padrao: number;

    @Column()
    intervalo_atualizacao: number;

    @Column()
    horario_comercial_atualizacao: boolean;
}
