import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import {  ProductosComponent } from './paginas/productos/producto.component';
import { OfertaComponent } from './paginas/oferta/oferta.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { CompraComponent } from './paginas/compra/compra.component';
import { InicioSesionComponent } from './auth/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { AdminGuard } from './guard/admin.guard';
import { CarritoComponent } from './shared/carrito/carrito.component';
import { FavoritosComponent } from './shared/favoritos/favoritos.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos.component';
import { ComprasComponent } from './paginas/compras/compras.component';


export const routes: Routes = [

  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  { path: 'inicio', component: InicioComponent },
  { path: 'producto', component: ProductosComponent },
  { path: 'ofertas', component: OfertaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'favorito', component: FavoritosComponent },
  { path: 'compra', component: CompraComponent },
  { path: 'login', component: InicioSesionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'compras', component: ComprasComponent },
  {path: 'quienessomos', component: QuienessomosComponent},
  {path: "favoritos", component: FavoritosComponent},

  {
    path: 'ticket/:id',
    loadComponent: () =>
      import('./paginas/ticket/ticket.component')
      .then(m => m.TicketComponent)
  },

  { 
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
  },

  { path: '**', redirectTo: 'inicio' }
];


