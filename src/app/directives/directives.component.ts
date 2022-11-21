import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  template: `
  <div>
   <h1 *ngIf="status; else Elseblock">welcome mr.{{name}}</h1>
   <ng-template #Elseblock>
    <h1>This is elsepart</h1>
   </ng-template>
  </div>
  <div>
   <h1 *ngIf="status; then TrueBlock else Elseblock">welcome mr.{{name}}</h1>
   <ng-template #Elseblock>
    <h1>This is elsepart</h1>
    </ng-template>
    <ng-template #TrueBlock>
    <h1>This is trueepart</h1>
   </ng-template>
   <!----------------------------------------------------------->
   <div [ngSwitch]= "mychoice">
    <div>
    <div *ngSwitchCase= "'one'">first</div>
    <div *ngSwitchCase=   "'two'">second</div>
    <div *ngSwitchCase= "'three'">third</div>
    <div *ngSwitchDefault>"invalidstatement"</div>
    </div>
   </div>
 <!------------------------------------------------------------------>
  <div *ngFor="let x of students">
    <h1>{{x}}</h1>
  </div>
  <div *ngFor="let x of students last as l">
    <h1>{{l}}--{{x}}</h1>
  </div>
  <h1 [class]="text"> welcome p4a</h1>
   
  `,
  styles: [`
  .textsize{
    fontsize:100px;
    fontstyle:italic
  }`
  ]
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public name = "praveen"
  public status = true
  public mychoice="ten"

  public students=["pra","meh","tha"]
  public text= "textsize "
}
