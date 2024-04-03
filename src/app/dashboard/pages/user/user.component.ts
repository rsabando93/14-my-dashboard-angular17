import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { User } from '../../../interfaces/req-response';
import { toSignal } from '@angular/core/rxjs-interop'
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
  styles: ``
})
export default class UserComponent {

  private route = inject( ActivatedRoute ); //permite obtener la info de users que vienen por route.params
  // public user = signal<User|undefined>(undefined);
  private userService = inject( UsersService );


  // public titleLabel = computed(
  // () => `${ this.user()?.first_name} ${ this.user()?.last_name}`);

  public user = toSignal(//toSignal permite tomar un observable y tranformarlo en una señal
    this.route.params.pipe( //desestructura params y saca el id para poder enviarlo al getUserById
      switchMap( ({id}) => this.userService.getUserById( id ) )
    )
  );

  public titleLabel = computed(() => {
    if( this.user() ){ //si hay usuario
      return `Informacion del usuario: ${ this.user()?.first_name} ${ this.user()?.last_name}`;
    }
    return 'Informacion del usuario';
  });

  constructor(){
    // console.log(this.route.params);

  //  this.route.params.subscribe( params => {
  //   console.log({params});

  //  })

  }

}
