import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// CORRECCIÓN: Cambiar el import
import { ProductService } from '../../servicios/product.service'; // Sin "s"
import { producto } from '../../model/producto.model';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritoService } from '../../servicios/favoritos.service';

@Component({
  selector: 'app-oferta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oferta.component.html',
  styleUrl: './oferta.component.css'
})
export class OfertaComponent implements OnInit {
  productosEnOferta: producto[] = [];

  constructor(
    private productService: ProductService,
    private carritoService: CarritoService,
    private FavoritoService: FavoritoService
  ) {}

  ngOnInit(): void {
    // Solo productos con oferta: true
   // this.productosEnOferta = this.productService.getOfer();
  }

  agregarFavorito(producto: producto) {
    this.FavoritoService.agregarAFavoritos(producto);
  }

  agregar(producto: producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('producto agregado al carrito');
  }
}

