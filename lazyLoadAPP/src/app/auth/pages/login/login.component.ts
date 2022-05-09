import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [

  ]
})
export class LoginComponent {

  constructor( private router:Router, private authService:AuthService) { }

  login(){
    this.authService.existeUsuario(1)
      .subscribe( resp => {
        console.log(resp);
        if (resp.id == 1){
          this.router.navigate([('heroe/listado')]);
        }else{
          return;
        }
      })
  }

}
