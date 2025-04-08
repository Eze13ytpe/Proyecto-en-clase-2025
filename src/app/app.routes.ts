import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { FormularioComponent } from './contacto/formulario/formulario.component';

export const routes: Routes = [
    {path:"", redirectTo:'/inicio', pathMatch:'full'},
    {path:"inicio",component:InicioComponent},
    {path:"contacto",component:FormularioComponent}
];
