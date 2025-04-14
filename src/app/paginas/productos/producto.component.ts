import {  NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [NgFor],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  
productos =[
  {nombre : 'producto 1', precio:100, imagen :"/assets/messichiquito.webp"},
  {nombre :'producto 2',precio: 150, imagen: "/assets/messichiquito.webp"},
  {nombre : 'producto 3',precio: 200, imagen:"/assets/messichiquito.webp"}
]


usuario={
  nombre: 'messi',
  activo: true
}
  
}
