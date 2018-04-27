import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgProgressModule } from '@ngx-progressbar/core';

import { SharedRoutingModule } from './shared-routing.module';
import { AppHttpInterceptor } from './service/app-http-interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterbarComponent } from './footerbar/footerbar.component';
import { LoaderService } from './service/loader.service';  
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedRoutingModule,
    NgbModule,
    NgProgressModule
  ],
  providers:[
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi:true
    }
  ],
  declarations: [NavbarComponent, FooterbarComponent, LoaderComponent],
  exports:[NavbarComponent, FooterbarComponent, LoaderComponent]
})
export class SharedModule { }
