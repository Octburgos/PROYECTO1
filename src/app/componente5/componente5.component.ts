import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente5',
  templateUrl: './componente5.component.html',
  styleUrls: ['./componente5.component.css']
})
export class Componente5Component implements OnInit {

 
  nombre: String = '';
  edad: number = 20;
  
  nombre1: String = 'pedro';
  nombre2: String = '';
  

  constructor() { }

  ngOnInit(): void {
  }
// edadAsumar es un argumento de entrada que se usa para sumar ese valor a la edad.
  // quien llama a la funcion define el valor de esa variable (ver html)
  sumaEdad(edadAsumar: number) {
    this.edad = this.edad + edadAsumar;
  }

  

  cambiar_edad(nombre: String, edad: number) {
    this.edad = edad;
    this.nombre1 = nombre;
  }

  cambiarNombre() {
    this.nombre = 'OCTAVIO';
  }
  
}
