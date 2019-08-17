import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1,name:". Every next level of your life will demand a different you."},
    {id:2,name:". Change the world by being yourself."},
    {id:3,name:". Never regret anything that made you smile."},
  ];

  constructor() { }

  ngOnInit() {
  }

}
