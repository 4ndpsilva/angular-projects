import { BaseModel } from 'src/app/shared/models/base-model';
import { Cidade } from '../../cidades/shared/cidade';

export class Cliente extends BaseModel{
    constructor(
        public nome?: string,
        public cidadeId?: number, 
        public cidade?: Cidade, 
        public telefone?: string,
        public email?: string){ super(); }

    static fromJson(jsonData: any): Cliente{
        return Object.assign(new Cliente(), jsonData);
    }
}