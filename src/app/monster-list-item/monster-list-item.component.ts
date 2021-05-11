import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'monster-list-item',
  templateUrl: './monster-list-item.component.html',
  styleUrls: ['./monster-list-item.component.css'],
})
export class MonsterListItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //TODO FIX THIS ANY!!!!!!
  @Input() monster: any;
}
