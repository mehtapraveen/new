import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  template: `
   <input [disabled]= "isdisabled" id = {{courseid}} type="text" value="angular">
   <button (click)="onclick()">event</button>
   {{greetings}}
   <input [(ngModel)]=data  type="text" >
   <h1>{{data}}</h1>
   <h1>welcome Mr.{{name}}</h1>
  `,
  styles: [
  ]
})
export class BindingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public courseid=123;
    public isdisabled= false;
  public greetings=""

    onclick(){
      this.greetings=("welcome to hyd")
    }
    public data=""

    public name="praveen"
}
