import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeHolder:string='';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  buscar() {
    this.onEnter.emit(this.termino);
  }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(500))
    .subscribe( valor=> {
      console.log(valor);
    });
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

}
