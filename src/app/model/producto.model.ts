export interface producto{
    id: number;
    nombre: string;
    descripcion :string;
    descBool:boolean
    precio: number;
    imagen:string;
    disponibilidad:boolean;
    cantidad?:number;   
}