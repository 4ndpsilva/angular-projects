import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: 'contatos', loadChildren: './modules/contatos/contatos.module#ContatosModule'},
    {path: 'estados', loadChildren: './modules/estados/estados.module#EstadosModule'},
    {path: 'cidades', loadChildren: './modules/cidades/cidades.module#CidadesModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}