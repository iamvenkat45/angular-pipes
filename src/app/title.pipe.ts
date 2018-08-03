import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value, gender?: any, anotherValue?): any {

    const title = gender === 'male' ? 'Mr.' : 'Miss.';
    return `${title} ${value}`;
  }

}
