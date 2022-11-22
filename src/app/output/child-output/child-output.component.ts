import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.scss']
})
export class ChildOutputComponent implements OnInit {
  listStudent = [
    {id: 1, name: 'Name'}, {id: 2, name: 'Vo dich LOL'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
