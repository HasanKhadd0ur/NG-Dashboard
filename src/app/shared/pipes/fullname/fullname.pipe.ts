import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../../slices/users/models/user';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(user : User): string {
    if (!user) {
      return '';
    }
    return `${user.first_name} ${user.last_name}`;
  }

}