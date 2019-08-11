import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveWebDevelopmentPage } from './responsive-web-development.page';

describe('ResponsiveWebDevelopmentPage', () => {
  let component: ResponsiveWebDevelopmentPage;
  let fixture: ComponentFixture<ResponsiveWebDevelopmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveWebDevelopmentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveWebDevelopmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
