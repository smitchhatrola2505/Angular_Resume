import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor() { }
  personal = [{Name:"Smit Chhatrola",Email:"schhatrola779@rku.ac.in",Contact_No:81280614656,Address:"Tramba"}]
  ngOnInit(): void {
  }

}
