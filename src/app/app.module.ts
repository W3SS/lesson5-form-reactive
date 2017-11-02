import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {RouterModule} from '@angular/router';
import {StudentsComponent} from './students/students.component';
import {StudentsReactFormComponent} from './students-react-form/students-react-form.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        StudentsComponent,
        StudentsReactFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: 'home', component: HomeComponent},
            {path: 'about', component: AboutComponent},
            {path: 'contact', component: ContactComponent},
            {path: 'student-system', component: StudentsComponent},
            {path: 'student-system-react-form', component: StudentsReactFormComponent},
            {path: '', component: HomeComponent},
            {path: '**', redirectTo: 'home', pathMatch: 'full'},
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}


