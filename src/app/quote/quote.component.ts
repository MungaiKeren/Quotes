import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Every new level of your life will demand a different you','Mark Edward','Jane',new Date(2019,7,17)),
    new Quote(2,'Change the world by being yourself.','Jean Seon','Harriet',new Date(2019,0,17)),
    new Quote(3,'Be the best that you can ever be.','Jean Seon','Harriet',new Date(2019,1,16)),    
    new Quote(4,'We accept the love we think we deserve','Good reads','Kay',new Date(2019,2,13)),
    new Quote(5,'Its going to be hard but hard doesnt mean its impossible','Successful thoughts','Jean',new Date(2019,6,12)),
    new Quote(6,'Life is what happens when youre busy making other plans','Brainy Quote','Kay',new Date(2019,8,18)),
  ];


  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.dateCreated = new Date(quote.dateCreated);
    this.quotes.push(quote);
  }

  seeDetails(index){
    this.quotes[index].seeDetails = !this.quotes[index].seeDetails;
  }

  deleteQuote(isDelete, index){
    if(isDelete){

      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name} this quote?`);

      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }

  constructor() { }
  ngOnInit() {
  }
}
