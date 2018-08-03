import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(list: any, limitValue?: any): any {
    const newList = [];
    list.forEach((listItem, index) => {
      if (index < limitValue) {
        newList.push(listItem);
      } else {
        return;
      }
    });

    return newList;
  }

}
