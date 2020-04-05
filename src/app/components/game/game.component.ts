import { Component, OnInit } from '@angular/core';
import {CurrencyClientService, RootObject} from '../../services/currency-client.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  message: string;
  rootObject: RootObject;
  result: string;

  constructor(private currencyClientService: CurrencyClientService) {
  }

  ngOnInit(): void {
    this.currencyClientService.getCurrency().subscribe(value => {
      this.rootObject = value;
    });
  }

  sayHello(value: string) {
    this.message = 'Witaj ' + value;

  }

  check(value: number) {
    if ( value > this.rootObject.rates.PLN){
      this.result = 'Za dużo!';
    } else if (value < this.rootObject.rates.PLN){
      this.result = 'Za mało!';
    } else {
      this.result = 'Udało się!!!';
    }
  }
}
