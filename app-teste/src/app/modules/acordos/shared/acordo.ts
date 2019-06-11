import { BaseModel } from 'src/app/shared/models/base-model';
import { Cliente } from '../../clientes/shared/cliente';

export class Acordo extends BaseModel{
    constructor(
        public nome?: string,
        public clienteId?: number, 
        public cliente?: Cliente){ super(); }

    static fromJson(jsonData: any): Cliente{
        return Object.assign(new Cliente(), jsonData);
    }
}