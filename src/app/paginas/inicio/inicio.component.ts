import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { producto } from '../../model/producto.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
})
export class InicioComponent implements OnInit {
  productosDestacados: producto[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosDestacados = this.productosService.getDestacados();
  }
}
