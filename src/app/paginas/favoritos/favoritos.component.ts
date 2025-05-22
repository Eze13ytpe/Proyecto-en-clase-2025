import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../servicios/favoritos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { producto } from '../../model/producto.model';

@Component({
  selector: 'app-favoritos',
  imports: [CommonModule,FormsModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit{

  productosEnFavorito: { producto: producto; cantidad: number }[] = []

  constructor(private favoritosService: FavoritosService) { }

  ngOnInit(): void {
    this.favoritosService.favoritos$.subscribe((productos) => {
      this.productosEnFavorito = productos;
      });
  }


  eliminarProducto(productoId: number) {
    this.favoritosService.eliminarFavoritos(productoId)
    
  }
}
