import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, flatMap, map, filter } from 'rxjs/operators';

import { BaseService } from '../../../shared/services/base-services';
import { Cidade } from './cidade';
import { EstadoService } from '../../estados/shared/estado.service';
import { environment } from 'src/environments/environment';


@Injectable()
export class CidadeService extends BaseService<Cidade>{
  cidades: Observable<Cidade[]>;

  constructor(protected injector: Injector, private estadoService: EstadoService) { 
    super(environment.apiCidades, injector);
  }

  create(model: Cidade): Observable<Cidade>{
    return this.execute(model, super.create.bind(this));
  }

  update(model: Cidade): Observable<Cidade>{
      return this.execute(model, super.update.bind(this));
  }

  getByEstado(estadoId: number): Observable<Cidade[]>{    
    return this.getAll()
      .pipe(map(c => c.filter(cid => cid.estadoId == estadoId)));
  }

  private execute(model: Cidade, sendFn: any): Observable<Cidade>{
      return this.estadoService.getById(model.estadoId).pipe(
          flatMap(e => {
            model.estado = e;
            return sendFn(model);
          }),
          catchError(this.handleError)
      );
  }
}