import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogDesignComponent } from './catalog-design.component';

describe('CatalogDesignComponent', () => {
  let component: CatalogDesignComponent;
  let fixture: ComponentFixture<CatalogDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
