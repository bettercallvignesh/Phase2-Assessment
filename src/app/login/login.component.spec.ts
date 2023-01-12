import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /*  it('should create', () => {
    expect(component).toBeTruthy();
  });  */
  it('username',()=>{
    const el=fixture.debugElement.query(By.css('#userName'));
    expect(el).toBeTruthy();
  });
  it('should have type is text',()=>{
    const el=fixture.debugElement.query(By.css('#userName'));
    expect(el.nativeElement.getAttribute('type')).toEqual('text');
  });
  it('should have name as userName',()=>{
    const el=fixture.debugElement.query(By.css('#userName'));
    expect(el.nativeElement.getAttribute('name')).toEqual('userName');
  });
  it('password',()=>{
    const el=fixture.debugElement.query(By.css('#password'));
    expect(el).toBeTruthy();
  });
  it('should have type is password',()=>{
    const el=fixture.debugElement.query(By.css('#password'));
    expect(el.nativeElement.getAttribute('type')).toEqual('password');
  });
  it('should have name as password',()=>{
    const el=fixture.debugElement.query(By.css('#password'));
    expect(el.nativeElement.getAttribute('name')).toEqual('password');
  });

});
