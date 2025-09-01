export interface producto{
    id: number;
    nombre: string;
    descripcion :string;
    oferta:boolean,
    descBool:boolean
    precio: number;
    imagen:string;
    disponibilidad:boolean;
    cantidad?:number;   
}