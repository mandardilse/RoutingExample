import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home.component';
import { ShowcardComponent } from './showcard/showcard.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule
  ],
  declarations: [CarouselComponent, HomeComponent, ShowcardComponent]
})
export class HomeModule { }
