import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { createCustomElement } from "@angular/elements";
import { AppComponent } from './app.component';
import { SalesTerritoryIndexComponent } from './sales/sales-territory-index/sales-territory-index.component';

const routes: Routes = [{
  path: 'territories', loadChildren: () => import('./sales/sales.module').then(e => e.EmployeeModule)
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const salesTerritoryIndexComp = createCustomElement(SalesTerritoryIndexComponent, { injector });
    customElements.define('sales-territory-index', salesTerritoryIndexComp);
  }
}
