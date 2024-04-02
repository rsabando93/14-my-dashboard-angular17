import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [ CommonModule ],
  // templateUrl: './heavy-loaders-slow.component.html',
  template: `
  <h1>Hola mundo</h1>
  `,
  // styleUrl: './heavy-loaders-slow.component.css'
})
export class HeavyLoadersSlowComponent {

}
