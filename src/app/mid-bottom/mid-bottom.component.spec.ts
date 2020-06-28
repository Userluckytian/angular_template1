/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MidBottomComponent } from './mid-bottom.component';

describe('MidBottomComponent', () => {
  let component: MidBottomComponent;
  let fixture: ComponentFixture<MidBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
