import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Person} from '../person';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [DataService]
})
export class FormComponent implements OnInit {

  items: Person[] = [];
  constructor(private dataService: DataService) {}

  addItem(login: string, email: string, firstName: string, lastName: string, password: string){

    this.dataService.addData(login, email, firstName, lastName, password);
  }
  ngOnInit() {
    this.items = this.dataService.getData();
  }

}
