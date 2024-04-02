import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

type Grade = 'A'|'B'|'F';

@Component({
  standalone: true,
  selector: 'dashboard-control-flow',
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);//añadir .asReadonly al final para hacerlo de solo lectura
  public grade = signal<Grade>('A');

  public frameworks = signal(['Angular','Vue','Svelte','Qwik','React']);
  public frameworks2 = signal([]);


  toggleContent(){
    this.showContent.update( value => !value ); //cambia el valor al opuesto
    // this.grade.set('B');
  }
}
