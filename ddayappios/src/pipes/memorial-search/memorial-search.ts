import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memorialSearchPipe',
})
export class MemorialSearchPipe implements PipeTransform {
  transform(array: Array<string>): Array<string> {
    array.sort((a: any, b: any) => {
      var firstPerson, secondPerson;
      firstPerson = a['first_name'] + ' ';

      if (a['middle_initial'] && a['middle_initial'] != '') {
        firstPerson = firstPerson + a['middle_initial'] + ' ';
        if (a['second_middle_initial'] && a['second_middle_initial'] != '') {
          firstPerson = firstPerson + a['second_middle_initial'] + ' ';
        }
      }

      firstPerson = firstPerson + a['last_name'];

      if (a['suffix'] && a['suffix'] != '') {
        firstPerson = firstPerson + ' ' + a['suffix'];
      }

      secondPerson = b['first_name'] + ' ';
  
        if (b['middle_initial'] && b['middle_initial'] != '') {
          secondPerson = secondPerson + b['middle_initial'] + ' ';
          if (b['second_middle_initial'] && b['second_middle_initial'] != '') {
            secondPerson = secondPerson + b['second_middle_initial'] + ' ';
          }
        }
  
        secondPerson = secondPerson + b['last_name'];
  
        if (b['suffix'] && b['suffix'] != '') {
          secondPerson = secondPerson + ' ' + b['suffix'];
        }

	    if ( firstPerson < secondPerson ){
	    	return -1;
	    }else if( firstPerson > secondPerson ){
	        return 1;
	    }else{
	    	return 0;
	    }
    });
    return array;
  }
}
