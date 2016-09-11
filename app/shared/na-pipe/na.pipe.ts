import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na'
})
export class NaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value || 'N/A';
  }

}
