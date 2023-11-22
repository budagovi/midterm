import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ChildUser } from '../child-user';
import { ParentUser } from '../parent-user';
import { FormGroup, FormControl, Validators} from "@angular/forms"
import {DisplayService} from '../display.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() inputUsers:ParentUser[] = [];

  @Output() passChildren = new EventEmitter<ChildUser[]>();

  displayService = inject(DisplayService);

  onClick() {
    this.displayService.display(this.childUsers);
  }


  childUsers:ChildUser[] = [
    {id: '3', firstname: 'rusudan', lastname: 'khadilashvili', dateOfBirth: new Date('2002-06-11'), phoneNumber: '514-14-14-14', email: '21100268@ibsu.edu.ge'},
    {id: '4', firstname: 'gurami', lastname: 'jajanidze', dateOfBirth: new Date('2004-03-01'), phoneNumber: '514-34-24-12', email: '21100294@ibsu.edu.ge'},
    {id: '1', firstname: 'luka', lastname: 'budagovi', dateOfBirth: new Date('2002-07-27'), phoneNumber: '514-14-14-14', email: '21100264@ibsu.edu.ge'},
    {id: '2', firstname: 'teona', lastname: 'osepashvili', dateOfBirth: new Date('2001-08-07'), phoneNumber: '514-34-34-17', email: '21100302@ibsu.edu.ge'},
  
  ]

  ngAfterViewInit() {
    this.passChildren.emit(this.childUsers)
  }

  //Form group

  userForm = new FormGroup({
    firstname: new FormControl('', {validators: [Validators.required, Validators.minLength(3)], nonNullable: true}),
    lastname: new FormControl('', {validators: [Validators.required, Validators.minLength(3)], nonNullable: true}),
    dateOfBirth: new FormControl(Date.now(), {validators: Validators.required, nonNullable: true}),
    phoneNumber: new FormControl('', {validators: [Validators.required, Validators.minLength(9)], nonNullable: true}),
    email: new FormControl('', {validators: [Validators.required, Validators.minLength(8)], nonNullable: true})
  })


  onSubmit() {

    const newUser:ChildUser = {
      id: (this.childUsers.length+1).toString(),
      firstname:this.userForm.get('firstname')!.value,
      lastname:this.userForm.get('lastname')!.value,
      dateOfBirth: new Date(this.userForm.get('dateOfBirth')!.value),
      email:this.userForm.get('email')!.value,
      phoneNumber:this.userForm.get('phoneNumber')!.value,
    }

    this.childUsers.push(newUser);


    this.userForm.get('firstname')?.reset();
    this.userForm.get('lastname')?.reset();
    this.userForm.get('dateOfBirth')?.reset();
    this.userForm.get('phoneNumber')?.reset();
    this.userForm.get('email')?.reset();
  }

}
