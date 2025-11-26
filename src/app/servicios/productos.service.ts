import { Injectable } from '@angular/core';
import { producto } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos: producto[] = [

 {
    id:1,
    nombre: 'Nike kyrie 7',
    descripcion:'Zapatillas originales Nike Kyrie 7 edicion',
    descBool:true,
    oferta:false,
    precio: 100000,
    imagen:'/assets/kyrie 7.png',
    disponibilidad:true,
    cantidad:2,
    categoria:'zapatillas',
    marca:'Nike'
    },
    {
      id:2,
      nombre: 'Lebron 18',
      descripcion:'Zapatillas originales Nike Lebron James 18 edicion',
      oferta:true,
      descBool:false,
      precio: 125000,
      imagen:'/assets/lebron 18.png',
      disponibilidad:true,
      cantidad:2,
      categoria:'zapatillas',
      marca:'Nike'
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
      cantidad:3,
      categoria:'zapatillas',
      marca:'Nike'
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
      cantidad:5, 
    categoria:'remeras',
    marca:'La liga'
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
      cantidad:5,
      categoria:'remeras', 
      marca:'La liga'
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
      cantidad:5,
      categoria:'remeras',
      marca:'La liga'
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
      cantidad:5,
      categoria:'remeras',
      marca:'La liga'
    },
     {
      id:8,
      nombre:'Remera San Martin',
      descripcion:'Remera original San Martin de Corrientes, La liga',
      oferta:true,
      descBool:false,
      precio:39000,
      imagen:'/assets/RemeraSanMartin.png',
      disponibilidad:true,
      cantidad:5,
      categoria:'remeras',
      marca:'La liga'
    },
    {
      id:9,
      nombre:'Remera Riachuelo',
      descripcion:'Remera original de Riachuelo de Buenos Aires, La liga',
      oferta:true,
      descBool:false,
      precio:39000,
      imagen:'/assets/remeraRiachuelo.png',
      disponibilidad:true,
      cantidad:5
    ,categoria:'remeras',
    marca:'La liga'
    },
     {
      id:10,
      nombre:'zapatillas Curry 11',
      descripcion:'Zapatillas originales Curry 11 edicion',
      oferta:true,
      descBool:false,
      precio:200000,
      imagen:'/assets/Curry 11.png',
      disponibilidad:true,
      cantidad:5,
      categoria:'zapatillas',
      marca:'Under Armour'
    },
    {
       id:11,
      nombre:'zapatillas KD16',
      descripcion:'Zapatillas originales Kevin Durant 11 edicion',
      oferta:true,
      descBool:false,
      precio:300000,
      imagen:'/assets/KD 16.png',
      disponibilidad:true,
      cantidad:5
    ,categoria:'zapatillas',
    marca:'Nike'
    },
     {
      id:12,
      nombre:'zapatillas Curry 2',
      descripcion:'Zapatillas originales Curry 2 edicion',
      oferta:true,
      descBool:false,
      precio:390000,
      imagen:'/assets/curry 2.png',
      disponibilidad:true,
      cantidad:5,
      categoria:'zapatillas',
      marca:'Under Armour'
    },
        {
      id:13,
      nombre:'zapatillas Curry 3',
      descripcion:'Zapatillas originales Curry 3 edicion',
      oferta:true,
      descBool:false,
      precio:390000,
      imagen:'/assets/curry 3.png',
      disponibilidad:true,
      cantidad:5,
      categoria:'zapatillas',
      marca:'Under Armour'
    },
        {
      id:14,
      nombre:'zapatillas Curry spawn flotro',
      descripcion:'Zapatillas originales Curry edicion Spawn Flotro',
      oferta:true,
      descBool:false,
      precio:390000,
      imagen:'/assets/curryspawnflorto.png',
      disponibilidad:true,
      cantidad:5,
      categoria:'zapatillas',
      marca:'Under Armour'  
    },
     {
      id:15,
      nombre:'Remera Utah Jazz',
      descripcion:'Remera vintage original Utah Jazz, NBA ',
      oferta:true,
      descBool:true,
      precio:39000,
      imagen:'/assets/RemeraJazz.png',
      disponibilidad:true,
      cantidad:5,
      categoria:'remeras',
      marca:'La liga'
    },
     {
      id:16,
      nombre:'Remera Orlando',
      descripcion:'Remera vintage original Utah Jazz, NBA',
      oferta:true,
      descBool:true,
      precio:39000,
      imagen:'/assets/remeraOrlando.png',
      disponibilidad:true,
      cantidad:5,
      categoria:'remeras',    
      marca:'La liga'
    },

  ];

  constructor() {}
  
  getProductos(): producto[] {
    return this.productos;
  }

  getDestacados(): producto[] {
    return this.productos.filter(p => p.descBool);
  }

  getOfertas():producto[]{
    return this.productos.filter(p =>p.oferta )
  }
}

