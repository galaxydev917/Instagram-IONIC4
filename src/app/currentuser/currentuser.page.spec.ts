import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentuserPage } from './currentuser.page';

describe('CurrentuserPage', () => {
  let component: CurrentuserPage;
  let fixture: ComponentFixture<CurrentuserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentuserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
