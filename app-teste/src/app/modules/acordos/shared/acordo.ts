import { BaseModel } from 'src/app/shared/models/base-model';
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
        public numeroParcelas?: number){ super(); }

    static fromJson(jsonData: any): Cliente{
        return Object.assign(new Cliente(), jsonData);
    }
}