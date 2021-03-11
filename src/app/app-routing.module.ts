import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WorkersComponent} from './workers/workers.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {WorkerProfileComponent} from './worker-profile/worker-profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '*', component: HomeComponent},
  {path: 'workers', component: WorkersComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cat/worker/:id', component: WorkerProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
