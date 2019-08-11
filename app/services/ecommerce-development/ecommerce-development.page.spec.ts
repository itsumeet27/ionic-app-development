import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceDevelopmentPage } from './ecommerce-development.page';

describe('EcommerceDevelopmentPage', () => {
  let component: EcommerceDevelopmentPage;
  let fixture: ComponentFixture<EcommerceDevelopmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceDevelopmentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceDevelopmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
