import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxMatTimelineModule } from 'ngx-mat-timeline';
import { VisitRadarComponent } from './visit-radar/visit-radar.component';
import { VisitNotesComponent } from './visit-notes/visit-notes.component';
import { VisitDocumentsComponent } from './visit-documents/visit-documents.component';
import { VisitCliamsComponent } from './visit-cliams/visit-cliams.component';
import { VisitActivityComponent } from './visit-activity/visit-activity.component';

const routes: Routes = [

    { path: '', redirectTo: 'radar', pathMatch: 'full' },

    { path: 'radar', component: VisitRadarComponent },
    { path: 'notes', component: VisitNotesComponent },
    { path: 'documents', component: VisitDocumentsComponent },
    { path: 'claims', component: VisitCliamsComponent },
    { path: 'activity', component: VisitActivityComponent },

]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        NgScrollbarModule,
        NgxMatTimelineModule,
    ],
    declarations: [

        VisitRadarComponent,
        VisitNotesComponent,
        VisitDocumentsComponent,
        VisitCliamsComponent,
        VisitActivityComponent
    ]
    // providers: [ChatService]
})
export class VisitsDashboardModule { }