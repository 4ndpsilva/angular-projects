import { BaseModel } from '../../../shared/models/base-model';
import { FormaPagamento } from './forma-pagamento.enum';
import { Cliente } from '../../clientes/shared/cliente';


export class Acordo extends BaseModel{
    constructor(
        public numeroProcesso?: string,
        public data?: string,
        public clienteId?: number, 
        public cliente?: Cliente,
        public descricao?: string,
        public observacoes?: string,
        public valor?: number,
        public formaPagamento?: FormaPagamento,
        public numeroParcelas?: number){ super(); }
    
    get formaPagamentoText(): string{
        return this.formaPagamento == 1? "A Vista": "Parcelado";
    }

    static fromJson(jsonData: any): Acordo{
        return Object.assign(new Acordo(), jsonData);
    }
}