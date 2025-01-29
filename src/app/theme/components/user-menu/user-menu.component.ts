import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/pages/login/user.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserMenuComponent implements OnInit {
  public userImage = '../assets/img/users/user.jpg';
  title: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    const email = this.userService.getEmail();
    if (email === 'network@adhsys.com') {
      this.title = 'Liam Johnson';

    } else if (email === 'provider@provider.com') {
      this.title = 'Memorial Hospital';

    } else if (email === 'admin@adhsys.com') {
      this.title = 'John Smith';

    } else if (email === 'consultant@chartx.org') {
      this.title = 'Sophia Clark';

    } else if (email === 'user@adhsys.com') {
      this.title = 'William Smith';

    }
  }

}
