import { BaseModel } from 'src/app/shared/models/base-model';

export class Estado extends BaseModel{
    constructor(
        public nome?: string, 
        public sigla?: string
    ){ super(); }

    static fromJson(jsonData: any): Estado{
        return Object.assign(new Estado(), jsonData);
    }
}