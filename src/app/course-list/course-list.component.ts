import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SarviceService } from '../sarvice.service';

@Component({
  selector: 'app-course-list',
  template: `
 <div (click)="onselect(x)" *ngFor="let x of courses">
  <h1>{{x.id}}{{x.course}}</h1>
 </div>
 <h1>{{errormsg}}</h1>
  `,
  styles: [
  ]
})
export class CourseListComponent implements OnInit {
  errormsg: any;

  constructor( private _service:SarviceService , private router:Router) { }

 
  
  public courses:any=[ ]

  ngOnInit(){
    this._service.getstudents()
    .subscribe(data=> this.courses= data,
               error=> this.errormsg =error)
  }

  onselect(x: { id: any; }){
    this.router.navigate(['/course',x.id])
  }
}
