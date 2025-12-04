import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompraService } from '../../servicios/compra.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-compras',
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent implements OnInit {

  // Arreglo donde se almacenan todas las compras realizadas por el usuario.
  compras: any[] = [];

  // Indica si los datos aún se están cargando (para mostrar spinners o textos de carga).
  cargando: boolean = true;

  // Contiene mensajes de error si la carga de compras falla.
  error: string = '';

  constructor(
    // Servicio encargado de obtener compras desde el backend.
    private compraService: CompraService
  ) {}

  // Al inicializar el componente, se dispara la carga de compras.
  ngOnInit(): void {
    this.cargarCompras();
  }

  // Llama al servicio para obtener todas las compras del usuario.
  cargarCompras(): void {

    this.compraService.obtenerCompras().subscribe({

      // Si la petición es exitosa:
      next: (res: any[]) => {
        this.compras = res;      // Carga el historial recibido del backend.
        this.cargando = false;   // Quita el estado de carga.
      },

      // Si ocurre un error al cargar las compras:
      error: (error) => {
        this.error = 'No se pudieron cargar las compras.'; // Mensaje para mostrar en la vista.
        this.cargando = false;
        console.error(error); // Registro en consola para debugging.
      }
    });
  }
}


