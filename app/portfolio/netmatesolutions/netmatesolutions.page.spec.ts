import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetmatesolutionsPage } from './netmatesolutions.page';

describe('NetmatesolutionsPage', () => {
  let component: NetmatesolutionsPage;
  let fixture: ComponentFixture<NetmatesolutionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetmatesolutionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetmatesolutionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
