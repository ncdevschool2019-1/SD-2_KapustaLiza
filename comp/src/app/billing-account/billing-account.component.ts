import { Component, OnInit } from '@angular/core';
import {Purse} from '../purse';

@Component({
  selector: 'app-billing-account',
  templateUrl: './billing-account.component.html',
  styleUrls: ['./billing-account.component.css']
})
export class BillingAccountComponent implements OnInit {
  purse: Purse = {
    id: 1,
    balane: 47,
    numberCard: 6721908734622096,
    date: '06/20',
    kodCard: 719
  }

  constructor() { }

  ngOnInit() {
  }

}
