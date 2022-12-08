import { Entidade } from "./entidade.model";

export class RegistroMovimentacao extends Entidade {
    data_movimentacao?: Date;
    local_origem?: string;
    local_destino?: string;
    status?: string;
    response?: object;
}
