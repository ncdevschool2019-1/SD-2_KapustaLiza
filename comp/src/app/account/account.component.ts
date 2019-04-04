import { Component, OnInit } from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  person: Person = {
    id: 1,
    login: 'ivanov_ivan',
    email: 'ivanov_ivan@gmail.com',
    firstName: 'Ivan',
    lastName: 'Ivanov',
    subscriptions: 4,
    password: 'qwerty1234'
  }

  constructor() { }

  ngOnInit() {
  }

}
