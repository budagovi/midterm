import { Component } from '@angular/core';
import { ChildUser } from './child-user';
import { ParentUser } from './parent-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Budagovi Luka';

  users = [
    {firstname: 'luka', lastname: 'budagovi', age: 21},
    {firstname: 'teona', lastname: 'osepashvili', age: 22},
    {firstname: 'rusudan', lastname: 'khadilashvili', age: 19},
    {firstname: 'gurami', lastname: 'jajanidze', age: 20}
  ]


  parentUsers:ParentUser[] = [
    {id: '1', firstname: 'luka', lastname: 'budagovi', dateOfBirth: new Date('2002-07-27'), phoneNumber: '514-14-14-14', email: '21100264@ibsu.edu.ge'},
    {id: '2', firstname: 'teona', lastname: 'osepashvili', dateOfBirth: new Date('2001-08-07'), phoneNumber: '514-34-34-17', email: '21100302@ibsu.edu.ge'},
    {id: '3', firstname: 'rusudan', lastname: 'khadilashvili', dateOfBirth: new Date('2002-06-11'), phoneNumber: '514-14-14-14', email: '21100268@ibsu.edu.ge'},
    {id: '4', firstname: 'gurami', lastname: 'jajanidze', dateOfBirth: new Date('2004-03-01'), phoneNumber: '514-34-24-12', email: '21100294@ibsu.edu.ge'}
  ]

  childUsers:ChildUser[] = [];

  receiveChildren(array:ChildUser[]) {
    this.childUsers = array;
  }
}
