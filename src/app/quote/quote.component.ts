import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {name:"Every next level of your life will demand a different you."},
    {name:"Change the world by being yourself."},
    {name:"Never regret anything that made you smile."},
  ];

  constructor() { }

  ngOnInit() {
  }

}
