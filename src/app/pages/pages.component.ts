import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';
import { MenuService } from '../theme/components/menu/menu.service';
import { UserService } from './login/user.service';
import { BreadcrumbService } from './breadcrumb.service';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [MenuService]
})
export class PagesComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any;
  @ViewChild('backToTop') backToTop: any;
  @ViewChild('mainSidenavContent') mainSidenavContent: any;
  @ViewChild('mainContent') mainContent: ElementRef;
  public showOptionsSidenav: boolean = false;
  public showRightSidenav: boolean = false;
  public settings: Settings;
  public form: FormGroup;
  public menus = ['vertical'];
  public menuOption: string;
  public menuTypes = ['default', 'mini'];
  public menuTypeOption: string;
  public lastScrollTop: number = 0;
  public showBackToTop: boolean = false;
  public toggleSearchBar: boolean = false;
  private defaultMenu: string; //declared for return default menu when window resized 
  public showSidenav: boolean = false;
  email: any;
  breadcrumbDescription: string;

  constructor(
    public dialog: MatDialog,
    private breadcrumbService: BreadcrumbService,
    public appSettings: AppSettings,
    public router: Router,
    private menuService: MenuService,
    private userService: UserService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {

    this.email = this.userService.getEmail();
    if (window.innerWidth <= 768) {
      this.settings.menu = 'vertical';
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
    }
    this.menuOption = this.settings.menu;
    this.menuTypeOption = this.settings.menuType;
    this.defaultMenu = this.settings.menu;
    this.breadcrumbService.currentDescription.subscribe(description => {
      this.breadcrumbDescription = description;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => { this.settings.loadingSpinner = false }, 300);
    this.backToTop.nativeElement.style.display = 'none';
    this.email = this.userService.getEmail(); // Ensure email is retrieved again

    if (this.settings.menu === "vertical") {
      if (this.email) {
        this.initializeMenuByEmail(this.email);
      }
    }

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {

        if (!this.settings.sidenavIsPinned) {
          this.sidenav.close();
        }
        if (window.innerWidth <= 768) {
          this.sidenav.close();
        }
      }
    });
  }

  // New method for initializing menu based on email
  initializeMenuByEmail(email: string): void {
    switch (email) {
      case 'network@adhsys.com':
        // this.menuService.expandActiveSubMenu(this.menuService.getRCMMenuItems());
        // break;
        this.menuService.expandActiveSubMenu(this.menuService.getRCMMenuItems());
        break;
      case 'law@firm.com':
        this.menuService.expandActiveSubMenu(this.menuService.getLawFirmMenuItems());
        break;
      case 'funding@partner.com':
        this.menuService.expandActiveSubMenu(this.menuService.getPartnerMenuItems());
        break;
      case 'provider@provider.com':
        this.menuService.expandActiveSubMenu(this.menuService.getProviderMenuItems());
        break;
      case 'admin@adhsys.com':
        this.menuService.expandActiveSubMenu(this.menuService.getAdminMenuItems());
        break;
      case 'consultant@chartx.org':
        this.menuService.expandActiveSubMenu(this.menuService.getConsultantMenuItems());
        break;
      case 'custodian@provider.com':
        this.menuService.expandActiveSubMenu(this.menuService.getCustodianMenuItems());
        break;
      case 'user@adhsys.com':
        this.menuService.expandActiveSubMenu(this.menuService.getSalesMenuItems());
        break;
      case 'admin@optionnmatrix.com':
        this.menuService.expandActiveSubMenu(this.menuService.getAdminLoginMenuItems());
        break;
      default:
        console.warn('No matching menu for email:', email);
        break;
    }
  }


  public chooseMenu() {
    this.settings.menu = this.menuOption;
    this.defaultMenu = this.menuOption;
    // this.router.navigate(['/radar']);

    if (this.form.value.email === "network@adhsys.com" && this.form.value.password === "chartx@123") {
      this.userService.setEmail(this.form.value.email);
      this.router.navigate(['/radar_requestor']);
    } else if (this.form.value.email === "provider@provider.com" && this.form.value.password === "chartx@123") {
      this.userService.setEmail(this.form.value.email);
      this.router.navigate(['/radar-provider']);
    } else if (this.form.value.email === "admin@adhsys.com" && this.form.value.password === "chartx@123") {
      this.userService.setEmail(this.form.value.email);
      this.router.navigate(['/radar_admin']);
    } else if (this.form.value.email === "consultant@chartx.org" && this.form.value.password === "chartx@123") {
      this.userService.setEmail(this.form.value.email);
      this.router.navigate(['/radar']);
    } else if (this.form.value.email === "user@adhsys.com" && this.form.value.password === "chartx@123") {
      this.userService.setEmail(this.form.value.email);
      this.router.navigate(['/kanban']);
    } else {
      alert("Wrong E-mail Id or Password");
    }
  }

  public chooseMenuType() {
    this.settings.menuType = this.menuTypeOption;
  }

  public changeTheme(theme: string) {
    this.settings.theme = theme;
  }
  shouldShowApplications(): boolean {
    // Add your condition here
    return false; // or false based on your logic
  }
  public toggleSidenav() {
    this.sidenav.toggle();
  }
  toggleSidenavs() {
    this.showOptionsSidenav = !this.showOptionsSidenav;
    this.showRightSidenav = !this.showRightSidenav;
  }
  public onPageScroll(event: any) {
    (event.target.scrollTop > 300) ? this.backToTop.nativeElement.style.display = 'flex' : this.backToTop.nativeElement.style.display = 'none';
    if (this.settings.menu == 'horizontal') {
      if (this.settings.fixedHeader) {
        var currentScrollTop = (event.target.scrollTop > 56) ? event.target.scrollTop : 0;
        if (currentScrollTop > this.lastScrollTop) {
          document.querySelector('#horizontal-menu')!.classList.add('sticky');
          event.target.classList.add('horizontal-menu-hidden');
        }
        else {
          document.querySelector('#horizontal-menu')!.classList.remove('sticky');
          event.target.classList.remove('horizontal-menu-hidden');
        }
        this.lastScrollTop = currentScrollTop;
      }
      else {
        if (event.target.scrollTop > 56) {
          document.querySelector('#horizontal-menu')!.classList.add('sticky');
          event.target.classList.add('horizontal-menu-hidden');
        }
        else {
          document.querySelector('#horizontal-menu')!.classList.remove('sticky');
          event.target.classList.remove('horizontal-menu-hidden');
        }
      }
    }
  }

  public scrollToTop() {
    this.mainSidenavContent.scrollTo({
      top: 0
    });
    this.mainContent.nativeElement.scrollTo({
      duration: 100,
      top: 0
    });
  }


  @HostListener('window:resize')
  public onWindowResize(): void {
    if (window.innerWidth <= 768) {
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
      this.settings.menu = 'vertical'
    }
    else {
      (this.defaultMenu == 'horizontal') ? this.settings.menu = 'horizontal' : this.settings.menu = 'vertical'
      this.settings.sidenavIsOpened = true;
      this.settings.sidenavIsPinned = true;
    }
  }

  public closeSubMenus() {
    let menu = document.querySelector(".sidenav-menu-outer");
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

  searchlist() {
    this.router.navigate(['/reqestors']);
  }
  searchlist1() {
    this.router.navigate(['/providersearch']);
  }

  eventTypes3: string[] = [
    'Texas',
    'California',
    'Florida',
    'Virginia',
    'Alaska',
    'Hawaii',
    'Ohio',
  ];
  filteredEventTypes3: string[] = [...this.eventTypes3];
  selectedEventType3: string | null = null;
  applyFilter3(event: Event): void {
    const filterValue2 = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase(); // Safe casting to HTMLInputElement
    this.filteredEventTypes3 = this.eventTypes3.filter((eventType3) =>
      eventType3.toLowerCase().includes(filterValue2)
    );
  }
}