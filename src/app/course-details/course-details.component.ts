import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  template: `
    <p>
      you are selected the course with id {{courseid}}
    </p>
    <button (click)="toprevious()" type="button" class="btn btn-primary mx-2" >previous</button>
    <button (click)="tonext()" type="button" class="btn btn-info">next</button>
  `,
  styles: [
  ]
})
export class CourseDetailsComponent implements OnInit {
 public courseid:any

  constructor(private _activatedroute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
     this._activatedroute.paramMap.subscribe((params:ParamMap)=>{
      let id = (params.get('id'))
      this.courseid=id
     })
    
  }
  toprevious(){
    let previousid= this.courseid -1
    this.router.navigate(['./course',previousid])
  }
  tonext(){
    let nextid= this.courseid +1
    this.router.navigate(['./course',nextid])
  }
}
