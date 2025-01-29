import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { MenuService } from '../menu/menu.service';
import { UserService } from 'src/app/pages/login/user.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutconfirmationComponent } from 'src/app/pages/logoutconfirmation/logoutconfirmation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MenuService]
})
export class SidenavComponent implements OnInit {

  public logoImage: string;
  public logoImage1: string;
  public userImage = '../assets/img/users/user.jpg';
  public menuItems: Array<any>;
  public settings: Settings;
  title: string;

  constructor(
    public router: Router,
    public dialog: MatDialog,
    public appSettings: AppSettings,
    public menuService: MenuService,
    private userService: UserService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    const email = this.userService.getEmail();
    if (email === 'network@adhsys.com') {
      this.menuItems = this.menuService.getRCMMenuItems();
      this.title = 'Networks'
      this.logoImage1 = '../../../../assets/adh-new.png';
    }
    else if (email === 'law@firm.com') {
      this.menuItems = this.menuService.getLawFirmMenuItems();
      this.title = 'Law Firm';
      this.logoImage1 = '../../../../assets/adh-new.png';
    }
    else if (email === 'funding@partner.com') {
      this.menuItems = this.menuService.getPartnerMenuItems();
      this.title = 'Lenders';
      this.logoImage1 = '../../../../assets/adh-new.png';
    }
    else if (email === 'provider@provider.com') {
      this.menuItems = this.menuService.getProviderMenuItems();
      this.title = 'Providers';
      this.logoImage1 = '../../../../assets/adh-new.png';
    }
    else if (email === 'admin@adhsys.com') {
      this.menuItems = this.menuService.getAdminMenuItems();
      this.title = 'Admin';
      this.logoImage = '../../../../assets/adh-new1.png';
    }


    else if (email === 'consultant@chartx.org') {
      this.title = 'Sophia Clark';
      this.menuItems = this.menuService.getConsultantMenuItems();
    }
    else if (email === 'custodian@provider.com') {
      this.title = 'Sophia Clark';
      this.menuItems = this.menuService.getCustodianMenuItems();
    } else if (email === 'user@adhsys.com') {
      this.title = 'William Smith';
      this.menuItems = this.menuService.getSalesMenuItems();

    }


    else {
      //this.menuItems = this.menuService.getHorizontalMenuItems();
    }
    // this.menuItems = this.menuService.getVerticalMenuItems();
  }

  public closeSubMenus() {
    let menu = document.getElementById("vertical-menu");
    if (menu) {
      for (let i = 0; i < menu.children[0].children.length; i++) {
        let child = menu.children[0].children[i];
        if (child) {
          if (child.children[0].classList.contains('expanded')) {
            child.children[0].classList.remove('expanded');
            child.children[1].classList.remove('show');
          }
        }
      }
    }
  }
  public openConfirmationdialog(contact: any) {
    let dialogRef = this.dialog.open(LogoutconfirmationComponent, {
      data: contact,
      height: 'auto',
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(data => {

      //this.getcontacts(this.id);
      // this.getcontacts((this.currentPage * this.pageSize) + 1, (this.currentPage * this.pageSize) + this.pageSize);
    });
  }
}
