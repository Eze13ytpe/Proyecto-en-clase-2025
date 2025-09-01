import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { producto } from '../../model/producto.model';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-oferta',
  imports: [CommonModule,RouterModule],
  templateUrl: './oferta.component.html',
  styleUrl: './oferta.component.css'
})
export class OfertaComponent implements OnInit{
productosEnOferta: producto[]=[]
constructor(private productosService: ProductosService){}
ngOnInit(): void {
  this.productosEnOferta =this.productosService.getOfertas()
}
}
