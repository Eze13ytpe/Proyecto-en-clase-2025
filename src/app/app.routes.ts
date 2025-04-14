import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { ProductoComponent } from './paginas/productos/producto.component';
import { OfertaComponent } from './paginas/oferta/oferta.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos.component';


export const routes: Routes = [
    {path:"", redirectTo:'/inicio', pathMatch:'full'},
    {path:"inicio",component:InicioComponent},
    {path:"contacto",component:ContactoComponent},
    {path:"producto",component:ProductoComponent},
    {path:"ofertas",component:OfertaComponent},
    {path:"carrito",component:CarritoComponent},
    {path:"quienessomos",component:QuienessomosComponent}
]
