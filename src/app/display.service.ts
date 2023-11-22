import { Injectable } from '@angular/core';
import { ChildUser } from './child-user';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }

  display(arr:ChildUser[]) {
    console.log('Array is displayed by Display service');

    for(let user of arr) {
      console.log(user);
    }
  }
}
