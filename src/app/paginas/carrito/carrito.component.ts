import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { producto } from '../../model/producto.model';
import { CarritoService } from '../../servicios/carrito.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule,FormsModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  productosEnCarrito: { producto: producto; cantidad: number }[] = []

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.carritoService.carrito$.subscribe((productos) => {
      this.productosEnCarrito = productos;
      });
  }

  agregarCantidad(index: number) {
    this.productosEnCarrito[index].cantidad++
  }

  quitarCantidad(index: number) {
    if (this.productosEnCarrito[index].cantidad > 1) {
      this.productosEnCarrito[index].cantidad--;
    }
  }
  eliminarProducto(productoId: number) {
    this.carritoService.eliminarDelCarrito(productoId)
  }
  vaciarCarrito() {
    this.carritoService.vaciarCarrito()
  }
  realizarCompra() {
    alert('compra realizada')
    this.vaciarCarrito
  }
}
