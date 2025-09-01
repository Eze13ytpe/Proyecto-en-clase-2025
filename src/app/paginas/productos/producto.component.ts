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
    descripcion:'Zapatillas originales Nike Kyrie 7 edicion',
    oferta:false,
    descBool:false,
    precio: 100000,
    imagen:'/assets/kyrie 7.png',
    disponibilidad:true,
    cantidad:2,
    },
    {
      id:2,
      nombre: 'Lebron 18',
      descripcion:'Zapatillas originales Nike Lebron James 18 edicion',
      oferta:false,
      descBool:false,
      precio: 125000,
      imagen:'/assets/lebron 18.png',
      disponibilidad:true,
      cantidad:2,
    },
    {
      id: 3,
      nombre: 'kyrie 6',
      descripcion:'Zapatillas originales Nike Kyrie 6 edicion ',
      oferta:false,
      descBool:false,
      precio: 200000,
      imagen:'/assets/kyrie 6.png',
      disponibilidad:true,
      cantidad:3
    },
    {
      id:4,
      nombre:'Remera Quimsa',
      descripcion:'Remera original Quimsa de Santiago Del Estero, La Liga,',
      oferta:false,
      descBool:false,
      precio:45000,
      imagen:'/assets/remeraQuimsa.png',
      disponibilidad:true,
      cantidad:5
    },
    {
      id:5,
      nombre:'Remera Hispano',
      descripcion:'Remera original Hispano de Santa cruz, La liga ',
      oferta:false,
      descBool:false,
      precio:35000,
      imagen:'/assets/RemeraHispano.png',
      disponibilidad:true,
      cantidad:5
    },
    {
      id:6,
      nombre:'Remera Amancay',
      descripcion:'Remera original Amancay de La Rioja, La liga',
      oferta:false,
      descBool:false,
      precio:35000,
      imagen:'/assets/remeraAmancay.png',
      disponibilidad:true,
      cantidad:5
    },
       {
      id:7,
      nombre:'Remera Argentino',
      descripcion:'Remera original Argentino de Buenos Aires, La liga',
      oferta:false,
      descBool:false,
      precio:39000,
      imagen:'/assets/remeraArgentino.png',
      disponibilidad:true,
      cantidad:5
    },
     {
      id:8,
      nombre:'Remera San Martin',
      descripcion:'Remera original San Martin de Corrientes, La liga',
      oferta:false,
      descBool:false,
      precio:39000,
      imagen:'/assets/RemeraSanMartin.png',
      disponibilidad:true,
      cantidad:5
    },
    {
      id:9,
      nombre:'Remera Riachuelo',
      descripcion:'Remera original de Riachuelo de Buenos Aires, La liga',
      oferta:false,
      descBool:false,
      precio:39000,
      imagen:'/assets/remeraRiachuelo.png',
      disponibilidad:true,
      cantidad:5
    },
     {
      id:10,
      nombre:'zapatillas Curry 11',
      descripcion:'Zapatillas originales Curry 11 edicion',
      oferta:false,
      descBool:false,
      precio:200000,
      imagen:'/assets/Curry 11.png',
      disponibilidad:true,
      cantidad:5
    },
    {
       id:11,
      nombre:'zapatillas KD16',
      descripcion:'Zapatillas originales Kevin Durant 11 edicion',
      oferta:false,
      descBool:false,
      precio:300000,
      imagen:'/assets/KD 16.png',
      disponibilidad:true,
      cantidad:5
    },
     {
      id:12,
      nombre:'zapatillas Curry 2',
      descripcion:'Zapatillas originales Curry 2 edicion',
      oferta:false,
      descBool:false,
      precio:390000,
      imagen:'/assets/curry 2.png',
      disponibilidad:true,
      cantidad:5
    },
        {
      id:13,
      nombre:'zapatillas Curry 3',
      descripcion:'Zapatillas originales Curry 3 edicion',
      oferta:false,
      descBool:false,
      precio:390000,
      imagen:'/assets/curry 3.png',
      disponibilidad:true,
      cantidad:5
    },
        {
      id:14,
      nombre:'zapatillas Curry spawn',
      descripcion:'Zapatillas originales Curry edicion Spawn Flotro',
      oferta:false,
      descBool:false,
      precio:390000,
      imagen:'/assets/curryspawnflorto.png',
      disponibilidad:true,
      cantidad:5
    },
     {
      id:15,
      nombre:'Remera Utah Jazz',
      descripcion:'Remera vintage original Utah Jazz, NBA ',
      oferta:false,
      descBool:false,
      precio:39000,
      imagen:'/assets/RemeraJazz.png',
      disponibilidad:true,
      cantidad:5
    },
     {
      id:16,
      nombre:'Remera Orlando',
      descripcion:'Remera vintage original Utah Jazz, NBA',
      oferta:false,
      descBool:false,
      precio:39000,
      imagen:'/assets/remeraOrlando.png',
      disponibilidad:true,
      cantidad:5
    },
  ]
constructor(private carritoService: CarritoService, private favoritosService: FavoritosService){}
//metodo para agregar un producto

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
