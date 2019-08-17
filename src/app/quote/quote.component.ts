import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, '. Every new level of your life will demand a different you','Mark Edward','Jane'),
    new Quote(2,'. Change the world by being yourself.','Jean Seon','Harriet'),
    new Quote(3,'. Be the best that you can ever be.','Jean Seon','Harriet'),    
  ];

  seeDetails(index){
    this.quotes[index].seeDetails = !this.quotes[index].seeDetails;
  }
  constructor() { }

  ngOnInit() {
  }

}
