
import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../servicios/carrito.service';
import { producto } from '../../model/producto.model';
import { FavoritoService } from '../../servicios/favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
})
export class FavoritosComponent implements OnInit {
  // Se define una propiedad para almacenar los productos marcados como favoritos
productosFavoritos: producto[] = [];

// Constructor del componente: se inyectan los servicios de favoritos y carrito
constructor(
  private FavoritoService : FavoritoService,  // Servicio para manejar productos favoritos
  private carritoService: CarritoService      // Servicio para manejar el carrito de compras
) {}

// Método del ciclo de vida de Angular que se ejecuta al iniciar el componente
ngOnInit(): void {
  // Se suscribe al observable de favoritos del servicio
  // Cada vez que cambien los favoritos, se actualiza la lista local 'productosFavoritos'
  this.FavoritoService.favoritos$.subscribe((producto) => {
    this.productosFavoritos = producto;
  });
}

// Método para eliminar un producto de la lista de favoritos
eliminarFavorito(productoId: number) {
  // Llama al servicio para eliminar el producto por su ID
  this.FavoritoService.eliminarDeFavoritos(productoId);
}

// Método para agregar un producto al carrito de compras
agregarAlCarrito(producto: producto) {
  // Llama al servicio de carrito y le pasa el producto seleccionado
  this.carritoService.agregarAlCarrito(producto);
}

}
