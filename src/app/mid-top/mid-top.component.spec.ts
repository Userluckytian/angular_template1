/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MidTopComponent } from './mid-top.component';

describe('MidTopComponent', () => {
  let component: MidTopComponent;
  let fixture: ComponentFixture<MidTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
