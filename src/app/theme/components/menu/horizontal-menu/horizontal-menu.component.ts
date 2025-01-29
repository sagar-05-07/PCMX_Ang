import { Component, OnInit, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { MenuService } from '../menu.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { UserService } from 'src/app/pages/login/user.service';


@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MenuService]
})
export class HorizontalMenuComponent implements OnInit {
  @Input('menuParentId') menuParentId: any;
  public menuItems: Array<any>;
  public settings: Settings;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  title: string;

  constructor(
    public appSettings: AppSettings,
    public menuService: MenuService,
    public router: Router,
    private userService: UserService
  ) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    const email = this.userService.getEmail();
    if (email === 'network@adhsys.com') {
      this.title = 'Liam Johnson';
      this.menuItems = this.menuService.getRCMMenuItems();
    } else if (email === 'provider@provider.com') {
      this.title = 'Memorial Hospital';
      this.menuItems = this.menuService.getProviderMenuItems();
    } else if (email === 'admin@adhsys.com') {
      this.title = 'John Smith';
      this.menuItems = this.menuService.getAdminMenuItems();
    } else if (email === 'consultant@chartx.org') {
      this.title = 'Sophia Clark';
      this.menuItems = this.menuService.getConsultantMenuItems();
    } else if (email === 'user@adhsys.com') {
      this.title = 'William Smith';
      this.menuItems = this.menuService.getSalesMenuItems();
    }

    else if (email === 'admin@adhsys.com') {
      this.title = 'Sophia Clark';
      this.menuItems = this.menuService.getAdminLoginMenuItems();
    }


    this.menuItems = this.menuItems.filter(item => item.parentId === this.menuParentId);
  }

  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.settings.fixedHeader) {
          let mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.scrollTop = 0;
          }
        } else {
          document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
        }
      }
    });
  }
}
