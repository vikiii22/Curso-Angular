import { Pipe, PipeTransform } from '@angular/core';
import { InterfaceHeroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: InterfaceHeroe): unknown {
    let imagen='assets/no-image.png';
    // if (heroe.id!=null){
    //     imagen='assets/heroes/'+heroe.id+'.jpg'
    // }else{
    //   imagen='assets/no-image.jpg'
    // }
    heroe.id!=null ? imagen='assets/heroes/'+heroe.id+'.jpg' : imagen='assets/no-image.png';
    heroe.alt_img ? imagen=heroe.alt_img : '';
    return heroe.alt_img=imagen;
  }

}
