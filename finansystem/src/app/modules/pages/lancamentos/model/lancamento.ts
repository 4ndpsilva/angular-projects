import { TipoOperacao } from './tipo-operacao.enum';
import { Conta } from './../../contas/model/conta';
import { Categoria } from './../../categorias/model/categoria';

export class Lancamento {
  id: number;
  data: Date;
  categoria: Categoria;
  conta: Conta;
  tipoOperacao: TipoOperacao;
  valor: number;
  observacao?: string;
}