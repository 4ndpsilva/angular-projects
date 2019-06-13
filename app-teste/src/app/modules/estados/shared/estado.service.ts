import { Injectable, Injector } from '@angular/core';

import { BaseService } from '../../../shared/services/base-services';
import { Estado } from './estado';
import { environment } from 'src/environments/environment';


@Injectable()
export class EstadoService extends BaseService<Estado>{
  constructor(protected injector: Injector){
    super(environment.apiEstados, injector, Estado.fromJson);
  }
}