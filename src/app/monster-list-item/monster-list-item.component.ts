import { Component, Input, OnInit } from '@angular/core';
import { Monster } from '../models/monster';

@Component({
  selector: 'monster-list-item',
  templateUrl: './monster-list-item.component.html',
  styleUrls: ['./monster-list-item.component.css'],
})
export class MonsterListItemComponent implements OnInit {
  //TODO FIX THIS ANY!!!!!!
  @Input() monster: any;

  constructor() {}

  ngOnInit(): void {
    // console.log(console.log(this.monster));

    let dndUrl = 'https://www.dnd5eapi.co/api/monsters/' + this.monster.index;
    //console.log(dndUrl);

    async function fetchMonster() {
      const response = await fetch(dndUrl);
      return await response.json();
    }

    fetchMonster().then((monster: Monster) => {
      //console.log(monster);
      this.monster = monster;
    });
  }
}
