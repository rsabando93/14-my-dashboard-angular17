import { Injectable, computed, inject, signal } from '@angular/core';
import type { User, UserResponse, UsersResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, map } from 'rxjs';

interface State {
  users: User[],
  loading: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject( HttpClient );

  #state = signal<State>({ //el # es como poner private en la propiedad - la diferencia es que al momento de la transpilacion a js # permite que esa propiedad se vuelva privada en el EmaScript y no se va a ejecutar, a diferencia del private que no se transpila ya que no existe en js
    loading:true,
    users:[],
  });

  public users = computed( () => this.#state().users ); //señal computada de solo lectura
  public loading = computed( () => this.#state().loading ); //es como usar getters solo que estas propiedades no se pueden modificar

  constructor() {
    // console.log('Cargando data');
    this.http.get<UsersResponse>('https://reqres.in/api/users')
    .pipe( delay(1500) )
    .subscribe( resp => {
      this.#state.set({ //guarda los users obtenidos de la peticion en el state para usarlos en el componente users.component.ts (Lista de usuarios)
        loading: false,
        users: resp.data,
      })
    });

   }

   getUserById( id: string ): Observable<User>{
   return this.http.get<UserResponse>(`https://reqres.in/api/users/${ id }`)
    .pipe(
       delay(1500),
       map( resp => resp.data )
       )

   }
}
