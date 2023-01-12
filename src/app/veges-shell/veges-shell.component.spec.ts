import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegesShellComponent } from './veges-shell.component';

describe('VegesShellComponent', () => {
  let component: VegesShellComponent;
  let fixture: ComponentFixture<VegesShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegesShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
