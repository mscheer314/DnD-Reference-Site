export class MonsterJSON {
  index: string;
  name: string;
  results: Object[];

  constructor(index: string, name: string, results: Object[]) {
    this.index = index;
    this.name = name;
    this.results = results;
  }
}
