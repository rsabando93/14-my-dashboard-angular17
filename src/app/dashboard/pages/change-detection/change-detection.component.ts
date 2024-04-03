import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  selector: 'dashboard-change-detection',
  imports: [TitleComponent, CommonModule],
  // changeDetection: ChangeDetectionStrategy.Default,//ZoneJs - es el que esta por defecto, detecta todos los cambios automaticamente
  changeDetection: ChangeDetectionStrategy.OnPush, //Zoneless - 1 Esto hace que angular no este pendiente siempre de los cambios y se active solo cuando realmente hay un cambio
  templateUrl: './change-detection.component.html', //Zoneless - 2 Esto hace que angular delegue a las signals que esten pendientes de los cambios mejorando la velocidad y el performance
  styles: ``
})
export default class ChangeDetectionComponent {

  public currentFramework = computed( //readOnly signal
    () => `Change detection - ${ this.frameworkAsSignal().name}` //se mantiene pendiente de los cambios de this.frameworkAsSignal().name
  );

  // propiedad con signal
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

   // propiedad tradicional
  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor(){
    setTimeout(() => {

      //No cambia con el ChangeDetectionStrategy.OnPush,
      // this.frameworkAsProperty.name = 'React';


      //si cambia con el ChangeDetectionStrategy.OnPush,
      // forma 1
      this.frameworkAsSignal.update( value => ({
        ...value,
        name:'React',
      }));

      // forma 2
      // this.frameworkAsSignal.update( value => {
      //   value.name = 'React';
      //   return {...value};
      // });
      console.log('Hecho');

    }, 3000);
  }
}
