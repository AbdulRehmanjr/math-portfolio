import { Component } from '@angular/core';

@Component({
  selector: 'app-main-service',
  templateUrl: './main-service.component.html',
  styleUrls: ['./main-service.component.css']
})
export class MainServiceComponent {


  courses:course[] = [
    {
      name:'Math-121',
      img:'assets/img/course-1.jpg',
      description:'Description about your course few words.'
    },{
      name:'GCSE',
      img:'assets/img/course-1.jpg',
      description:'Description about your course few words.'
    },{
      name:'iGCSE',
      img:'assets/img/course-1.jpg',
      description:'Description about your course few words.'
    },{
      name:'A-Level',
      img:'assets/img/course-1.jpg',
      description:'Description about your course few words.'
    }
  ]
}

interface course{
  name:string,
  img:string,
  description:string
}
