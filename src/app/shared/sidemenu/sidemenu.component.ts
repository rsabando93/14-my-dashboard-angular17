import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

  public menuItems = routes
  .map( route => route.children ?? [] ) //barre el arr y crea uno nuevo con el route.children de cada uno
  .flat() //se asefura que no haya arreglos dentro de arreglos y solo traiga las rutas
  .filter( route => route && route.path )//solo deja pasar si hay una ruta y si tiene contenido en su path( en este caso omite el path vacio '' )
  .filter( route => !route.path?.includes(':') )//excluye la route con el el path que contenga el caracter : ( en este caso omite el path users/:id )

  constructor(){

    // const dashboardRoutes = routes
    // .map( route => route.children ?? [] ) //barre el arr y crea uno nuevo con el route.children de cada uno
    // .flat() //se asefura que no haya arreglos dentro de arreglos y solo traiga las rutas
    // .filter( route => route && route.path )//solo deja pasar si hay una ruta y si tiene contenido en su path( en este caso omite el path vacio '' )
    // .filter( route => !route.path?.includes(':') )//excluye la route con el el path que contenga el caracter : ( en este caso omite el path users/:id )
    // console.log(dashboardRoutes);
    console.log(this.menuItems);
  }
}
