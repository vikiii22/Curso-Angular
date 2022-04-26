import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { InterfacePaises } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:InterfacePaises;

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ codigoPais }) => this.paisService.getPaisPorCodigo(codigoPais)),
        tap(console.log)
      )
      .subscribe(resp => {
        this.pais=resp;
      })


    // this.activatedRoute.params
    //   .subscribe(({ codigoPais }) => {
    //     this.paisService.getPaisPorCodigo(codigoPais)
    //       .subscribe(pais=>{
    //         console.log(pais);
    //       })
    //   })
  }

}
