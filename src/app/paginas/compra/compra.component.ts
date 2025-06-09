import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CarritoService } from '../../servicios/carrito.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-compra',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent implements OnInit {
  // declaracion del formulario reactivo para la compra
  formularioCompra!: FormGroup
  // ! es para que tome todos los valores

  //varriable para almacenar el total de la compra (subtotal + envio)
  total!: number

  //costo fijo de envio
  envio = 2000

  //indicador para saber si la factura ya fue generada
  facturaGenerada = false

  //objeto que contiene informacion de la factura generada
  factura: any

  //controla la visibilidad del modal que muestra el PDF
  mostrarModal = false

  // Fuente segura para mostrar el PDF generado en el iframe(URL sanitizada)
  pdfSRC: SafeResourceUrl | undefined

  constructor(
    private fb: FormBuilder, //formbuilder para crear el formulario reactivo
    private carritoService: CarritoService, //servicio para manejar productos y otener el total
    private sanitizer: DomSanitizer //Para sanitizar la URL del PDF y que angular lo permita mostrar
  ) { }

  //metodo que se ejecuta al inicializar el componente
  ngOnInit(): void {
    //formulario con los campos requeridos y validadores

    this.formularioCompra = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      correo: ['', Validators.required, Validators.email],
      telefono: ['', Validators.required],
      codigoPostal: ['', Validators.required],
      ciudad: ['', Validators.required],
      provincia: ['', Validators.required],
      metodoPago: ['', Validators.required],
    })
  }
  //calcular el total de la compra sumando el total y el costo de envio
  calcularTotal(): number {
    const subtotal = this.carritoService.obtenerTotal()//Obtiene el subtotal del carrito
    this.total = subtotal + this.envio
    return this.total
  }

  //prepara los datos para la factura con cliente, productos, totales y fecha
  emitirFactura(): void {
    const datosCliente = this.formularioCompra.value //datos ingresados en el formulario
    const productos = this.carritoService.obtenerProductos()//productos del carrito
    const totalFinal = this.calcularTotal()//total calulado con envio
    //Construye el objeto factura con toda la info necesaria
    this.factura = {
      cliente: datosCliente,
      productos: productos,
      envio: this.envio,
      total: totalFinal,
      fecha: new Date()
    }
    //marca que la factura fue genereada
    this.facturaGenerada = true
  }

  //metodo que se ejecuta al finalizar la compra (clcik en boton)
  // verfica validez del formulario,genera factura y muestra PDF
  finalizarCompra(): void {
    if (this.formularioCompra.valid) {
      this.emitirFactura() //crea la factura
      this.generarPDFModal()//genera y muestra eñ PDF en modal
    } else {
      this.formularioCompra.markAllAsTouched()
    }
  }
  //genera el PDF con jsPDF y crea la URL para mostrar en iframe dentro del modal

  generarPDFModal(): void {

    if (!this.factura) return; //si no hay factura, no hace nada

    const doc = new jsPDF() //crea instancia PDF

    // agrega titulo y fecha del PDF
    doc.setFontSize(18)
    doc.text(`factura de compra`, 14, 20)
    doc.setFontSize(12)
    doc.text(`Fecha : ${this.factura.fecha.toLocaleString()}`, 14, 30)


    //informacion del cliente
    doc.text(`cliente`, 14, 40)
    const c = this.factura.cliente
    doc.text(`Nombre: ${c.nombre}`, 20, 50);
    doc.text(`Direccion: ${c.direccion}`, 20, 60)
    doc.text(`Correo: ${c.correo}`, 20, 70)
    doc.text(`Telefono: ${c.telefoono}`, 20, 80)
    doc.text(`Ciudad: ${c.ciudad}`, 20, 90)
    doc.text(`Provincia: ${c.provincia}`, 20, 100)
    doc.text(`Codigo postal: ${c.codigoPostal}`, 20, 110)

    // Listado de prroductos
    let y = 120
    doc.text('productos', 14, y)
    this.factura.productos.forEach((item: any, index: number) => {
      y += 10;
      doc.text(
        `${index + 1}.${item.producto.nombre}- cantidad ${item.cantidad} -precio: $${item.producto.precio.toFixed(2)} - subtotal: $${(item.producto.precio * item.cantidad).toFixed(2)}`, 20,
        y
      )
    })
    //costos Final
    y += 10
    doc.text(`Costo de envio: $${this.factura.envio.toFixed(2)}`, 14, y)
    y += 10
    doc.text(`total a pagar: $${this.factura.total.toFixed(2)}`, 14, y)

    const pdfBlob = doc.output('blob')
    const pdfSRC = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(pdfBlob))

    // Abre el modal que contiene el PDF
    this.mostrarModal = true
  }
  //Metodo para cerrar el modal y liberar la URL del PDF para evitar fugas de memoria
  cerrarModal(): void {
    this.mostrarModal = false
    if (this.pdfSRC) {
      //Sr revoca la URL para liberar recursos
      URL.revokeObjectURL((this.pdfSRC as any).changingThisBreakApplicationSecurity)
      this.pdfSRC = undefined
    }
  }
  //metodo imprimir el PDF que esta cargando dentro del Iframe en la vista
  imprimirPDF(): void {
    //obtiene la referencia al elemento Iframe del DOM mediante su ID `pdfFrame
    //puede devolver null si no enccuentra el elemento

    const iframe: HTMLIFrameElement | null = document.getElementById(`pdfFrame`) as HTMLIFrameElement

    //verifica que el iframe exista y que tenga un objetivo contenido valido
    if (iframe && iframe.contentWindow) {
      //le da foco al contenido del iframe para asegurarse que la venta correcta esta activa para imprimir
      iframe.contentWindow.focus()

      //llama al metodo print() de la ventana del iframe para abrir la ventanta de la impresion del navegador
      iframe.contentWindow.print()


    }

  }
}
