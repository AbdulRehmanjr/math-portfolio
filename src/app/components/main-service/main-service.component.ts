import { Component } from '@angular/core';

@Component({
  selector: 'app-main-service',
  templateUrl: './main-service.component.html',
  styleUrls: ['./main-service.component.css']
})
export class MainServiceComponent {


  message:string = 'Contact us for more detail. Click on button.'
  courses:course[] = [
    {
      name:'Math-121',
      img:'assets/img/math121.jpg',
      description:`${this.message}`
    },{
      name:'iGCSE',
      img:'assets/img/igcse.jpg',
      description:`${this.message}`
    },{
      name:'GCSE',
      img:'assets/img/gcse.jpg',
      description:`${this.message}`
    },{
      name:'A-Level',
      img:'assets/img/alevel.png',
      description:`${this.message}`
    }
  ]
}

interface course{
  name:string,
  img:string,
  description:string
}
