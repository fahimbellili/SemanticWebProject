import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PatientComponent} from './patient/patient.component';
import {SymptomeComponent} from './symptome/symptome.component';
import {MaladieComponent} from './maladie/maladie.component';
import {MedicamentComponent} from './medicament/medicament.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';

const appRoutes: Routes = [
    {path: '', component: PatientComponent},
    {path: 'patients', component: PatientComponent},
    {path: 'symptomes', component: SymptomeComponent},
    {path: 'maladies', component: MaladieComponent},
    {path: 'medicaments', component: MedicamentComponent},
    {path: 'diagnostic', component: DiagnosticComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        PatientComponent,
        SymptomeComponent,
        MaladieComponent,
        MedicamentComponent,
        NavbarComponent,
        DiagnosticComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
