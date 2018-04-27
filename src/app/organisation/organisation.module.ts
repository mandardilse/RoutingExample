import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationRoutingModule } from './organisation-routing.module';
import { OrgListComponent } from './org-list/org-list.component';
import { OrgLoginComponent } from './org-login/org-login.component';
import { OrgRegistrationComponent } from './org-registration/org-registration.component';

@NgModule({
  imports: [
    CommonModule,
    OrganisationRoutingModule
  ],
  declarations: [OrgListComponent, OrgLoginComponent, OrgRegistrationComponent]
})
export class OrganisationModule { }
