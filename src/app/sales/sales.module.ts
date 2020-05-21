import { NgModule } from '@angular/core';
import { SalesTerritoryRoutingModule, routingComponents } from './sales-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [routingComponents],
  imports: [
    SharedModule,
    SalesTerritoryRoutingModule
  ]
})
export class SalesModule { }
