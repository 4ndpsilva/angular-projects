import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { flatMap, catchError } from 'rxjs/operators';

import { BaseService } from '../../../shared/services/base-services';
import { ClienteService } from '../../clientes/shared/cliente.service';
import { Acordo } from './acordo';
import { environment } from '../../../../environments/environment';


@Injectable()
export class AcordoService  extends BaseService<Acordo>{
  constructor(protected injector: Injector, private clienteService: ClienteService) { 
    super(environment.apiAcordos, injector, Acordo.fromJson);
  }

  create(model: Acordo): Observable<Acordo>{
    return this.execute(model, super.create.bind(this));
  }

  update(model: Acordo): Observable<Acordo>{
      return this.execute(model, super.update.bind(this));
  }

  private execute(model: Acordo, sendFn: any): Observable<Acordo>{
      return this.clienteService.getById(model.clienteId).pipe(
          flatMap(e => {
            model.cliente = e;
            return sendFn(model);
          }),
          catchError(this.handleError)
      );
  }
}