import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegesShellComponent } from './veges-shell.component';

describe('VegesShellComponent', () => {
  let component: VegesShellComponent;
  let fixture: ComponentFixture<VegesShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegesShellComponent ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'veges'`, () => {
    const fixture = TestBed.createComponent(VegesShellComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('veges');
  });
});
