import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTerritoryIndexComponent } from './sales-territory-index.component';

describe('SalesTerritoryIndexComponent', () => {
  let component: SalesTerritoryIndexComponent;
  let fixture: ComponentFixture<SalesTerritoryIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTerritoryIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTerritoryIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
