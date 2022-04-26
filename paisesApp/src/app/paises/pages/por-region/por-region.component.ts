import { Component } from '@angular/core';
import { InterfacePaises } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones:string[]=['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string='';
  paises:InterfacePaises[]=[];

  constructor(private paisService:PaisService) { }

  activarRegion( region:string ){
    this.regionActiva=region;
  }

  getCSS( region:string ):string{
    return (region===this.regionActiva) ? 'btn btn-primary':'btn btn-outline-primary';
  }

  buscarRegion( region:string ){
    this.paisService.buscarPorRegion(region)
      .subscribe((resp)=>{
        this.paises=resp;
      })
  }
}
