import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ShowCatComponent } from './catalog/show-cat/show-cat.component';
import { AddEditCatComponent } from './catalog/add-edit-cat/add-edit-cat.component';
import { WorkersComponent } from './workers/workers.component';
import { ShowWorComponent } from './workers/show-wor/show-wor.component';
import { AddEditWorComponent } from './workers/add-edit-wor/add-edit-wor.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkerProfileComponent } from './worker-profile/worker-profile.component';
import { ShowProfWorComponent } from './worker-profile/show-prof-wor/show-prof-wor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    CatalogComponent,
    ShowCatComponent,
    AddEditCatComponent,
    WorkersComponent,
    ShowWorComponent,
    AddEditWorComponent,
    WorkerProfileComponent,
    ShowProfWorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
