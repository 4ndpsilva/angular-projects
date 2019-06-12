import { OnInit } from '@angular/core';

import { BaseModel } from '../../models/base-model';
import { BaseService } from '../../services/base-services';

export abstract class BaseListComponent<T extends BaseModel> implements OnInit{
    protected title: string;
    protected models: T[];
    
    constructor(protected service: BaseService<T>) {}

    ngOnInit(): void{
        this.load();
    }

    protected load(): void{
        this.service.getAll().subscribe(
            data => this.models = data.sort((e1, e2) => e2.id - e1.id),
            error => alert("Erro ao carregar a lista")
        );
    }

    protected delete(model: T): void{
        if(confirm('Deseja realmente excluir o registro selecionado?')){
          this.service.delete(model.id).subscribe(
            () => this.models = this.models.filter(m => m.id != model.id),
            () => alert("Erro na exclusão")
          );
        }
    }
}