import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memorialSearch'
})
export class MemorialSearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
