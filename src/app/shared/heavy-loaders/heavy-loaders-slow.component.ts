import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [ CommonModule ],
  // templateUrl: './heavy-loaders-slow.component.html',
  template: `
  <section [ngClass]="['w-full h-[300px]', cssClass]" >
    Heavy Loader Slow
  </section>
  `,
  // styleUrl: './heavy-loaders-slow.component.css'
})
export class HeavyLoadersSlowComponent {

  @Input( { required: true} ) cssClass!: string;

  constructor(){
    // console.log('HaevyLoader Component');

    //Operacion bloqueante - bloquea js - no hacer en proyectos reales
    const start = Date.now();
    while( Date.now() - start < 3000){}
    console.log('Cargado');

  }

}
