import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [NgFor, NgIf,NgClass],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  /*
productos =[
  {nombre : 'producto 1', precio:100},
  {nombre :'producto 2',precio: 150},
  {nombre : 'producto 3',precio: 200}
]
  */

  usuario={
    nombre: 'messi',
    activo: true
  }
    
}
