import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { producto } from '../../model/producto.model';
import { CarritoService } from '../../servicios/carrito.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carrito',
  imports: [CommonModule,FormsModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  productosEnCarrito: { producto: producto; cantidad: number }[] = []

  constructor(private carritoService: CarritoService, private router :Router) { }

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
 
  //nevega al formulario de compra 
  irAFormularioCompra(){
    //Redirije al usuario a la ruta de compra /compra , donde se encuentra el formulario para finalizar la compra
    this.router.navigate([`/compra`])

  }

  //calcular el total del carritoo de compras
  calcularTotal(): number{
    //recorre el arreglo de productos en el carrito y suma el resulado de ( precio * cantidad) de cada item
    return this.productosEnCarrito.reduce((total,item)=> {
      return total + item.producto.precio *item.cantidad
    },0)//El acumulador total inicia en 0
  }

}
