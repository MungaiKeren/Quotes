import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quoteAge'
})
export class QuoteAgePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
