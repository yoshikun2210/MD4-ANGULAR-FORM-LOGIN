import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.scss']
})
export class ChildOutputComponent implements OnInit {
  listStudent = [
    {id: 1, name: 'Nam'}, {id: 2, name: 'Vo dich LOL'}
  ];
@Output()
dataFormChild = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.dataFormChild.emit(this.listStudent);
  }

}
