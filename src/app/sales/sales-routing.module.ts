import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesTerritoryIndexComponent } from './sales-territory-index/sales-territory-index.component';

const routes: Routes = [
    {
        path: '', component: SalesTerritoryIndexComponent, data: { title: "Sales Territories List" }
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SalesTerritoryRoutingModule { }
export const routingComponents = [SalesTerritoryIndexComponent]
