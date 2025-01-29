import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { BrowserModule } from '@angular/platform-browser';
import { ForgotComponent } from './pages/login/forgot/forgot.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: '',
        component: PagesComponent, children: [
            { path: 'ui', loadChildren: () => import('./pages/ui/ui.module').then(m => m.UiModule), data: { breadcrumb: 'UI' } },
            { path: 'icons', loadChildren: () => import('./pages/icons/icons.module').then(m => m.IconsModule), data: { breadcrumb: 'Material Icons' } },
            { path: 'mailbox', loadChildren: () => import('./pages/mailbox/mailbox.module').then(m => m.MailboxModule), data: { breadcrumb: 'Mailbox' } },
            { path: 'dynamic-menu', loadChildren: () => import('./pages/dynamic-menu/dynamic-menu.module').then(m => m.DynamicMenuModule), data: { breadcrumb: 'Dynamic Menu' } },
            { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule), data: { breadcrumb: 'Profile' } },


            {
                path: 'rcm-login',
                loadChildren: () =>
                    import('./pages/rcm-login/rcm-login.module').then((m) => m.RcmLogInModule),
            },

            {
                path: 'super-admin',
                loadChildren: () =>
                    import('./pages/super-admin/super-admin.module').then((m) => m.SuperAdminModule),
            },

            {
                path: 'provider-login',
                loadChildren: () =>
                    import('./pages/provider-login/provider-login.module').then((m) => m.ProviderLoginModule),
            },

            {
                path: 'law-firm-login',
                loadChildren: () =>
                    import('./pages/law-firm-login/law-firm-login.module').then((m) => m.LawFirmLoginModule),
            },

            {
                path: 'partner-login',
                loadChildren: () =>
                    import('./pages/partner-login/partner-login.module').then((m) => m.PartnerLoginModule),
            },
        ]
    },
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
    { path: 'forgot', component: ForgotComponent },
    { path: 'landing', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },


];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
            // relativeLinkResolution: 'legacy',
        })
    ],
    exports: [
        RouterModule,

    ]
})
export class AppRoutingModule { }