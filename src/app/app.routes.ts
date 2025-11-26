import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { ProductoComponent } from './paginas/productos/producto.component';
import { OfertaComponent } from './paginas/oferta/oferta.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos.component';
import { FavoritosComponent } from './paginas/favoritos/favoritos.component';
import { CompraComponent } from './paginas/compras/compras.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { AdminGuard } from './guard/admin.guard';
import { InicioSesionComponent } from './auth/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { ComprasComponent } from './paginas/compras/compras.component';



export const routes: Routes = [
    {path:"", redirectTo:'/inicio', pathMatch:'full'},
    {path:"inicio",component:InicioComponent},
    {path:"contacto",component:ContactoComponent},
    {path:"producto",component:ProductoComponent},
    {path:"ofertas",component:OfertaComponent},
    {path:"carrito",component:CarritoComponent},
    {path:"quienessomos",component:QuienessomosComponent},
    {path:"favoritos",component:FavoritosComponent},
    {path:"compra", component:CompraComponent},

    // -----------------------------------------------------------
  // Auth: inicio de sesión
  // -----------------------------------------------------------
  { path: 'inicio-sesion', component: InicioSesionComponent },

  // -----------------------------------------------------------
  // Auth: registro de usuario
  // -----------------------------------------------------------
  { path: 'register', component: RegistroComponent },

  // -----------------------------------------------------------
  // Historial de compras del usuario
  // -----------------------------------------------------------
  { path: 'compras', component: ComprasComponent },

  // -----------------------------------------------------------
  // Página del ticket generado tras comprar
  // Se usa loadComponent() → lazy loading del componente
  // Esto evita cargar el componente hasta que alguien acceda.
  // Se obtiene el :id de la compra (id_compra)
  // -----------------------------------------------------------
  {
    path: 'ticket/:id',
    loadComponent: () =>
      import('./paginas/ticket/ticket.component')
      .then(m => m.TicketComponent)
  },

  // -----------------------------------------------------------
  // Panel de administración
  // Está protegido por AdminGuard → solo usuario con rol "admin"
  // puede acceder.
  // Si no es admin, se redirige a /inicio-sesion (login)
  // -----------------------------------------------------------
  { 
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
  },

  // -----------------------------------------------------------
  // Ruta por defecto: redirige a /inicio
  // -----------------------------------------------------------
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  // -----------------------------------------------------------
  // Ruta comodín para cualquier ruta inexistente
  // -----------------------------------------------------------
  { path: '**', redirectTo: 'inicio' },
];

]
