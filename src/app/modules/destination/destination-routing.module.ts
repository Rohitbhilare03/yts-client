import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './destination.component';
import { PlaceComponent } from './place/place.component';

const routes: Routes = [
  {
    path: ':destination',
    component: DestinationComponent
  },
  {
    path: ':destination/:place',
    component: PlaceComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationRoutingModule { }
