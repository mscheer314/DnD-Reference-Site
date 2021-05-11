export interface Monster {
  index: string;
  name: string;
  size: string;
  type: string;
  subtype: string;
  alignment: string;
  armor_class: number;
  hit_points: number;
  hit_dice: string;
  speed: object;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  proficiencies: Object[];
  damage_vulnerabilities: string[];
  damage_resistances: string[];
  damage_immunities: string[];
  condition_immunities: string[];
  senses: Object;
  languages: string;
  challenge_rating: number;
  special_abilities: Object[];
  url: string;
}
