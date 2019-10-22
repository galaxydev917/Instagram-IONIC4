import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpostPage } from './detailpost.page';

describe('DetailpostPage', () => {
  let component: DetailpostPage;
  let fixture: ComponentFixture<DetailpostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailpostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailpostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
