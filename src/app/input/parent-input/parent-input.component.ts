import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-input',
  templateUrl: './parent-input.component.html',
  styleUrls: ['./parent-input.component.scss']
})
export class ParentInputComponent implements OnInit {
  ListStudent = [
    {id: 1, name: 'Nam'}, {id: 2, name: 'Tung'}, {id: 3, name: 'dang cap'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
