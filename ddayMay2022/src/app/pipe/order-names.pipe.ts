import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderNames'
})
export class OrderNamesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
