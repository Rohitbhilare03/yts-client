import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationRoutingModule } from './destination-routing.module';
import { PlaceComponent } from './place/place.component';


@NgModule({
  declarations: [PlaceComponent],
  imports: [
    CommonModule,
    DestinationRoutingModule
  ]
})
export class DestinationModule { }
