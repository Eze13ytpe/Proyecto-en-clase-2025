import {  CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { producto } from '../../model/producto.model';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritosService } from '../../servicios/favoritos.service';

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
    nombre: 'Nike kyrie 7',
    descripcion:'',
    descBool:false,
    precio: 100000,
    imagen:'/assets/kyrie 7.jpg',
    disponibilidad:true,
    cantidad:2,
    },
    {
      id:2,
      nombre: 'Lebron 20',
      descripcion:'',
      descBool:false,
      precio: 125000,
      imagen:'https://imgs.search.brave.com/c_GpHT0Jsbf1pQTS3xo2_WMH76FTcnqbGZufcCNuF1s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tb2Rv/emFwYXRpbGxhcy5j/b20vdXBsb2FkL3By/b2R1Y3Rvcy9wb3J0/YWRhL25vcm1hbC9u/aWtlLWxlYnJvbi0y/MC1uaWtlLWxlYnJv/bi0yMC1sZWJyb24y/MDAyNi1hY2M0NGVm/ZDkwZjRmYTI4MWNh/ZjIzZTUzZTcyMjdl/Ni53ZWJw',
      disponibilidad:true,
      cantidad:2,
    },
    {
      id: 3,
      nombre: 'kyrie 6',
      descripcion:'chinchulin',
      descBool:false,
      precio: 200000,
      imagen:'https://imgs.search.brave.com/7tp4S7Y7mclH5kei7HfbF3h50zYc_ud_qIipRNRqDIw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3RvY2tjZW50ZXIu/Y29tLmFyL29uL2Rl/bWFuZHdhcmUuc3Rh/dGljLy0vU2l0ZXMt/MzY1LWRhYnJhLWNh/dGFsb2cvZGVmYXVs/dC9kdzBmM2E1Mzgy/L3Byb2R1Y3RzL05J/RE0xMTI1LTgwMC9O/SURNMTEyNS04MDAt/Mi5KUEc',
      disponibilidad:true,
      cantidad:3
    },
    {
      id:4,
      nombre:'Remera Quimsa',
      descripcion:'',
      descBool:false,
      precio:45000,
      imagen:'/assets/quimsa2.png',
      disponibilidad:true,
      cantidad:5
    },
    {
      id:5,
      nombre:'Remera Hispano',
      descripcion:'',
      descBool:false,
      precio:35000,
      imagen:'/assets/remera hispano.webp',
      disponibilidad:true,
      cantidad:5
    },
    {
      id:6,
      nombre:'Remera Amancay',
      descripcion:'',
      descBool:false,
      precio:35000,
      imagen:'/assets/amancay.webp',
      disponibilidad:true,
      cantidad:5
    },
       {
      id:7,
      nombre:'Remera Argentino',
      descripcion:'',
      descBool:false,
      precio:39000,
      imagen:'/assets/argentino.webp',
      disponibilidad:true,
      cantidad:5
    },
     {
      id:8,
      nombre:'Remera San Martin',
      descripcion:'',
      descBool:false,
      precio:39000,
      imagen:'/assets/remerarsanma.webp',
      disponibilidad:true,
      cantidad:5
    },
    {
      id:9,
      nombre:'Remera Riachuelo',
      descripcion:'',
      descBool:false,
      precio:39000,
      imagen:'/assets/riachuelo.webp',
      disponibilidad:true,
      cantidad:5
    },
     {
      id:10,
      nombre:'zapatillas Curry 11',
      descripcion:'',
      descBool:false,
      precio:200000,
      imagen:'/assets/curry11.webp',
      disponibilidad:true,
      cantidad:5
    },
    {
       id:11,
      nombre:'zapatillas KD16',
      descripcion:'',
      descBool:false,
      precio:300000,
      imagen:'/assets/KD16.webp',
      disponibilidad:true,
      cantidad:5
    },
     {
      id:12,
      nombre:'zapatillas Lebron 18',
      descripcion:'',
      descBool:false,
      precio:390000,
      imagen:'/assets/lebron18.webp',
      disponibilidad:true,
      cantidad:5
    }
  ]
constructor(private carritoService: CarritoService, private favoritosService: FavoritosService){}
//metodo para agregaar un producto

agregar(producto:producto){
  this.carritoService.agregarAlcarrito(producto)
  alert('producto agregado al carrito')
}
agregarFavorito(producto:producto){
  this.favoritosService.agregarAFavoritos(producto)
}
mostrarDescripcion(producto: producto) {
  producto.descBool = !producto.descBool;
}


}
