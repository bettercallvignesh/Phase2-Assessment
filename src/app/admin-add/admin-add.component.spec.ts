import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AdminAddComponent } from './admin-add.component';

describe('AdminAddComponent', () => {
  let component: AdminAddComponent;
  let fixture: ComponentFixture<AdminAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddComponent ],
      imports:[ReactiveFormsModule,
      StoreModule.forRoot({}),HttpClientTestingModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check name', () => {
 
    const el=fixture.debugElement.query(By.css('#name'));
    expect(el.nativeElement.getAttribute('type')).toEqual('text');
  });
});
