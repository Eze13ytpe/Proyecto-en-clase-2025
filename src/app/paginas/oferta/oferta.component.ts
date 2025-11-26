import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { producto } from '../../model/producto.model';
import { ProductosService } from '../../servicios/productos.service';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritosService } from '../../servicios/favoritos.service';

@Component({
  selector: 'app-oferta',
  imports: [CommonModule, RouterModule],
  templateUrl: './oferta.component.html',
  styleUrl: './oferta.component.css'
})
export class OfertaComponent implements OnInit {
  productosEnOferta: producto[] = [];

  constructor(
    private productosService: ProductosService,
    private carritoService: CarritoService,
    private favoritosService: FavoritosService
  ) {}

  ngOnInit(): void {
    // Solo productos con oferta: true
    this.productosEnOferta = this.productosService.getOfertas();
  }

  mostrarDescripcion(producto: producto) {
    producto.descBool = !producto.descBool;
  }

  agregarFavorito(producto: producto) {
    this.favoritosService.agregarAFavoritos(producto);
  }

  agregar(producto: producto) {
    this.carritoService.agregarAlcarrito(producto);
    alert('producto agregado al carrito');
  }
}
