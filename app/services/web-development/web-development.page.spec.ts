import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopmentPage } from './web-development.page';

describe('WebDevelopmentPage', () => {
  let component: WebDevelopmentPage;
  let fixture: ComponentFixture<WebDevelopmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDevelopmentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDevelopmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
