import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionstPage } from './fashionst.page';

describe('FashionstPage', () => {
  let component: FashionstPage;
  let fixture: ComponentFixture<FashionstPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionstPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
