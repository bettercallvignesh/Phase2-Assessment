import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormField } from '@angular/material/form-field';
import { By } from '@angular/platform-browser';
import { MaterialModule } from '../material-module/material.module';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
  
      declarations: [ ContactComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
  
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
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

  it(`should have as title 'contact'`, () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const app = fixture.componentInstance;
    expect(app.name).toEqual('contact');
  });
  it('should check phone', () => {
 
    const el=fixture.debugElement.query(By.css('#phone'));
    expect(el.nativeElement.getAttribute('type')).toEqual('number');
  });
  it('should check email', () => {
 
    const el=fixture.debugElement.query(By.css('#email'));
    expect(el.nativeElement.getAttribute('type')).toEqual('text');
  });
  it('should check comment', () => {
 
    const el=fixture.debugElement.query(By.css('#comment'));
    expect(el.nativeElement.getAttribute('type')).toEqual('text');
  });
});
