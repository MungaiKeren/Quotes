import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, '. Every new level of your life will demand a different you','Mark Edward','Jane',new Date(2019,7,17)),
    new Quote(2,'. Change the world by being yourself.','Jean Seon','Harriet',new Date(2019,0,17)),
    new Quote(3,'. Be the best that you can ever be.','Jean Seon','Harriet',new Date(2019,11,16)),    
  ];

  seeDetails(index){
    this.quotes[index].seeDetails = !this.quotes[index].seeDetails;
  }

  deleteQuote(isDelete, index){
    if(isDelete){

      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}? this quote?`);

      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }

  constructor() { }
  ngOnInit() {
  }
}
