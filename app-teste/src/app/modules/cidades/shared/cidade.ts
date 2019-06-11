import { BaseModel } from 'src/app/shared/models/base-model';
import { Estado } from '../../estados/shared/estado';

export class Cidade extends BaseModel{
    constructor(
        public nome?: string,
        public estadoId?: number,
        public estado?: Estado){ super(); }

    static fromJson(jsonData: any): Estado{
        return Object.assign(new Cidade(), jsonData);
    }
}