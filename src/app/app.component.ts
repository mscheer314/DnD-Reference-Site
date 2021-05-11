import { Component } from '@angular/core';
import { MonsterJSON } from '../app/models/monsterJSON';
import { Monster } from './models/monster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DnD';

  public monsters: Monster[] = [];

  constructor() {}

  // constructor() {
  //   this.monsters = [];
  //   let dndUrl = 'https://www.dnd5eapi.co/api/monsters';

  //   async function fetchMonstersJSON() {
  //     const response = await fetch(dndUrl);
  //     return await response.json();
  //   }

  //   fetchMonstersJSON().then((monsters: MonsterJSON) => {
  //     for (const monster of monsters.results) {
  //       this.monsters.push(monster as Monster);
  //     }
  //     console.log('this.monsters: ', this.monsters);
  //   });
  // }
  ngOnInit(): void {
    this.monsters = [];
    let dndUrl = 'https://www.dnd5eapi.co/api/monsters';

    async function fetchMonstersJSON() {
      const response = await fetch(dndUrl);
      return await response.json();
    }

    fetchMonstersJSON().then((monsters: MonsterJSON) => {
      for (const monster of monsters.results) {
        this.monsters.push(monster as Monster);
      }
      console.log('this.monsters: ', this.monsters);
    });
  }
}
