import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/pages/users/user.model';

@Pipe({ name: 'UserSearchPipe', pure: false })
export class UserSearchPipe implements PipeTransform {
  transform(value: User[] | null, args?: any): any {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(user => {
        if (user.profile.name) {
          return user.profile.name.search(searchText) !== -1;
        }
        else{
          return user.username.search(searchText) !== -1;
        }
      });
    }
  }
}