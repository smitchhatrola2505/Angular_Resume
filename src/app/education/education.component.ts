import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }
  education = [{ssc:'87.85%' ,hsc:'89.84%',school:'BM Patel School- Vankiya',collage:'RK University'}]
  ngOnInit(): void {
  }

}
