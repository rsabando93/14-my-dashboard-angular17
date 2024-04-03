import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [ CommonModule ],
  // templateUrl: './heavy-loaders-slow.component.html',
  template: `
  <section [ngClass]="['w-full', cssClass]" >
    <ng-content>
    <!-- span -->
    </ng-content>

  </section>
  `,
  // styleUrl: './heavy-loaders-slow.component.css'
})
export class HeavyLoadersFastComponent {

  @Input({ required: true }) cssClass!: string;

  constructor(){
    console.log('HeavyLoaderFast creado');

  }
}
