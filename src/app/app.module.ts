import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from './theme/utils/custom-overlay-container';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { PipesModule } from './theme/pipes/pipes.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { AppSettings } from './app.settings';
import { SidenavComponent } from './theme/components/sidenav/sidenav.component';
import { VerticalMenuComponent } from './theme/components/menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from './theme/components/menu/horizontal-menu/horizontal-menu.component';
import { BreadcrumbComponent } from './theme/components/breadcrumb/breadcrumb.component';
import { FlagsMenuComponent } from './theme/components/flags-menu/flags-menu.component';
import { FullScreenComponent } from './theme/components/fullscreen/fullscreen.component';
import { ApplicationsComponent } from './theme/components/applications/applications.component';
import { MessagesComponent } from './theme/components/messages/messages.component';
import { UserMenuComponent } from './theme/components/user-menu/user-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatCardModule } from '@angular/material/card';
import { LogoutconfirmationComponent } from './pages/logoutconfirmation/logoutconfirmation.component';
import { NgxEditorModule } from 'ngx-editor';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ContactsupportComponent } from './theme/components/contactsupport/contactsupport.component';
import { ForgotComponent } from './pages/login/forgot/forgot.component';
import { MatSelectSearchModule } from 'mat-select-search';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    NgScrollbarModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),

    PipesModule,
    AppRoutingModule,
    MatBadgeModule,
    SharedModule,
    FormsModule,
    NgxChartsModule,
    NgApexchartsModule,
    CanvasJSAngularChartsModule,
    MatCardModule,
    NgxEditorModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatSelectSearchModule

  ],
  declarations: [
    AppComponent,
    LogoutconfirmationComponent,
    PagesComponent,
    SidenavComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    FlagsMenuComponent,
    FullScreenComponent,
    ApplicationsComponent,
    ContactsupportComponent,
    MessagesComponent,
    UserMenuComponent,
    ForgotComponent,
  ],


  providers: [
    provideNgxMask(),
    DatePipe,
    AppSettings,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: OverlayContainer, useClass: CustomOverlayContainer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }