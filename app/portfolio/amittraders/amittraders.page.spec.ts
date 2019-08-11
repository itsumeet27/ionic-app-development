import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmittradersPage } from './amittraders.page';

describe('AmittradersPage', () => {
  let component: AmittradersPage;
  let fixture: ComponentFixture<AmittradersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmittradersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmittradersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
