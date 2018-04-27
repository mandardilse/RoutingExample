import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrgListComponent } from './org-list/org-list.component';
import { OrgLoginComponent } from './org-login/org-login.component';
import { OrgRegistrationComponent } from './org-registration/org-registration.component';

const routes: Routes = [
  { path: 'org', children: [
  { path: '', component: OrgListComponent},
  { path: 'login', component: OrgLoginComponent},
  { path: 'register', component: OrgRegistrationComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationRoutingModule { }
