import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { flatMap, catchError } from 'rxjs/operators';

import { BaseService } from '../../../shared/services/base-services';
import { CidadeService } from '../../cidades/shared/cidade.service';
import { Cliente } from './cliente';

import { environment } from 'src/environments/environment';


@Injectable()
export class ClienteService extends BaseService<Cliente>{

  constructor(protected injector: Injector, private cidadeService: CidadeService) { 
    super(environment.apiClientes, injector);
  }

  create(model: Cliente): Observable<Cliente>{
    return this.execute(model, super.create.bind(this));
  }

  update(model: Cliente): Observable<Cliente>{
      return this.execute(model, super.update.bind(this));
  }

  private execute(model: Cliente, sendFn: any): Observable<Cliente>{
      return this.cidadeService.getById(model.cidadeId).pipe(
          flatMap(e => {
            model.cidade = e;
            return sendFn(model);
          }),
          catchError(this.handleError)
      );
  }
}