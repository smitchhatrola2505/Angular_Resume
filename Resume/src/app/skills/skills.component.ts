import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  
  skills = [{html:'100%',css:'90%',js:'80%',python:'75%',angular:'65%'}]
  ngOnInit(): void {
  }

}
