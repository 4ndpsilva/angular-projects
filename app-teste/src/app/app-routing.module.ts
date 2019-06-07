import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: 'estados', loadChildren: './modules/estados/estados.module#EstadosModule'},
    {path: 'cidades', loadChildren: './modules/cidades/cidades.module#CidadesModule'},
    {path: 'contatos', loadChildren: './modules/contatos/contatos.module#ContatosModule'},
    {path: 'clientes', loadChildren: './modules/clientes/clientes.module#ClientesModule'},
    {path: 'acordos', loadChildren: './modules/acordos/acordos.module#AcordosModule'},
    {path: 'guias', loadChildren: './modules/guias-pagamentos/guias-pagamentos.module#GuiasPagamentosModule'}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}