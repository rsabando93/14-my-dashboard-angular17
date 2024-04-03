import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styles: ``
})
export class TitleComponent {

  @Input( { required: true } ) //el title es obigatorio
  public title: string = 'No title';
  @Input( { transform: booleanAttribute } ) withShadow: boolean = false; //transform permite transformar los inputs en otro tipo de atributo - En este caso transforma el string en un boolean

}
