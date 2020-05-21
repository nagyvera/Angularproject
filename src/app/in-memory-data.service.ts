import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const characters = [
      {id: 11, name: 'Thomas Maddox', birth: 'marc 13', job: 'FBI detective'},
      {id: 12, name: 'Taylor Maddox', birth: 'jan 1', job: 'Fireman'},
      {id: 13, name: 'Tyler Maddox', birth: 'jan 1', job: 'Fireman'},
      {id: 14, name: 'Trenton Maddox', birth: 'jul 4', job: 'Tattoo artist'},
      {id: 15, name: 'Travis Maddox', birth: 'apr 1', job: 'FBI detective'},
      {id: 16, name: 'Abby Abernathy', birth: 'nov 24', job: 'Teacher'},
      {id: 17, name: 'Liis Lindy', birth: 'febr 23', job: 'FBI detective'},
      {id: 18, name: 'Ellison Edson', birth: 'dec 9', job: 'Interviewer' },
      {id: 19, name: 'Camile Camlin', birth: 'may 29', job: 'Bartender'},
      {id: 20, name: 'Shepley Maddox', birth: 'sept 8', job: 'biztiboy'}
    ];
    return {characters};
  }

  genId(characters: Character[]): number{
    return  characters.length > 0 ? Math.max(...characters.map(character => character.id)) + 1 : 11;
  }
}
