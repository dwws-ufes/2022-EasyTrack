import { Entidade } from "./entidade.model";

export class RegistroMovimentacao extends Entidade {
    dataMovimentacao?: Date
    localOrigem?: String
    localDestino?: String
    status?: String
}