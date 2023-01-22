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
      img:'assets/img/math121.jpg',
      description:`Contact us for tutoring.`
    },{
      name:'iGCSE',
      img:'assets/img/igcse.jpg',
      description:`Contact us for tutoring.`
    },{
      name:'GCSE',
      img:'assets/img/gcse.jpg',
      description:`Contact us for tutoring.`
    },{
      name:'A-Level',
      img:'assets/img/alevel.png',
      description:`Contact us for tutoring.`
    }
  ]
}

interface course{
  name:string,
  img:string,
  description:string
}
