import { BaseModel } from 'src/app/shared/models/base-model';

export class Estado extends BaseModel{
    constructor(
        public nome?: string, 
        public sigla?: string
    ){ super(); }

    static fromJson(jsonData: any): Estado{
        return Object.assign(new Estado(), jsonData);
    }

    static siglas = [
        'AC', 'AL', 'AP', 'AM', 'BA', 'CE',
        'DF', 'ES', 'GO', 'MA', 'MT', 'MS',
        'MG', 'PA', 'PB', 'PR', 'PE', 'PI',
        'RJ', 'RN', 'RS', 'RO', 'RR', 'SC',
        'SP', 'SE', 'TO'
    ]
}