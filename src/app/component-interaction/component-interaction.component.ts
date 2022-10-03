import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-component-interaction',
  template: `
    <div>
      {{childdata.name}}

      
    </div>
    <button (click)="firevent()" type="submit">clickme</button>
   
  `,
  styles: [
  ]
})
export class ComponentInteractionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()childdata:any

  @Output()childInfo:any = new EventEmitter()

  firevent(){
    this.childInfo.emit= ("this is from child")
  }
}
