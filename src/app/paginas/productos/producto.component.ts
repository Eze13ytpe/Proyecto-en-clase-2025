import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { producto } from '../../model/producto.model';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritoService } from '../../servicios/favoritos.service';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../servicios/product.service';

import Swal from 'sweetalert2'
 
@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [NgFor, CommonModule, RouterModule, FormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductosComponent implements OnInit {

alertBoton(numero: number) {
  if(numero === 1){
Swal.fire({
  title: "agregado a carrito",
  icon: "success",
  draggable: true
  });
}
else if (numero === 2){
Swal.fire({
  title: "Agregado a favoritos",
  icon: "success",
  draggable: true
  });
}
}

  productos: producto[] = [];
  cargando = true;
  error = '';

  constructor(
    private productService: ProductService,
    private carritoService: CarritoService,
    private favoritoService: FavoritoService
  ) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productService.obtenerProductos().subscribe({
      next: (res: any) => {
        this.productos = res;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar productos:', error);
        this.error = 'No se pudieron cargar los productos.';
        this.cargando = false;
      }
    });
  }

  agregarAlCarrito(producto: producto): void {
    this.carritoService.agregarAlCarrito(producto).subscribe({
      next: () => console.log('Producto agregado al carrito'),
      error: error => console.error(error)
    });
  }

  agregarAFavoritos(producto: producto): void {
    // CORRECCIÓN: No se suscribe, es una operación síncrona
    this.favoritoService.agregarAFavoritos(producto);
    console.log('Producto agregado a favoritos:', producto.nombre);
    
    // Opcional: Puedes mostrar un mensaje al usuario
    // this.mostrarMensaje('¡Agregado a favoritos!');
  }
}