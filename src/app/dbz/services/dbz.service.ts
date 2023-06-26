import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  addCharacter( character: Character ): void {
    // Agrega la propiedad id al character, dejando tal cual sus demas propiedades
    const newCharacter: Character = { id: uuid(), ...character }

    this.characters.push( newCharacter );
  }

  deleteCharacterById( id: string ): void {
    // Filter regresa un nuevo arreglo con la condicion que esta dentro retornando los elementos que cumplan con la condicion
    this.characters = this.characters.filter( character => character.id !== id )
  }

}
