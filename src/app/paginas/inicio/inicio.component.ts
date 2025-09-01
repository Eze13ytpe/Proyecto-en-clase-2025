import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { producto } from '../../model/producto.model';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  imports: [NgFor,CommonModule,RouterModule]
})
export class InicioComponent implements OnInit {
  productosDestacados: producto[] = [];

  constructor(private productosService: ProductosService) {}
  
  ngOnInit(): void {
    this.productosDestacados = this.productosService.getDestacados();
  }


}
