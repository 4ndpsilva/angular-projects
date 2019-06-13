import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Estado } from './modules/estados/shared/estado';
import { Cidade } from './modules/cidades/shared/cidade';
import { Cliente } from './modules/clientes/shared/cliente';
import { FormaPagamento } from './modules/acordos/shared/forma-pagamento.enum';


export class Backend implements InMemoryDbService{
    createDb(): any{
        const estados: Estado[] = [
            {id: 1, nome: "São Paulo", sigla: "SP"},
            {id: 2, nome: "Alagoas", sigla: "AL"},
            {id: 3, nome: "Rio de Janeiro", sigla: "RJ"},
            {id: 4, nome: "Acre", sigla: "AC"},
            {id: 5, nome: "Ceará", sigla: "CE"},
            {id: 6, nome: "Minas Gerais", sigla: "MG"},
            {id: 7, nome: "Paraná", sigla: "PA"}
        ];

        const cidades: Cidade[] = [
            {id: 1, nome: 'Campinas', estadoId: estados[0].id, estado: estados[0]} as Cidade,
            {id: 2, nome: 'Diadema', estadoId: estados[0].id, estado: estados[0]} as Cidade,
            {id: 3, nome: 'Parati', estadoId: estados[2].id, estado: estados[2]} as Cidade,
            {id: 4, nome: 'Santo André', estadoId: estados[0].id, estado: estados[0]} as Cidade,
            {id: 5, nome: 'Belo Horizonte', estadoId: estados[5].id, estado: estados[5]} as Cidade,
            {id: 6, nome: 'Londrina', estadoId: estados[6].id, estado: estados[6]} as Cidade,
            {id: 7, nome: 'Cascavél', estadoId: estados[6].id, estado: estados[6]} as Cidade,
            {id: 8, nome: 'Curitiba', estadoId: estados[6].id, estado: estados[6]} as Cidade,
            {id: 9, nome: 'Assis', estadoId: estados[0].id, estado: estados[0]} as Cidade,
            {id: 10, nome: 'Bandeirantes', estadoId: estados[6].id, estado: estados[6]} as Cidade
        ];

        const clientes = [
            {id: 1, nome: 'Carlos da Silva', cidadeId: cidades[6].id, cidade: cidades[6], email: 'xpto@provedor.com.br', telefone: '962471623'} as Cliente,
            {id: 2, nome: 'Shirley Terezinha', cidadeId: cidades[1].id, cidade: cidades[1], email: 'email.nome@provedor.com.br', telefone: '28283782'} as Cliente,
            {id: 3, nome: 'Joelma de Oliveira', cidadeId: cidades[0].id, cidade: cidades[0], email: 'xxx@gmail.com', telefone: '9161237126'} as Cliente,
            {id: 4, nome: 'Jamila Souza', cidadeId: cidades[0].id, cidade: cidades[0], email: 'aaaaa@email.com.br', telefone: '8238728822'} as Cliente,
            {id: 5, nome: 'Dona Mercedes', cidadeId: cidades[1].id, cidade: cidades[1], email: 'yyyyy@provider.net', telefone: '9384935987'} as Cliente,
            {id: 6, nome: 'Manuel Gonçalves', cidadeId: cidades[3].id, cidade: cidades[3], email: 'qqqqqq@hotmail.com', telefone: '367346374'} as Cliente
        ];

        const acordos = [
            {id: 1, clienteId: clientes[5].id, cliente: clientes[5], numeroProcesso: '111111', 
                dataAcordo: '01/01/2019', descricao: 'Processo por estelionato', observacao: '', 
                valor: 5000, formaPagamento: FormaPagamento.PARCELADO, numeroParcelas: 3, 
                dataInicio: '01/02/2019', dataTermino: '01/04/2019'},

            {id: 2, clienteId: clientes[1].id, cliente: clientes[1], numeroProcesso: '222222', 
                dataAcordo: '10/05/2018', descricao: 'Calúnia e difamação', observacao: '', 
                valor: 15000, formaPagamento: FormaPagamento.PARCELADO, numeroParcelas: 2,
                dataInicio: '15/05/2018', dataTermino: '15/06/2018'},

            {id: 3, clienteId: clientes[0].id, cliente: clientes[0], numeroProcesso: '333333', 
                dataAcordo: '14/05/2018', descricao: '', observacao: '', 
                valor: 17000, formaPagamento: FormaPagamento.A_VISTA, numeroParcelas: 1, 
                dataInicio: '15/05/2018', dataTermino: '15/05/2018'},
        ]

        const guias = [
            {id: 1, acordoId: 1, acordo: acordos[0].id, numero: 1, dataVencimento: '01/02/2019', valor: 0, quitado: false},
            {id: 2, acordoId: 1, acordo: acordos[0].id, numero: 2, dataVencimento: '01/03/2019', valor: 0, quitado: false},
            {id: 3, acordoId: 1, acordo: acordos[0].id, numero: 3, dataVencimento: '01/04/2019', valor: 0, quitado: false},
            {id: 4, acordoId: 2, acordo: acordos[1].id, numero: 1, dataVencimento: '15/05/2018', valor: 0, quitado: true},
            {id: 5, acordoId: 2, acordo: acordos[1].id, numero: 2, dataVencimento: '15/06/2018', valor: 0, quitado: true},
            {id: 6, acordoId: 3, acordo: acordos[2].id, numero: 1, dataVencimento: '15/05/2018', valor: 0, quitado: true}
        ];

        return { estados, cidades, clientes, acordos, guias };
    }
}