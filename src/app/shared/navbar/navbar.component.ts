import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CarritoService } from '../../servicios/carrito.service';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  cantidadProductos: number = 0;
  modoOscuroActivado = false;
  usuario: any = null;
  private isBrowser: boolean;

  constructor(
    private carritoService: CarritoService,
    public authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Detectamos si estamos en el navegador o en el servidor
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    // Solo acceder a localStorage si estamos en el navegador
    if (this.isBrowser) {
      this.usuario = this.authService.getUsuario();
      
      if (this.authService.isLoggedIn()) {
        this.carritoService.cargarCarrito();
      }
    }

  this.carritoService.carrito$.subscribe({
  next: productos => {
    const arr = Array.isArray(productos) ? productos : [];
    this.cantidadProductos = arr.reduce(
      (acc, item) => acc + Number(item.cantidad || 1),
      0
    );
  }
});


    if (this.authService.loginEvent && this.isBrowser) {
      this.authService.loginEvent.subscribe(() => {
        this.usuario = this.authService.getUsuario();
        this.carritoService.cargarCarrito();
      });
    }

    // Solo acceder a localStorage si estamos en el navegador
    if (this.isBrowser) {
      this.modoOscuroActivado = localStorage.getItem('modoOscuro') === 'true';
      this.aplicarModoOscuro();
    }
  }

  alternarModoOscuro() {
    if (this.isBrowser) {
      this.modoOscuroActivado = !this.modoOscuroActivado;
      localStorage.setItem('modoOscuro', String(this.modoOscuroActivado));
      this.aplicarModoOscuro();
    }
  }

  private aplicarModoOscuro() {
    // Solo modificar el DOM si estamos en el navegador
    if (this.isBrowser) {
      document.body.classList.toggle('dark-mode', this.modoOscuroActivado);
    }
  }

  logout() {
    this.authService.logout();
    this.usuario = null;
    this.cantidadProductos = 0;
  }
}