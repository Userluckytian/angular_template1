/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LeftUpComponent } from './left-up.component';

describe('LeftUpComponent', () => {
  let component: LeftUpComponent;
  let fixture: ComponentFixture<LeftUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
