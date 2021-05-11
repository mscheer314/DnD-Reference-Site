import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.css'],
})
export class MonsterListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(this.monstersInput);
  }

  @Input() monstersInput: any;
}
