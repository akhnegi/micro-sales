import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sales-territory-index',
  templateUrl: './sales-territory-index.component.html',
  styleUrls: ['./sales-territory-index.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SalesTerritoryIndexComponent implements OnInit {
  salesTerritoryList: any[];

  constructor() {
  }

  ngOnInit(): void {
    this.salesTerritoryList = [
      { id: 1, name: 'Northwest', countryRegionCode: 'US', group: 'North America' },
      { id: 2, name: 'Northeast', countryRegionCode: 'US', group: 'North America' },
      { id: 3, name: 'Central', countryRegionCode: 'US', group: 'North America' },
      { id: 4, name: 'Southwest', countryRegionCode: 'US', group: 'North America' },
      { id: 5, name: 'Southeast', countryRegionCode: 'US', group: 'North America' },
      { id: 6, name: 'Canada', countryRegionCode: 'US', group: 'North America' },
      { id: 7, name: 'France', countryRegionCode: 'CA', group: 'Europe' }
    ];
  }
}
