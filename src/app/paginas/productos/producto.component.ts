import {  CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { producto } from '../../model/producto.model';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-producto',
  standalone:true,
  imports: [NgFor,CommonModule,RouterModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  productos:producto[]=[
    {
    id:1,
    nombre: '',
    descripcion:'',
    precio: 29,
    imagen:'',
    disponibilidad:true,
    }
  ]
constructor(private carritoService: CarritoService){}
//metodo para agregaar un producto

agregar(producto:producto){
  this.carritoService.agregarAlcarrito(producto)
  alert('producto agregado al carrito')
}
}
