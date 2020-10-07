import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {
  nueva_ventana: String = '_blank';
  imagen: String = 'https://www.w3schools.com/images/lamp.jpg';
  titulo: String = 'CLASE DE PROGRAMACION';
  numero_isbn: String = '978-84-944049-4-8';


  constructor() { }

  ngOnInit(): void {
  }



  cambiarTitulo() {
    this.titulo = 'CLASE DE PROGRAMACION';
  }

  cambiarNumero() {
    this.numero_isbn = '123456789';
  }

  cambiar_imagen() {
    this.imagen = 'https://picsum.photos/id/237/200/300';
  }


  
}
