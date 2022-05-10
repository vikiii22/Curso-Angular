import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { InterfaceUsuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [

  ]
})
export class LoginComponent {

  constructor( private router:Router, private authService:AuthService) { }

  usu!:InterfaceUsuario;

  login(){
    this.authService.existeUsuario(1)
      .subscribe( resp => {
        console.log(resp);
        this.usu=resp;
        if (resp.id == 1){
          this.router.navigate([('heroe/listado')]);
        }else{
          return;
        }
      })
  }

}
