import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { InterfaceUsuario } from '../../../auth/interfaces/usuario.interface';
import { AuthService } from '../../../auth/services/auth.service';


@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styles: [`
    .container{
      margin:10px;
    }
  `
  ]
})

export class HeroesHomeComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate([('auth/login')])
  }
}